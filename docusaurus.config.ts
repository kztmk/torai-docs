import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { existsSync, readFileSync } from 'fs';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

function loadLocalEnv(): Record<string, string> {
  const result: Record<string, string> = {};
  for (const file of ['.env.local', '.env']) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const match = trimmed.match(/^([A-Z0-9_]+)=(.*)$/);
      if (!match) continue;
      result[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
    }
  }
  return result;
}

const localEnv = loadLocalEnv();
const env = (key: string): string | undefined =>
  process.env[key] ?? localEnv[key];
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'ja';
const isEnglish = currentLocale === 'en';

const config: Config = {
  title: isEnglish ? 'Torai' : 'X自動投稿ツール「虎威」',
  tagline: isEnglish ? 'Official Support Site' : '公式サポートサイト',
  favicon: 'img/torai_icon512.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.try-try.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'torai', // Usually your GitHub org/user name.
  projectName: 'torai-manuals', // Usually your repo name.

  // TODO: docs/setup/google-sheet 執筆後に 'throw' へ戻す
  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: {
        label: '日本語',
        htmlLang: 'ja-JP',
      },
      en: {
        label: 'English',
        htmlLang: 'en',
      },
    },
  },

  customFields: {
    emailjsPublicKey: env('DOCUSAURUS_EMAILJS_PUBLIC_KEY'),
    emailjsServiceId: env('DOCUSAURUS_EMAILJS_SERVICE_ID'),
    emailjsTemplateId: env('DOCUSAURUS_EMAILJS_TEMPLATE_ID'),
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          blogTitle: 'ブログ',
          blogDescription:
            '虎威の不具合、アップデート情報、虎威の使い方などを紹介するブログです。',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/torai_social_card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '虎威サポート',
      logo: {
        alt: '虎威ロゴ',
        src: 'img/torai_icon512.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'マニュアル',
        },
        { to: '/blog', label: 'ブログ', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ドキュメント',
          items: [
            {
              label: 'マニュアル',
              to: '/docs/intro',
            },
            {
              label: 'Google Apps Script の設定',
              to: '/docs/setup/apps-script-deploy-link',
            },
            {
              label: '問合せ',
              to: '/contact',
            },
          ],
        },
        {
          title: '法務情報',
          items: [
            {
              label: '利用規約',
              to: '/terms-and-conditions',
            },
            {
              label: 'プライバシーポリシー',
              to: '/privacy-policy',
            },
            {
              label: 'クッキーポリシー',
              to: '/cookie-policy',
            },
            {
              label: '免責事項',
              to: '/disclaimer',
            },
            {
              label: '使用許諾書',
              to: '/license-agreement',
            },
          ],
        },
        {
          title: '関連サイト',
          items: [
            {
              label: 'ブログ',
              to: '/blog',
            },
            {
              label: '虎威',
              href: 'https://torai.try-try.com/',
            },
            {
              label: '虎威購入',
              href: isEnglish
                ? 'https://torai.try-try.com/auth/signin'
                : 'https://sns-loong.imakita3gyo.com/ja/clp/torai-info',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://docs.try-try.com" style="font-weight: bold;" target="_blank" rel="noopener noreferrer">今北産業</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
