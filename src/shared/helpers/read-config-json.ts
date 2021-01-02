import { promises as fs } from 'fs';
import { Config } from '../models/config';

export async function readConfigJson(path: string): Promise<Config> {
    const configString = await fs.readFile(path).then(d => d.toString());
    return JSON.parse(configString);
}
