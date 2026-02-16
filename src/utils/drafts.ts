export const drafts = Object.keys(
  import.meta.glob('../../public/drafts/*.pdf')
).map(name => name.replace(/^.*\//, ''))
drafts.sort();
console.log("Drafts:", drafts)
if (!drafts.length) console.warn("NO DRAFTS! NOT LINKING TO ANYTHING.");
export const lastDraft = drafts.length && drafts.at(-1);
export const lastUpdated = lastDraft && Date.parse(lastDraft.replace(/\..*/, ''));
  //fs.statSync(new URL(lastDraft, draftsUrl+'/')).mtime;
