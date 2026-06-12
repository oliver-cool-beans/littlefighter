const fs = require('fs');
const path = require('path');

const srcDir = '/Users/oliver/Documents/github/littlefighter/LF2_19/data';
const dstDir = path.join(__dirname, '../src/data');

const subObjects = [
  'dennis_ball',
  'dennis_chase',
  'deep_ball',
  'john_ball',
  'john_biscuit',
  'firen_ball',
  'firen_flame',
  'freeze_ball',
  'freeze_column',
  'henry_arrow1',
  'henry_arrow2',
  'henry_louis_rudolf_wind',
  'woody_ball',
  'rudolf_weapon',
  'effect0',
  'effect1',
  'broken',
];

for (const name of subObjects) {
  const src = path.join(srcDir, name + '.js');
  const dst = path.join(dstDir, name + '.ts');

  if (fs.existsSync(dst)) {
    console.log(name + ': already exists, skipping');
    continue;
  }
  if (!fs.existsSync(src)) {
    console.log(name + ': SOURCE MISSING');
    continue;
  }

  let content = fs.readFileSync(src, 'utf-8');
  // Strip AMD define wrapper: define({...});
  content = content.replace(/^define\((\{[\s\S]*\})\);\s*$/, '$1');

  const ts =
    "import type { CharacterData } from '../types/index.js'\n\n" +
    'const data: CharacterData = ' + content + '\n\nexport default data\n';

  fs.writeFileSync(dst, ts, 'utf-8');
  console.log(name + ': created');
}
