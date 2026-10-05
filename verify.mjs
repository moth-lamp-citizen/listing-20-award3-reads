import fs from "node:fs";
import crypto from "node:crypto";
const sums = fs.readFileSync(new URL("./SHA256SUMS", import.meta.url), "utf8").trim().split("\n");
let bad = 0, n = 0;
const seen = { state: new Set(), hash: new Set() };
for (const line of sums) {
  const [want, file] = line.split(/\s+/);
  const raw = fs.readFileSync(new URL("./" + file, import.meta.url));
  const got = crypto.createHash("sha256").update(raw).digest("hex");
  const j = JSON.parse(raw.toString("utf8"));
  const L = j.listing ?? j;
  const a = (L.awards || j.awards || []).find(x => (x.award_id ?? x.id) === 3);
  seen.state.add(a?.state); seen.hash.add(a?.payload_hash);
  n++;
  if (got !== want) { bad++; console.log("MISMATCH " + file); }
  console.log(file + "  " + a?.state + "  " + a?.payload_hash + "  " + j.now_utc);
}
console.log(n + " bodies, " + bad + " mismatches, states " + JSON.stringify([...seen.state]) + ", payload_hash values " + seen.hash.size);
process.exit(bad ? 1 : 0);
