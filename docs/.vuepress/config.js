module.exports = {
  title: 'Vue to VuePress',
  description: 'Vue to VuePress',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/docs/api/' },
      { text: 'Ref', link: '/docs/ref/' },
    ],
    sidebar: [{
      collapsable: false,
      children: [
        '/',
        '/api/',
        '/ref/',
      ]
    }]
  }
}