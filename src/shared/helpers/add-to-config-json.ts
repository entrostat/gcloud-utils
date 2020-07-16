import * as fs from 'fs-extra';

export async function addToConfigJson(path: string, obj: any) {
  if (await fs.pathExists(path)) {
    const configString = await fs.readFile(path).then(d => d.toString());
    const config = JSON.parse(configString);
    const newConfig = {...config, ...obj};
    await fs.writeFile(path, JSON.stringify(newConfig));
  } else {
    await fs.writeFile(path, JSON.stringify(obj));
  }
}
