module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  dest: 'docs/.vuepress/dist',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Canarytokens',
      description: 'Official docs for Canarytokens'
    },
  },
  themeConfig: {
    logo: '/logo.png',
    repo: 'thinkst/canarytokens',
    repoLabel: 'Github',
    docsRepo: 'thinkst/canarytokens-docs',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Create', link: 'https://canarytokens.org/' },
      // { text: 'Login', link: '/login/' },
    ],
    sidebar: {
      '/guide/':[
        {
          title: 'Create',
          path: 'https://canarytokens.org/'
        },
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'getting-started',
          ]
        },
        {
          title: 'Examples',
          collapsable: false,
          children: [
            'examples',
            'adobe-pdf-token',
            'aws-keys-token',
            'entraid-token',
            'azure-login-certificate-token',
            'cloned-web-token',
            'credit-card-token',
            'css-cloned-site-token',
            'custom-exe-token',
            'dns-token',
            'fake-app-token',
            'http-token',
            'idp-app-token',
            'kubeconfig-token',
            'log4shell-token',
            'network-folder-token',
            'ms-excel-token',
            'ms-word-token',
            'mysql-dump-token',
            'qr-code-token',
            'fast-redirect-token',
            'slow-redirect-token',
            'sensitive-cmd-token',
            'svn-token',
            'sql-server-token',
            'unique-email-token',
            'web-image-token',
            'windows-directory-token',
            'wireguard-token',
          ]
        }
      ]
    }
  }
};
