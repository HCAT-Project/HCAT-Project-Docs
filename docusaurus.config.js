// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'H-CAT Docs',
  tagline: '致力于成为真正小而美的在线网页聊天程序',
  favicon: 'img/hcat.png',

  // Set the production url of your site here
  url: 'https://docs.hcat.online',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HCAT-Project', // Usually your GitHub org/user name.
  projectName: 'HCAT-Project-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HCAT-Project/HCAT-Project-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HCAT-Project/HCAT-Project-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HCAT',
        logo: {
          alt: '喵~',
          src: 'img/hcat.png',
        },
        items: [
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'server', // foldername
            label: '服务端文档',     // navbar title
          },
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'develop', // foldername
            label: '开发文档',     // navbar title
          },
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'api', // foldername
            label: 'API文档',     // navbar title
          },
          {to: '/blog', label: '开发日志', position: 'left'},
          {
            href: 'https://github.com/HCAT-Project',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'HCAT相关站点',
            items: [
              {
                label: 'HCAT主页',
                to: 'https://www.hcat.online/',
              },
            ],
          },
          {
            title: '联系方式喵~',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/HCAT-Project/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '开发日志',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HCAT-Project. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }
    ),
};

module.exports = config;
