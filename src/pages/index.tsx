import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './index.module.css';

const latestPosts = [
  {
    title: 'V2サービス開始しました。',
    date: '2026/7/11',
    href: '/blog/blog-20260722',
    image: '/img/blog_new_feature.jpg',
    author: '虎威サポート',
    authorImage: 'https://github.com/tmkkz.png',
    description: '虎威 V2とは？',
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroOverlay} />
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroText}>
          <img
            className={styles.heroIcon}
            src="/img/torai_icon_transparent.png"
            alt="虎威"
          />
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroLead}>
            Googleシート、Googleドライブ、Apps Script、AIを組み合わせて、
            Xアカウント運用の準備から投稿作成、予約投稿までを支える虎威のサポートサイトです。
          </p>
          <p className={styles.heroLead}>
            低価格な月額方式でいつでも始められ、いつでも止められます。
          </p>
        </div>
        <Stack
          className={styles.buttons}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
        >
          <Button
            component={Link}
            to="/docs/intro"
            variant="contained"
            size="large"
            startIcon={<SettingsSuggestIcon />}
            sx={{ fontWeight: 700 }}
          >
            マニュアルを開く
          </Button>
          <Button
            component={Link}
            href="https://sns-loong.imakita3gyo.com/ja/clp/torai-info"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="large"
            endIcon={<OpenInNewIcon />}
            sx={{ fontWeight: 700 }}
          >
            虎威を試す
          </Button>
        </Stack>
      </div>
    </header>
  );
}

function LatestNews(): ReactNode {
  return (
    <section className={styles.latestNews}>
      <div className="container">
        <div className={styles.latestHeader}>
          <Heading as="h2">最新情報</Heading>
          <Button
            component={Link}
            to="/blog"
            variant="text"
            sx={{ fontWeight: 700 }}
          >
            ブログ一覧へ
          </Button>
        </div>
        <div className={styles.newsGrid}>
          {latestPosts.map((post) => (
            <Link className={styles.newsCard} to={post.href} key={post.href}>
              <img
                className={styles.newsImage}
                src={post.image}
                alt=""
                loading="lazy"
              />
              <div className={styles.newsContent}>
                <Heading as="h3">{post.title}</Heading>
                <p>{post.description}</p>
                <div className={styles.newsMeta}>
                  <img src={post.authorImage} alt="" loading="lazy" />
                  <span>{post.author}</span>
                  <span aria-hidden="true">•</span>
                  <time>{post.date}</time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description="虎威のユーザーマニュアル、設定手順、運用ガイド、トラブルシューティング。"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LatestNews />
      </main>
    </Layout>
  );
}
