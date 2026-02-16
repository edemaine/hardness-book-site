import fs from 'node:fs'

const draftsDir = new URL('../../public/drafts/', import.meta.url)

export const drafts = fs.existsSync(draftsDir)
  ? fs.readdirSync(draftsDir, {withFileTypes: true})
      .filter((entry) => entry.isFile() && /\.pdf$/i.test(entry.name))
      .map((entry) => entry.name)
  : []
drafts.sort();
console.log("Drafts:", drafts)
if (!drafts.length) console.warn("NO DRAFTS! NOT LINKING TO ANYTHING.");
export const lastDraft = drafts.length && drafts.at(-1);
export const lastUpdated = lastDraft && Date.parse(lastDraft.replace(/\..*/, ''));
  //fs.statSync(new URL(lastDraft, draftsUrl+'/')).mtime;
