# 介绍
使用Vue2.0的一个单页的blog,有下滑加载使用的是饿了么的一个组件
使用laravel写的后端(支持cors跨域访问) https://github.com/cheerzz/laravel-blog
使用Css3动画编写的Spinner组件，在下面的gif中可以看到，src/components/Partials/Spinner.vue
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
Profile属性主要在profile里面添加与修改
```
export default {
  // 路径是laravel的入口文件index.php的目录
  server_base_url: 'http://localhost/laravel-blog/public',
  // 下面的内容将会在Profile.vue中显示
  profile: {
    github: 'https://github.com/cheerzz',
    weibo: 'http://weibo.com/u/1767872324',
    avatar_url:'http://www.semantic-ui.cn/images/avatar2/large/kristy.png',
    name:'placeless'
  },
  url: {
    'getOnePost':'/api/getPost'
  }
}
```

![预览](https://github.com/cheerzz/vue-spa-blog/blob/master/QQ20170114-2@2x.png)
![预览](https://github.com/cheerzz/vue-spa-blog/blob/master/QQ20170114-3@2x.png)
![预览](https://github.com/cheerzz/vue-spa-blog/blob/master/QQ20170114-4@2x.png)
![预览](https://github.com/cheerzz/vue-spa-blog/blob/master/2017-01-15 16.19.16.gif)
![预览](https://github.com/cheerzz/vue-spa-blog/blob/master/2017-01-14 18.28.44.gif)
