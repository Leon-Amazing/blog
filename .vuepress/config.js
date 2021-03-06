module.exports = {
  base: '/blog/',
  title: "Leon你今天学习了吗",
  description: "welcome to leon's blog !!!",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'leon' }],
    ['meta', { name: 'keywords', content: 'vuepress写博客' }],
    [
      "meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }
    ]
  ],
  locales: {
    "/": {
      "lang": "zh-CN"
    }
  },
  /* 主题 */
  theme: "reco",
  themeConfig: {
    lastUpdated: "上次更新",
    logo: "/logo.jpg",
    /* 导航 */
    nav: [
      // 首页
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      // 项目
      {
        "text": "项目",
        "icon": "reco-blog",
        "items": [
          {
            "text": "项目1",
            "link": "https://www.baidu.com/",
            "icon": "reco-blog"
          },
          {
            "text": "项目2",
            "link": "https://music.163.com/",
            "icon": "reco-blog"
          }
        ]
      },
      // 时间轴
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // 简历
      {
        "text": "关于我",
        "link": "/resume/",
        "icon": "reco-message"
      },
      // GitHub
      {
        "text": "github",
        "link": "https://github.com/Leon-Amazing",
        "icon": "reco-github"
      }],
    // 侧边栏
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },
    // 自动形成侧边导航
    subSidebar: "auto",
    // 博客的模式
    type: "blog",
    // 博客设置
    blogConfig: {
      "category": {
        "location": 2, // 在导航栏菜单中所占的位置，默认2
        "text": "分类"
      },
      "tag": {
        "location": 3, // 在导航栏菜单中所占的位置，默认3
        "text": "标签"
      }
    },
    search: true,
    searchMaxSuggestions: 10,
    author: "leon",
    authorAvatar: "/avatar.jpg",
    startYear: "2021",
    /* 评论 */
    valineConfig: {
      showComment: true,
      appId: "ttqIkjQPFQjxNGaefDHCyiN6-gzGzoHsz",// your appId
      appKey: 'BDs9KGsGPFnaJxUIX8B1uB2R', // your appKey
      avatar: 'monsterid',
      meta: ['nick', 'mail'],
      placeholder: '请输入你的留言...',
      recordIP: true
    }
  },
  markdown: {
    lineNumbers: true
  }
}