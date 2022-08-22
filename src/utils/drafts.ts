import fs from 'node:fs'
import path from 'node:path'
const draftsUrl = new URL('../../public/drafts', import.meta.url)
export const drafts = fs.readdirSync(draftsUrl);
drafts.sort();
export const lastDraft = drafts.at(-1);
export const lastUpdated = Date.parse(lastDraft.replace(/\..*/, ''));
  //fs.statSync(new URL(lastDraft, draftsUrl+'/')).mtime;
