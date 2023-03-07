import { defaultTheme } from '@vuepress/theme-default'
import { tocPlugin } from '@vuepress/plugin-toc'

export default {
  lang: 'zh-CN',
  title: 'fed-blog',
  description: '前端文档记录，旨在学习与分享',
  base: '/fed-blog/',
  theme: defaultTheme({
    logo: '/logo.png',
    repo: 'https://github.com/chenjiaobin/fed-blog.git',
    repoLabel: 'Github',
    editLinkText: '编辑此页'
  }),
  plugins: [
    tocPlugin({
      // 配置项
    })
  ]
}