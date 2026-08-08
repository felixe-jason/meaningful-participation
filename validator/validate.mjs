#!/usr/bin/env node
/**
 * mpp-validate — structural validation of MPP Protocol Objects.
 *
 *   node validator/validate.mjs <file|glob> [...]
 *   node validator/validate.mjs examples/*.json
 *   node validator/validate.mjs --expect-invalid examples/invalid/*.json
 *
 * The object's `type` property selects the schema. Validation is structural
 * only: it checks serialisation against the JSON Schemas in schemas/. It does
 * not resolve identifiers, verify signatures, check that a referenced Meaning
 * Profile exists, or make any judgement about the participation itself — those
 * require ecosystem-specific evaluation (see SPECIFICATION.md §22, §23).
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, resolve, extname } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const here = dirname(fileURLToPath(import.meta.url));
const schemaDir = resolve(here, "..", "schemas");

const SCHEMA_FOR_TYPE = {
  ParticipationRecord: "participation-record.schema.json",
  EcosystemRelationship: "ecosystem-relationship.schema.json"
};

const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);

const validators = Object.fromEntries(
  Object.entries(SCHEMA_FOR_TYPE).map(([type, file]) => [
    type,
    ajv.compile(JSON.parse(readFileSync(join(schemaDir, file), "utf8")))
  ])
);

/** Expand directories to the .json files inside them; leave files as-is. */
function expand(paths) {
  const out = [];
  for (const p of paths) {
    let st;
    try {
      st = statSync(p);
    } catch {
      out.push(p); // let the read fail loudly below
      continue;
    }
    if (st.isDirectory()) {
      for (const entry of readdirSync(p)) {
        const full = join(p, entry);
        if (statSync(full).isFile() && extname(entry) === ".json") out.push(full);
      }
    } else {
      out.push(p);
    }
  }
  return out;
}

const args = process.argv.slice(2);
const expectInvalid = args.includes("--expect-invalid");
const files = expand(args.filter((a) => !a.startsWith("--")));

if (files.length === 0) {
  console.error("usage: node validator/validate.mjs [--expect-invalid] <file|dir> ...");
  process.exit(2);
}

let failures = 0;

for (const file of files) {
  let doc;
  try {
    doc = JSON.parse(readFileSync(file, "utf8"));
  } catch (err) {
    report(file, false, [`not valid JSON: ${err.message}`]);
    continue;
  }

  const validate = validators[doc.type];
  if (!validate) {
    report(file, false, [
      `unknown object type ${JSON.stringify(doc.type ?? null)} — expected one of ${Object.keys(
        SCHEMA_FOR_TYPE
      ).join(", ")}`
    ]);
    continue;
  }

  const ok = validate(doc);
  const messages = (validate.errors ?? []).map(
    (e) => `${e.instancePath || "/"} ${e.message}${e.params?.allowedValues ? ` (${e.params.allowedValues.join(", ")})` : ""}`
  );
  report(file, ok, messages, doc.type);
}

function report(file, ok, messages, type) {
  const passed = expectInvalid ? !ok : ok;
  const label = expectInvalid ? (ok ? "UNEXPECTEDLY VALID" : "rejected") : ok ? "valid" : "INVALID";
  const mark = passed ? "  ok  " : "  FAIL";

  console.log(`${mark}  ${file}${type ? `  (${type})` : ""}  ${label}`);
  if (!ok && !expectInvalid) {
    for (const m of messages) console.log(`        ${m}`);
  }
  if (!passed) failures += 1;
}

const verb = expectInvalid ? "rejected as expected" : "validated";
console.log(
  failures === 0
    ? `\n${files.length} file(s) ${verb}.`
    : `\n${failures} of ${files.length} file(s) did not behave as expected.`
);

process.exit(failures === 0 ? 0 : 1);
