import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const isEnglish = process.env.DOCUSAURUS_CURRENT_LOCALE === 'en';
const siteUrl = 'https://docs.try-try.com';
const localePath = isEnglish ? '/en' : '';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '利用前の準備',
      link: { type: 'generated-index' },
      items: [
        'getting-started/overview',
        'getting-started/x-api-pay-per-use',
        'getting-started/google-account',
      ],
    },
    {
      type: 'category',
      label: '初期設定',
      link: { type: 'generated-index' },
      items: [
        'setup/torai-subscription',
        'setup/apps-script-deploy-link',
        'setup/x-api-keys',
        'setup/gemini-api-key',
        'setup/agnes-api-key',
        'setup/discord',
        'setup/torai-sign-in',
      ],
    },
    {
      type: 'category',
      label: '虎威の使い方',
      link: { type: 'generated-index' },
      items: [
        'usage/x-accounts',
        'usage/create-posts',
        'usage/schedule',
        'usage/auto-posting',
        'usage/thread-posts',
        'usage/x-marketing',
        'usage/maintenance',
        'usage/ai-image-generator',
        'usage/weekly-post-generator',
        'usage/x-search-tools',
      ],
    },
    {
      type: 'category',
      label: 'サブスクリプション',
      link: { type: 'generated-index' },
      items: [
        'subscription/manage',
        'subscription/referral-program',
        'subscription/billing-and-api-costs',
      ],
    },
    {
      type: 'category',
      label: '困ったとき',
      link: { type: 'generated-index' },
      items: [
        'troubleshooting/post-errors',
        'troubleshooting/x-marketing-data',
        'troubleshooting/subscription-errors',
        'troubleshooting/api-costs',
      ],
    },
    {
      type: 'category',
      label: 'リファレンス',
      link: { type: 'generated-index' },
      items: ['reference/limits', 'reference/glossary'],
    },
    {
      type: 'link',
      label: 'サポート',
      href: `${siteUrl}${localePath}/contact`,
    },
    {
      type: 'link',
      label: 'プライバシーポリシー',
      href: `${siteUrl}${localePath}/privacy-policy`,
    },
    {
      type: 'link',
      label: '使用許諾書',
      href: `${siteUrl}${localePath}/license-agreement`,
    },
  ],
};

export default sidebars;
