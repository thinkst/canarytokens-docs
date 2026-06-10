import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  bundler: viteBundler(),

  title: 'Canarytokens',
  description: 'Official docs for Canarytokens',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],

  theme: defaultTheme({
    colorMode: 'light',
    colorModeSwitch: false,

    logo: '/logo.png',
    repo: 'thinkst/canarytokens',
    docsRepo: 'thinkst/canarytokens-docs',
    docsBranch: 'master',

    lastUpdated: true,
    lastUpdatedText: 'Last Updated',
    contributors: false,
    editLink: true,
    editLinkText: 'Help us improve this page!',

    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Create', link: 'https://canarytokens.org/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Create',
          link: 'https://canarytokens.org/',
        },
        {
          text: 'Guide',
          children: ['', 'getting-started'],
        },
        {
          text: 'Examples',
          children: [
            'examples',
            'adobe-pdf-token',
            'aws-keys-token',
            'aws-infra-token',
            'entraid-token',
            'azure-login-certificate-token',
            'cloned-web-token',
            'credit-card-token',
            'crowdstrike-cc-token',
            'css-cloned-site-token',
            'custom-exe-token',
            'dns-token',
            'fake-app-token',
            'http-token',
            'idp-app-token',
            'kubeconfig-token',
            'log4shell-token',
            'mcp-token',
            'ms-excel-token',
            'ms-word-token',
            'mysql-dump-token',
            'network-folder-token',
            'qr-code-token',
            'fast-redirect-token',
            'slow-redirect-token',
            'sensitive-cmd-token',
            'sql-server-token',
            'svg-token',
            'svn-token',
            'unique-email-token',
            'web-image-token',
            'windows-directory-token',
            'wireguard-token',
          ]
        }
      ]
    }
  }),
  plugins: [
    searchPlugin(),
    prismjsPlugin({
      theme: "tomorrow",
      lineNumbers: false,
    }),
  ],
})
