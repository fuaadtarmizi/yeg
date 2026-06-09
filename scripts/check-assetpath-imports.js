const fs = require('fs');
const glob = require('glob');
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}', { nodir: true });
let missing = [];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  if (/assetPath\(/.test(text) && !/import\s+\{\s*assetPath\s*\}\s+from\s+['"]@\/lib\/assetPath['"]/.test(text)) {
    missing.push(file);
  }
}
if (missing.length === 0) {
  console.log('none');
} else {
  console.log(missing.join('\n'));
}
