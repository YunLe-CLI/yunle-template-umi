# yunle-template-react

如使用该前端脚手架，可以先安装

1. `npm install -g yunle-cli`

2. `yunle init <project-name>`

3. `cd <project-name> && npm install`

4. `npm run dev`

## 开发流程

![开发流程图](docs/images/images.png)

## 相关命令

> 开发过程中，你用得最多的会是`npm run dev`，但是这里还有很多其它的处理：


|`npm run <script>`|用途|
|------------------|-----------|
|`dev/build`|开发/生产环境 --- 启动服务。|

## 程序目录

```
.
├── config                   # Server config
│   ├── server.config        # server
├── docs                     # 打包生产环境后文件
├── src                      # 应用源文件
│   ├── api                  # 第三方库
│       ├── api.config.js    # 第三方js库
│       ├── index.js         # 第三方css库
│   ├── components           # 组件库
│       ├── DevTools         # redux dev tools
│   ├── containers           # 容器库
│       ├── App              # 入口容器
│   ├── router               # 路由配置
│   ├── store                # store
│   ├── index.html           # html入口
│   ├── index.js             # js入口
├── .babelrc 
├── .eslintrc.js 
├── package.json 
├── webpack.config.js 
```

## mockjs学习

[http://mockjs.com/](http://mockjs.com/)

## rap API文档工具学习

[http://rap.taobao.org/org/index.do](http://rap.taobao.org/org/index.do)
