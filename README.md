# fed-blog
前端文档记录，旨在学习与分享

[fed-log](https://chenjiaobin.github.io/fed-blog/)

## Environment
* Node.js v14.18.0
* vuePress v2

## Install
```js
yarn
```

## Development
```js
yarn docs:dev
```

## Deploy
```
yarn docs:build
```

## CI/CD
利用Github Action提供的持续集成工具，监听`master`分支的`push`提交自动化构建出静态资源，并发布至`gh_pages`分支

> master分支：时间开发源文件；gh_pages分支：打包后的静态资源

## Link
* [vuePress介绍](https://v2.vuepress.vuejs.org/zh/guide/)
* [commit emoji](https://github.com/ikatyang/emoji-cheat-sheet)
* [emoji icon](https://gitmoji.dev/)