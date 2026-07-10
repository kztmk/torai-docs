import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import TagsListInline from '@theme/TagsListInline';
import type {Props} from '@theme/BlogPostItems';
import styles from './styles.module.css';

function formatDate(date: string): string {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(new Date(date));
}

export default function BlogPostItems({items}: Props): ReactNode {
  const baseUrl = useBaseUrl('/');
  const resolveUrl = (url?: string): string => {
    if (!url) return `${baseUrl}img/blog_information.jpg`;
    if (/^https?:\/\//.test(url)) return url;
    return `${baseUrl}${url.replace(/^\//, '')}`;
  };

  return (
    <div className={styles.grid}>
      {items.map(({content: {metadata}}) => {
        const image = resolveUrl(metadata.frontMatter.image);

        return (
          <article className={styles.card} key={metadata.permalink}>
            <Link to={metadata.permalink} className={styles.imageLink}>
              <img
                className={styles.image}
                src={image}
                alt={metadata.title}
                loading="lazy"
              />
            </Link>
            <div className={styles.body}>
              <Link to={metadata.permalink} className={styles.titleLink}>
                <h2>{metadata.title}</h2>
              </Link>
              {metadata.description && <p className={styles.description}>{metadata.description}</p>}
              <div className={styles.meta}>
                <div className={styles.authors}>
                  {metadata.authors.map((author) => (
                    <Link
                      to={author.page?.permalink ?? '#'}
                      className={styles.author}
                      title={author.name}
                      key={author.name}>
                      {author.imageURL && (
                        <img src={resolveUrl(author.imageURL)} alt="" loading="lazy" />
                      )}
                      <span>{author.name}</span>
                    </Link>
                  ))}
                </div>
                <span aria-hidden="true">•</span>
                <time>{formatDate(metadata.date)}</time>
                {metadata.readingTime && (
                  <>
                    <span aria-hidden="true">•</span>
                    <span>{Math.ceil(metadata.readingTime)} min reads</span>
                  </>
                )}
              </div>
              {metadata.tags.length > 0 && (
                <div className={styles.tags}>
                  <TagsListInline tags={metadata.tags} />
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
