# Governance

*Status: initial. This document describes how MPP is stewarded today and how that is intended to
change. It will be revised as adoption grows.*

## Current stage

MPP is at an early draft stage (v0.1). The specification is authored and maintained by Jason
Lambert at Felixe, and published openly under the Apache License 2.0 so that it can be
implemented, forked and improved by anyone.

Early-stage stewardship by a small group is deliberate: a specification with no implementations
benefits more from coherence than from process. That trade-off is temporary.

## Decision-making today

- **Editorial changes** — clarifications, typos, better examples — are made directly by the
  maintainer.
- **Normative changes** — anything affecting a MUST, MUST NOT, SHOULD, the Commitment Classes, the
  core Relationship Types or the schemas — are raised as issues first, left open for comment, and
  summarised in `CHANGELOG.md` when accepted.
- **Breaking changes** require a version increment and a migration note.

## Versioning

The protocol version is expressed in every object as `mppVersion`.

- **0.x** — draft. Breaking changes are possible between versions and will be documented.
- **1.0** — first stable version. After 1.0, breaking changes require a major version increment,
  and implementations may rely on stability within a major version.

Objects issued under an earlier version remain valid. Records are immutable; a protocol revision
never invalidates records already issued.

## Intended direction

As independent implementations appear, stewardship should widen. The intended path:

1. **Now** — single maintainer, open issues, public repository.
2. **Next** — an implementers' group of organisations running MPP in production, consulted on
   normative changes.
3. **Later** — transfer of the specification to a neutral standards body or foundation, so that no
   single organisation controls the protocol.

The final step matters more than it may appear. A protocol that claims to make participation
portable, while remaining permanently controlled by one company, undermines its own argument.

## What governance does not cover

MPP governs the protocol, not its use. It does not govern:

- what any ecosystem chooses to recognise as Meaningful Participation
- how any ecosystem interprets, scores or rewards participation
- which ecosystems recognise records from which others

Those decisions belong to each ecosystem and are deliberately outside the specification.

## Contact

Issues and discussion: this repository. For anything else, see the contact details in the white
paper.
