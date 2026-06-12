const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');

// Files that need `name: 'xxx'` added to their bmp block
const needsName = [
  'deep_ball',
  'dennis_ball',
  'dennis_chase',
  'firen_ball',
  'firen_flame',
  'freeze_ball',
  'freeze_column',
  'henry_arrow1',
  'henry_arrow2',
  'henry_louis_rudolf_wind',
  'john_ball',
  'john_biscuit',
  'woody_ball',
  'rudolf_weapon',
  'effect0',
  'effect1',
  'broken',
];

for (const name of needsName) {
  const filePath = path.join(dataDir, name + '.ts');
  if (!fs.existsSync(filePath)) {
    console.log(name + ': file not found');
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  // Check if bmp already has name field (top-level, right after bmp: {)
  if (/bmp:\s*\{\s*name:/.test(content)) {
    console.log(name + ': bmp.name already present');
    continue;
  }
  // Insert name field right after `bmp: {`
  const updated = content.replace(/(bmp:\s*\{)/, `$1\n    name: '${name}',`);
  if (updated === content) {
    console.log(name + ': could not insert bmp.name — pattern not found');
    continue;
  }
  fs.writeFileSync(filePath, updated, 'utf-8');
  console.log(name + ': added bmp.name');
}
