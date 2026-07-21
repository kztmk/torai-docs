import type {ReactNode} from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, PageMetadata, ThemeClassNames} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import BlogPostItems from '@theme/BlogPostItems';
import SearchMetadata from '@theme/SearchMetadata';
import Heading from '@theme/Heading';
import type {Props} from '@theme/BlogListPage';
import styles from './styles.module.css';

function BlogListPageMetadata({metadata}: Props): ReactNode {
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogHeader({metadata}: Props): ReactNode {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  return (
    <header className={styles.blogHeader}>
      <div className={styles.banner}>
        <img className={styles.bannerImage} src="/img/blog_background.jpg" alt="" />
        <img
          className={styles.avatar}
          src="/img/torai_icon_transparent.png"
          alt={currentLocale === 'en' ? 'Torai' : '虎威'}
        />
      </div>
      <div className={styles.headerText}>
        <Heading as="h1">{metadata.blogTitle}</Heading>
        <p>{metadata.blogDescription}</p>
      </div>
    </header>
  );
}

function BlogListPageContent(props: Props): ReactNode {
  const {metadata, items} = props;

  return (
    <BlogLayout>
      <BlogHeader {...props} />
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}>
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
