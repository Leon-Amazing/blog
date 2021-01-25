module.exports = {
    base:'/blog/',
    title: '無风',
    description: '無风的第一个博客',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content: 'leo' }],
        ['meta', { name: 'keywords', content: 'javascript学习,vuepress博客,無风的博客' }]
    ],
    themeConfig: {
        // 最后的更新时间
        lastUpdated: '更新时间', 
        // logo
        logo: '/assets/img/1.jpeg',
        // 导航
        nav: [
            { text: '首页', link: '/' },
            { text: '前端', link: '/web/' },
            { text: '后端', link: '/serve/' },
            {
                text: '其他',
                items: [
                    { text: 'Group1', items: [{ text: 'Home', link: '/' },] },
                    { text: 'Group2', items: [{ text: 'About', link: '/about/' }] }
                ]
            },
            { text: '时间线', link: '/time/' },
            { text: '关于我', link: '/me/' },
            { text: 'Github', link: 'https://github.com/Leon-Amazing' },
        ],
        // 侧边栏
        sidebar: {
            '/css/': [
                'c-aaa',
                'c-bbb',
                'c-ccc',
            ],
            '/jss/': [
                'j-aaa',
                'j-bbb',
                'j-ccc',
            ],
        }
    }
}