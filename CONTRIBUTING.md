# Contributing

Thank you for your interest in the Meaningful Participation Protocol. MPP is intended to evolve
through practical implementation across diverse ecosystems, and feedback from people actually
building things is the most useful kind.

## Ways to contribute

**Report an ambiguity.** If two people could read a normative requirement differently, that is a
bug in the specification. Open an issue quoting the section.

**Describe a use case.** Tell us how participation is recognised in your ecosystem and where the
protocol does not fit. Use cases that break the model are more valuable than ones that confirm it.

**Improve the examples.** A realistic example from a domain not yet covered — healthcare,
education, civic participation, open source — helps implementers more than additional prose.

**Implement it.** Independent implementations expose problems nothing else will. Tell us what was
awkward.

## Before opening a pull request

- **Discuss normative changes first.** Anything touching a MUST, MUST NOT, SHOULD or the
  Commitment Classes should start as an issue. Editorial fixes can go straight to a pull request.
- **Schemas are the source of truth.** `schemas/*.schema.json` are the machine-readable definition.
  If you change a schema, update the corresponding section of `SPECIFICATION.md` in the same pull
  request so the two never drift.
- **Every example must validate.** The schemas are standard JSON Schema (draft 2020-12), so any
  conformant validator will do:

  ```bash
  npx ajv-cli validate -s schemas/participation-record.schema.json -d examples/media-participation.json
  ```

- **Add an example with a schema change.** If you add a capability, add an example that exercises
  it.

## Design principles to respect

Proposals that conflict with these are unlikely to be accepted, because they undo the reason the
protocol exists:

- **Representation, not interpretation.** MPP describes what happened. It does not score, rank,
  reward or govern. Anything that computes a value belongs in an ecosystem, not in the protocol.
- **Ecosystem-defined meaning.** No universal definition of what is meaningful.
- **Stable core.** New capability should arrive through extensions rather than by growing the
  required core.
- **Technology neutral.** No dependency on any particular storage, ledger or identity system.
- **Privacy by design.** Minimise disclosure. Pseudonymity must remain possible everywhere.

## Commitment Classes

The four classes — Capital, Effort, Knowledge, Standing — are the most sensitive part of the
protocol, because every ecosystem's interoperability depends on their meaning staying stable.
Proposals to add, remove or redefine a class need a use case that genuinely cannot be expressed
with the existing four. Ecosystem-specific nuance belongs in extensions.

## Style

- British English.
- RFC 2119 keywords in capitals, and only where a genuine requirement is intended.
- Examples use `example.org` unless illustrating a real, consenting implementation.

## Licence

Contributions are accepted under the Apache License 2.0, as stated in `LICENSE`.
