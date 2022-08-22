import fs from 'node:fs'
export const drafts = Object.keys(
  await import.meta.glob('../../public/drafts/*.pdf', {as: 'raw'})
).map(name => name.replace(/^.*\//, ''))
console.log(drafts)
drafts.sort();
export const lastDraft = drafts.at(-1);
export const lastUpdated = Date.parse(lastDraft.replace(/\..*/, ''));
  //fs.statSync(new URL(lastDraft, draftsUrl+'/')).mtime;
