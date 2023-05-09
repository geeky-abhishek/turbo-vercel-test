const path = require('path');
const prismic = require('@prismicio/client');
const fetch = require('node-fetch');

const VERSIONS_JSON = require('./versions.json');

const BASE_URL = '/docs';

module.exports = {
  title: 'Samagra Documentation',
  tagline:
    'tag line',
  url: 'https://turbo-vercel-testjjjj.vercel.app/',
  baseUrl: `/`,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeConfigs: {
      en: { label: 'English' },
      ja: { label: '日本語' },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta/favicon-96x96.png',
  organizationName: 'ionic-team',
  projectName: 'ionic-docs',
  themeConfig: {
    // metadata: [
    //   { name: 'og:image', content: 'https://ionicframework.com/docs/img/meta/open-graph.png' },
    
    //   {
    //     name: 'fb:page_id',
    //     content: '1321836767955949',
    //   },
    //   {
    //     name: 'og:type',
    //     content: 'website',
    //   },
    //   {
    //     name: 'og:site_name',
    //     content: 'Ionic Framework Docs',
    //   },
    // ],
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Site Logo',
        src: 'https://tech.samagragovernance.in/wp-content/uploads/2021/02/L2-e1614174909114.png',
        srcDark: '/logos/dark-logo.png',
        href: '/',
        target: '_self',
        width: "140px",
        height: "45px"
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          label: 'Guide',
          position: 'left',
        },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        //   dropdownItemsAfter: [
           
        //     { to: 'hostedlink', label: 'v1', target: '_blank' },
        //   ],
        //   // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
        //   dropdownActiveClassDisabled: true,
        // },
        // {
        //   type: 'search',
        //   position: 'right',
        // },
        // {
        //   label: 'Community',
        //   position: 'right',
        //   items: [
        //     {
        //       href: 'https://ionicframework.com/community',
        //       label: 'Community Hub',
        //       target: '_blank',
        //       rel: null,
        //     },
        //     {
        //       href: 'https://forum.ionicframework.com/',
        //       label: 'Forum',
        //       target: '_blank',
        //       rel: null,
        //     },
        //     {
        //       href: 'https://www.meetup.com/topics/ionic-framework/',
        //       label: 'Meetups',
        //       target: '_blank',
        //       rel: null,
        //     },
        //     {
        //       href: 'https://blog.ionicframework.com/',
        //       label: 'Blog',
        //       target: '_blank',
        //       rel: null,
        //     },
        //     // {
        //     //   href: 'https://twitter.com/ionicframework',
        //     //   label: 'Twitter',
        //     //   target: '_blank',
        //     //   rel: null,
        //     // },
        //   ],
        //   className: 'navbar__link--community',
        // },
        // {
        //   label: 'Support',
        //   position: 'right',
        //   items: [
        //     {
        //       href: 'https://ionicframework.com/support',
        //       label: 'Help Center',
        //       target: '_blank',
        //       rel: null,
        //     },
        //     {
        //       href: 'https://ionic.zendesk.com/',
        //       label: 'Customer Support',
        //       target: '_blank',
        //       rel: null,
        //     },
        //     {
        //       href: 'https://ionicframework.com/advisory',
        //       label: 'Enterprise Advisory',
        //       target: '_blank',
        //       rel: null,
        //     },
        //   ],
        //   className: 'navbar__link--support',
        // },
        {
          type: 'separator',
          position: 'right',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        //   dropdownItemsBefore: [],
        //   dropdownItemsAfter: [
        //     {
        //       href: 'https://ionicframework.com/translate',
        //       label: 'Translate',
        //       target: '_blank',
        //       rel: null,
        //     },
        //   ],
        //   className: 'icon-link language navbar__item',
        // },
        // {
        //   type: 'iconLink',
        //   position: 'right',
        //   icon: {
        //     alt: 'twitter logo',
        //     src: `/logos/twitter.svg`,
        //     href: 'https://twitter.com/Ionicframework',
        //     target: '_blank',
        //   },
        // },
        {
          type: 'iconLink',
          position: 'right',
          icon: {
            alt: 'github logo',
            src: `/logos/github.svg`,
            href: 'https://github.com/Samagra-Development',
            target: '_blank',
          },
        },
        // {
        //   type: 'iconLink',
        //   position: 'right',
        //   icon: {
        //     alt: 'discord logo',
        //     src: `/logos/discord.svg`,
        //     href: 'https://ionic.link/discord',
        //     target: '_blank',
        //   },
        // },
      ],
    },
    tagManager: {
      trackingID: 'GTM-TKMGCBC',
    },
    prism: {
      theme: { plain: {}, styles: [] },
      // https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
      additionalLanguages: ['shell-session', 'http'],
    },
    algolia: {
      appId: 'O9QSL985BS',
      apiKey: 'ceb5366064b8fbf70959827cf9f69227',
      indexName: 'ionicframework',
      contextualSearch: true,
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          if (locale != 'en') {
            return 'https://crowdin.com/project/ionic-docs';
          }
          if ((match = docPath.match(/api\/(.*)\.md/)) != null) {
            return `https://github.com/Samagra-Development/samagra-docs/tree/main/docs/api/${match[1]}.md`;
          }
          if ((match = docPath.match(/cli\/commands\/(.*)\.md/)) != null) {
            return `https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/${match[1].replace(
              '-',
              '/'
            )}.ts`;
          }
          if ((match = docPath.match(/native\/(.*)\.md/)) != null) {
            return `https://github.com/ionic-team/capacitor-plugins/edit/main/${match[1]}/README.md`;
          }
          return `https://github.com/Samagra-Development/samagra-docs/edit/main/${versionDocsDirPath}/${docPath}`;
        },
        exclude: ['README.md'],
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v2',
          },
        },
      },
    ],
    '@docusaurus/plugin-content-pages',
    '@docusaurus/plugin-debug',
    '@docusaurus/plugin-sitemap',
    '@ionic-internal/docusaurus-plugin-tag-manager',
    function (context, options) {
      return {
        name: 'ionic-docs-ads',
        async loadContent() {
          const repoName = 'ionicframeworkcom';
          const endpoint = prismic.getEndpoint(repoName);
          const client = prismic.createClient(endpoint, {
            fetch,
          });

          return await client.getByType('docs_ad');
        },
        async contentLoaded({ content, actions: { setGlobalData, addRoute } }) {
          return setGlobalData({ prismicAds: content.results });
        },
      };
    },
    [
      path.resolve(__dirname, 'plugins', 'docusaurus-plugin-ionic-component-api'),
      {
        versions: VERSIONS_JSON,
      },
    ],
  ],
  themes: [
    [
      //overriding the standard docusaurus-theme-classic to provide custom schema
      path.resolve(__dirname, 'docusaurus-theme-classic'),
      {
        customCss: [
          require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
          require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
          require.resolve('./src/styles/custom.scss'),
        ],
      },
    ],
    path.resolve(__dirname, './node_modules/@docusaurus/theme-search-algolia'),
  ],
  customFields: {},
};
