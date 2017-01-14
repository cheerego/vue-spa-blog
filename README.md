# 介绍
使用Vue2.0的一个单页的blog
使用laravel写的后端(支持cors支持跨域访问) https://github.com/cheerzz/laravel-blog
希望在年后完成 2017-1-4 晚12：09：37
# 安装
```
git clone
npm install
```
# 运行
```
npm run dev //运行
npm run build //生成dist
```
# 配置
配置文件在项目目录下的src/conf/config.js下
```
export default {
  'server_base_url': 'http://localhost/laravel-blog/public', //这个配置项表示的是laravel的入口文件的目录，会根据这个路径去拼接api的链接
  'profile': {
    'github': 'https://github.com/cheerzz',
    'weibo': 'http://weibo.com/u/1767872324',
    'avatar_url':''
  },
  url: {
    'getOnePost':'/api/getPost'
  }
}
```

