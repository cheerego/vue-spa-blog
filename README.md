# 介绍
使用Vue2.0的一个单页的blog,有下滑加载使用的是饿了么的一个组件
使用laravel写的后端(支持cors跨域访问) https://github.com/cheerzz/laravel-blog
希望在年后完成 2017-1-4 晚12：09：37
# 安装
```
git clone
npm install
```
# 运行
```
//在运行前，在laravel注册，然后添加几篇文章、类别和标签
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
![预览](https://github.com/cheerzz/vue-spa-blog/blob/master/2017-01-14 18.28.44.gif)
