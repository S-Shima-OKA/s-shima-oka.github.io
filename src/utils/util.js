/**
 * 記事を最新順にソートする関数
 * Astro.globで取得したデータ以外には使わない。
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
 * 注 Astro.globで取得したデータ以外には使わない。
 * @param {*} target Astro.glob(*.md)で取得した記事
 * @param {*} draft 下書きがtrueの記事(hoge.frontmatter.draft)
 * @returns 
 */
export const releasedSort = (target) => target.filter((post) => !post.frontmatter.draft);

/**
 * 記事の投稿日時を年月日形式で取得する関数
 * @param {*} postDate frontmatter.pubDate
 * @returns 
 */
export const dispPubDate = (postDate) => {
    const getPubDate = new Date(postDate);
    const getPostYear = getPubDate.getFullYear();
    const getPostMonth = String(getPubDate.getMonth() + 1).padStart(2, '0');  // 月は0から始まるため+1
    const getPostDay = String(getPubDate.getDate()).padStart(2, '0');
    return `${getPostYear}年${getPostMonth}月${getPostDay}日`;
}