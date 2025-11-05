import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

export async function generateHtml(jsonPath: string, outDir: string) {
  const data = await readFile(jsonPath, 'utf8');
  const title = 'Log Triage Report';
  const html = `<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<style>
body{font:14px/1.5 system-ui;margin:16px;color:#0b1020}
h1{font-size:20px;margin:0 0 8px}
small{color:#475569}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
table{width:100%;border-collapse:collapse}
th,td{border-bottom:1px solid #e2e8f0;padding:6px 8px;text-align:left;vertical-align:top}
.badge{font-size:12px;padding:2px 6px;border:1px solid #cbd5e1;border-radius:999px}
.muted{color:#64748b}
pre{white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:8px}
</style>
<h1>${title}</h1>
<small>Generated: <span id="gen"></span></small>
<div class="grid">
  <section>
    <h2>Summary</h2>
    <div id="summary"></div>
    <h2>Buckets</h2>
    <div id="buckets"></div>
  </section>
  <section>
    <h2>Tags</h2>
    <div id="tags"></div>
  </section>
</div>
<script type="module">
const data = ${data};
document.getElementById('gen').textContent = new Date(data.generatedAt).toLocaleString();
const s = data;
const sum = document.getElementById('summary');
sum.innerHTML = '<p>Total logs: <b>'+s.total+'</b></p>';

function tbl(heads, rows){
  const thead = '<thead><tr>'+heads.map(h=>'<th>'+h+'</th>').join('')+'</tr></thead>';
  const tbody = '<tbody>'+rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+'</tbody>';
  return '<table>'+thead+tbody+'</table>';
}

const bucketsEl = document.getElementById('buckets');
const bRows = Object.values(s.buckets).sort((a,b)=>b.count-a.count).map(b=>{
  const lv = Object.entries(b.levels).map(([k,v])=> k+': '+v).join(', ');
  const tg = Object.entries(b.tags).map(([k,v])=> k+'('+v+')').join(', ');
  const sam = b.samples.slice(0,3).map(x=>x.message).join('<br>');
  return [ '<b>'+b.name+'</b>', b.count, lv, tg || '<span class="muted">none</span>', sam || '<span class="muted">no samples</span>' ];
});
bucketsEl.innerHTML = tbl(['Bucket','Count','Levels','Tags','Samples'], bRows) + '<h3>Unmatched</h3>' + tbl(['Bucket','Count','Levels','Tags','Samples'], [[
  '<b>unmatched</b>', s.unmatched.count,
  Object.entries(s.unmatched.levels).map(([k,v])=>k+': '+v).join(', '),
  Object.entries(s.unmatched.tags).map(([k,v])=>k+'('+v+')').join(', ') || '<span class="muted">none</span>',
  s.unmatched.samples.slice(0,3).map(x=>x.message).join('<br>') || '<span class="muted">no samples</span>'
]]);

const tagsEl = document.getElementById('tags');
const tRows = Object.entries(s.tags).sort((a,b)=>b[1]-a[1]).map(([k,v])=>[k,v]);
tagsEl.innerHTML = tRows.length? tbl(['Tag','Count'], tRows) : '<p class="muted">No tags.</p>';
</script>`;
  const out = resolve(outDir, 'index.html');
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html, 'utf8');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = new Map<string, string>();
  for (let i = 2; i < process.argv.length; i += 2) args.set(process.argv[i], process.argv[i + 1]);
  const json = args.get('--json') ?? 'out/triage.json';
  const out = args.get('--out') ?? 'docs';
  generateHtml(json, out).then(() => console.log('Report written to', out + '/index.html'));
}
