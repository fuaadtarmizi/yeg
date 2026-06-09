const fs = require('fs');
const glob = require('glob');
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}', { nodir: true });
for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  if (!/src\s*=\s*("|')\/[^"']+\.mp4\1/.test(text)) continue;
  const original = text;
  if (!/import\s+\{\s*assetPath\s*\}\s+from\s+['"]@\/lib\/assetPath['"]/.test(text)) {
    text = text.replace(/^(import [^\n]+(?:\nimport [^\n]+)*)\n/, '$1\nimport { assetPath } from "@/lib/assetPath";\n');
  }
  text = text.replace(/src\s*=\s*"\/(.+?\.mp4)"/g, 'src={assetPath("/$1")}');
  text = text.replace(/src\s*=\s*'\/(.+?\.mp4)'/g, "src={assetPath('/$1')}");
  if (text !== original) {
    fs.writeFileSync(file, text, 'utf8');
    console.log(file);
  }
}
