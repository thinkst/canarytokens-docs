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
            'http-token',
            'dns-token',
            'web-image-token',
            'cloned-web-token',
            'css-cloned-site-token',
            'entraid-token',
            'adobe-pdf-token',
            'ms-word-token',
            'ms-excel-token',
            'mysql-dump-token',
            'windows-directory-token',
            'custom-exe-token',
            'qr-code-token',
            'sensitive-cmd-token',
            'svn-token',
            'aws-keys-token',
            'fast-redirect-token',
            'slow-redirect-token',
            'sql-server-token',
            'wireguard-token',
            'kubeconfig-token',
            'fake-app-token',
            'idp-app-token',
          ]
        }
      ]
    }
  }
};
