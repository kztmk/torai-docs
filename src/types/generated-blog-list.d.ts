declare module '@generated/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json' {
  type BlogPostListItem = {
    title: string;
    permalink: string;
    date: string;
    unlisted?: boolean;
  };

  const blogPostList: {
    title: string;
    items: BlogPostListItem[];
  };

  export default blogPostList;
}
