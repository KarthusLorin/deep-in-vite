module.exports = {
  base: '/deep-in-vite',
  title: 'deep-in-vite',
  description: 'Vite 源码解析',
  themeConfig: {
    repo: 'KarthusLorin/deep-in-vite',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [{
      text: '首页',
      link: '/'
    }, ],
    sidebar: [{
      title: '前言',
      collapsable: false,
      children: [
        ['foreword/', '介绍']
      ]
    }]
  }
}