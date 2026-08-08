# Governance

*Status: initial. This document describes how MPP is stewarded today. It is expected to be revised
by the maintainer as the protocol develops.*

## Current stage

MPP is at an early draft stage (v0.1). The specification is authored and maintained by Jason
Lambert at Felixe, and published openly under the Apache License 2.0 so that it can be
implemented and improved by others.

## Decision-making

- **Editorial changes** — clarifications, typos, better examples — are made by the maintainer.
- **Normative changes** — anything affecting a MUST, MUST NOT, SHOULD, the Commitment Classes, the
  core Relationship Types or the schemas — should be raised as an issue before a pull request, and
  recorded in `CHANGELOG.md` when accepted.
- **Breaking changes** require a version increment and a migration note.

## Versioning

The protocol version is expressed in every object as `mppVersion`.

- **0.x** — draft. Breaking changes are possible between versions and will be documented.
- **1.0** — first stable version. After 1.0, breaking changes require a major version increment.

Objects issued under an earlier version remain valid. Records are immutable; a protocol revision
never invalidates records already issued.

## What governance does not cover

MPP governs the protocol, not its use. It does not govern:

- what any ecosystem chooses to recognise as Meaningful Participation
- how any ecosystem interprets, scores or rewards participation
- which ecosystems recognise records from which others

Those decisions belong to each ecosystem and are deliberately outside the specification.

## Contact

Issues and discussion: this repository.
