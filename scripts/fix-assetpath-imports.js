const fs = require('fs');
const glob = require('glob');
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}', { nodir: true });
for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  if (!/assetPath\(/.test(text)) continue;
  if (/import\s+\{\s*assetPath\s*\}\s+from\s+['"]@\/lib\/assetPath['"]/.test(text)) continue;
  const importRegex = /import .* from ['"].*['"];?/g;
  const imports = text.match(importRegex);
  if (imports && imports.length > 0) {
    let lastImport = imports[imports.length - 1];
    let pos = text.lastIndexOf(lastImport);
    if (pos !== -1) {
      let insertPos = pos + lastImport.length;
      if (text[insertPos] === '\r') insertPos += 1;
      if (text[insertPos] === '\n') insertPos += 1;
      text = text.slice(0, insertPos) + '\nimport { assetPath } from "@/lib/assetPath";' + text.slice(insertPos);
      fs.writeFileSync(file, text, 'utf8');
      console.log(file);
    }
  } else {
    const insertPos = text.startsWith("'use client'") ? text.indexOf('\n') + 1 : 0;
    text = text.slice(0, insertPos) + 'import { assetPath } from "@/lib/assetPath";\n' + text.slice(insertPos);
    fs.writeFileSync(file, text, 'utf8');
    console.log(file);
  }
}
