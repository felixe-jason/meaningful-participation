# meaningful-participation

Open standards for representing Meaningful Participation across digital ecosystems.

**Status:** draft v0.1 &nbsp;·&nbsp; **Licence:** Apache 2.0

The Meaningful Participation Reference Architecture (MPRA) and Meaningful Participation Protocol (MPP) provide an open framework for representing Meaningful Participation in a portable, interoperable and independently verifiable way.

MPRA provides the reference architecture. MPP provides the open protocol for representing Meaningful Participation within that architecture.

Rather than prescribing what participation should mean, MPRA and MPP enable each ecosystem to define, interpret and incentivise Meaningful Participation according to its own objectives, values and governance.

The protocol standardises the representation of participation while leaving interoperability policies, interpretation and incentives under the control of each ecosystem.

## Why?

Digital ecosystems increasingly depend upon meaningful human contribution, yet participation histories typically remain isolated within individual platforms and organisations.

This repository proposes open infrastructure that enables participants to carry portable records of Meaningful Participation while allowing every ecosystem to retain complete control over how those records are interpreted and rewarded.

## In one example

A Participation Record states what happened. It never states what that is worth.

```json
{
  "type": "ParticipationRecord",
  "mppVersion": "0.1",
  "id": "urn:uuid:9f2c1d84-6a3e-4a5b-8c17-2be0f4d9a731",
  "ecosystem": "urn:mpp:ecosystem:01JQ4C6AQ9H9H30C27Y4HPRT52",
  "participants": [
    { "id": "https://orcid.org/0000-0002-1825-0097", "roles": ["reviewer"] },
    { "id": "https://journal.example.org/identifiers/editorial-system", "roles": ["asserter"] }
  ],
  "participationType": "https://example.org/mpp/participation-types/peer-review",
  "participationDescription": "Completed a substantive review of a submitted research paper.",
  "commitmentClasses": ["effort", "knowledge", "standing"],
  "meaningProfile": "https://example.org/mpp/meaning-profiles/verified-peer-review/v1",
  "participationTimestamp": "2026-07-28T13:15:00Z",
  "recordCreationTimestamp": "2026-07-28T13:22:14Z"
}
```

No score, no reputation, no reward — those belong to whichever ecosystem reads the record.

## Repository contents

| Path | What it holds |
|---|---|
| `SPECIFICATION.md` | The normative protocol specification |
| `MPRA.md` | The reference architecture: Identity, Credentials, Participation, Interpretation, Incentives |
| `schemas/` | JSON Schemas for each Protocol Object — the machine-readable source of truth |
| `examples/` | Validating examples, plus `invalid/` fixtures that must be rejected |
| `validator/` | A structural validator for MPP objects |
| `CONTRIBUTING.md` | How to propose changes |
| `GOVERNANCE.md` | How the protocol is stewarded, and how that should change |
| `CHANGELOG.md` | What changed between drafts |

## Validating your objects

```bash
npm install
node validator/validate.mjs path/to/your-record.json
```

Or check everything in the repository:

```bash
npm test
```

The validator selects a schema from the object's `type` and checks serialisation only. It does not
resolve identifiers, verify signatures or evaluate whether the participation was genuinely
meaningful — those require ecosystem-specific evaluation.

## Potential application domains include:

- civic participation
- corporate ecosystems
- education
- media
- open-source software
- professional communities
- scientific collaboration
- sport
- volunteering
- many other participatory ecosystems
