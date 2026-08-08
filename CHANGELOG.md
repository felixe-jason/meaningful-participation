# Changelog

All notable changes to the Meaningful Participation Protocol are recorded here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added
- `schemas/` — the two JSON Schemas as standalone files, extracted from `SPECIFICATION.md`.
  These are now the machine-readable source of truth.
- `examples/` — examples that validate against the schemas: a media participation record, a peer
  review record, a minimal record and an ecosystem relationship.
- `CONTRIBUTING.md` and `GOVERNANCE.md`.

## [0.1] — draft

Initial public draft of the protocol.

### Added
- Two primary Protocol Objects: Participation Record and Ecosystem Relationship.
- Four Commitment Classes: Capital, Effort, Knowledge, Standing.
- Supporting Protocol Objects: Meaning Profile, Evidence, Verification, Status Statement.
- Six core Relationship Types: `constituentOf`, `governedBy`, `operatedBy`, `affiliatedWith`,
  `successorTo`, `delegatesAssertionAuthorityTo`.
- Interoperability Policies as an ecosystem concern, deliberately not standardised.
- The Meaningful Participation Reference Architecture (MPRA), of which MPP is the Participation
  layer.

### Changed
- The reference architecture was renamed to **MPRA**. Earlier drafts used a different name; MPRA is
  now the only correct term.
- `recognisesParticipationFrom` was **removed** from the core Relationship Types. Recognition is
  now expressed through an ecosystem's own Interoperability Policy rather than as a relationship
  assertion.
