# MANIFEST — every saved body under journal/ that parses as listing-20 with award 3

Found by a content walk that parsed every .json under journal/ (110616 files, 17 unparsable),
kept every object whose id is listing-20 carrying an award 3 with a payload_hash and a served now_utc,
and wrote the file's own bytes into reads/. No filename filter and no text prefilter: the first builder's
filename match missed journal/board-raw/2026-09-19T07-24Z-listing20.json, and the second's text prefilter
parsed only candidates. This walk parsed all of them.

| # | file | read time (body now_utc) | award 3 state | overdue_at | settlement_block | payload_hash | body sha256 |
|---|---|---|---|---|---|---|---|
| 1 | 01-2026-09-19T07-21-24-395Z.json | 2026-09-19T07:21:24.395Z | payable | null | ready_to_pay | 44db1db80e250bc9… | fd31c22534aaf7e0… |
| 2 | 02-2026-09-20T05-35-18-583Z.json | 2026-09-20T05:35:18.583Z | payable | null | ready_to_pay | 44db1db80e250bc9… | fab22abc21287c6c… |
| 3 | 03-2026-09-29T23-18-09-686Z.json | 2026-09-29T23:18:09.686Z | payable | null | ready_to_pay | 44db1db80e250bc9… | a78cd629881b3222… |
| 4 | 04-2026-10-01T05-18-32-644Z.json | 2026-10-01T05:18:32.644Z | payable | null | ready_to_pay | 44db1db80e250bc9… | 2acbb8253191fa9c… |
| 5 | 05-2026-10-02T00-04-48-769Z.json | 2026-10-02T00:04:48.769Z | payable | null | ready_to_pay | 44db1db80e250bc9… | eeb65aeddf834550… |
| 6 | 06-2026-10-02T05-15-40-811Z.json | 2026-10-02T05:15:40.811Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 499b3f7c7aea6fb0… |
| 7 | 07-2026-10-02T05-17-50-268Z.json | 2026-10-02T05:17:50.268Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | c1c83e01d40c8c6e… |
| 8 | 08-2026-10-02T11-16-49-829Z.json | 2026-10-02T11:16:49.829Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 4edf3dfddbae139c… |
| 9 | 09-2026-10-02T17-17-11-695Z.json | 2026-10-02T17:17:11.695Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 63d09303adece4df… |
| 10 | 10-2026-10-02T17-39-41-648Z.json | 2026-10-02T17:39:41.648Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | daff465a34c485e5… |
| 11 | 11-2026-10-02T23-16-04-868Z.json | 2026-10-02T23:16:04.868Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 957d4a7e3d543cb1… |
| 12 | 12-2026-10-03T05-19-02-954Z.json | 2026-10-03T05:19:02.954Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 39f3fdfdc7d5e7c9… |
| 13 | 13-2026-10-03T11-17-21-687Z.json | 2026-10-03T11:17:21.687Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 9ae7000b38e91d9e… |
| 14 | 14-2026-10-03T17-16-23-978Z.json | 2026-10-03T17:16:23.978Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 4b89f9f77a813222… |
| 15 | 15-2026-10-03T23-16-30-338Z.json | 2026-10-03T23:16:30.338Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 2ee5c53611fa768f… |
| 16 | 16-2026-10-04T05-18-15-817Z.json | 2026-10-04T05:18:15.817Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 19b226abe10b10cc… |
| 17 | 17-2026-10-04T11-17-43-570Z.json | 2026-10-04T11:17:43.570Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | b02a601066d6bbae… |
| 18 | 18-2026-10-04T11-22-11-395Z.json | 2026-10-04T11:22:11.395Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 9826b5d5dad37ce0… |
| 19 | 19-2026-10-04T17-16-53-116Z.json | 2026-10-04T17:16:53.116Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | aedcd8f583366311… |
| 20 | 20-2026-10-04T23-17-05-042Z.json | 2026-10-04T23:17:05.042Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 00bc26283c150341… |
| 21 | 21-2026-10-05T05-17-57-693Z.json | 2026-10-05T05:17:57.693Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 59f2b0490feaa617… |
| 22 | 22-2026-10-05T11-19-58-432Z.json | 2026-10-05T11:19:58.432Z | overdue_unpaid | 1790917250364 | payer_late | 44db1db80e250bc9… | 2c20bac5de793387… |

reads: 22 (5 before the 2026-10-02T05:00:50.364Z lapse, 17 after)
distinct award-3 states: ["payable","overdue_unpaid"]
distinct award-3 payload_hash values: 1 — 44db1db80e250bc919cc28866f682e2b8fd0d7177f37dc1afc7d7fd1dabef2a0

The full 64-hex digests are in SHA256SUMS and in each body; this table truncates them for width.
Walk run 2026-10-05, 14 s.
