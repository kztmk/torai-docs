import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

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
        'usage/thread-posts',
        'usage/auto-posting',
        'usage/maintenance',
      ],
    },
    {
      type: 'category',
      label: 'サブスクリプション',
      link: { type: 'generated-index' },
      items: ['subscription/manage', 'subscription/billing-and-api-costs'],
    },
    {
      type: 'category',
      label: '困ったとき',
      link: { type: 'generated-index' },
      items: [
        'troubleshooting/post-errors',
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
  ],
};

export default sidebars;
