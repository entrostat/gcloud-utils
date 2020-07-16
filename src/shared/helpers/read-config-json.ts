import { promises as fs } from 'fs';

export async function readConfigJson(path: string) {
  const configString = await fs.readFile(path).then(d => d.toString());
  return JSON.parse(configString);
}
