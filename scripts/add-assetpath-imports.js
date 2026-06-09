const fs = require('fs');
const glob = require('glob');
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}', { nodir: true });
for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  if (!/assetPath\(/.test(text)) continue;
  if (/import\s+\{\s*assetPath\s*\}\s+from\s+['"]@\/lib\/assetPath['"]/.test(text)) continue;
  if (/import\s+.*from\s+['"].*['"]/.test(text)) {
    text = text.replace(/^(import [^\n]+(?:\nimport [^\n]+)*)\n/, '$1\nimport { assetPath } from "@/lib/assetPath";\n');
  } else {
    text = 'import { assetPath } from "@/lib/assetPath";\n' + text;
  }
  fs.writeFileSync(file, text, 'utf8');
  console.log(file);
}
