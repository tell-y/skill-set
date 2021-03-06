import fs from 'fs';

export const readLines = filepath => {
  const contents = fs.readFileSync(filepath, { encoding: 'utf8' });
  return contents.split('\n');
};
