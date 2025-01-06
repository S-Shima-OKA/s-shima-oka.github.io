//記事を最新順にソートする関数
export const itemSort = (target) => target.sort((a, b) => {
    const aDate = new Date(a.frontmatter.pubDate);
    const bDate = new Date(b.frontmatter.pubDate);
    return bDate.getTime() - aDate.getTime();
});