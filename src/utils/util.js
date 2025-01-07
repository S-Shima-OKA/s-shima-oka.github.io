/**
 * 記事を最新順にソートする関数
 * @function
 * @param {*} target Astro.glob(*.md)で取得した記事
 * @returns 
 */
export const itemSort = (target) => target.sort((a, b) => {
    const aDate = new Date(a.frontmatter.pubDate);
    const bDate = new Date(b.frontmatter.pubDate);
    return bDate.getTime() - aDate.getTime();
});
/**
 * 下書き(draft)以外を抽出する関数
 * @param {*} target Astro.glob(*.md)で取得した記事
 * @param {*} draft 下書きがtrueの記事(hoge.frontmatter.draft)
 * @returns 
 */
export const releasedSort = (target) => target.filter((post) => !post.frontmatter.draft);