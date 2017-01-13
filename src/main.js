/**
 * Vue 相关
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import infiniteScroll from  'vue-infinite-scroll'

/**
 * 第三方
 */
import 'normalize.css';
import 'animate.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'semantic-ui/dist/semantic.css'
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/googlecode.css'
// import 'semantic-ui/dist/semantic.js'
/**
 * Vue注册插件
 */
Vue.use(VueRouter)
Vue.use(infiniteScroll)
const routes = [
  {path: '/', redirect: '/index'},
  {path: '/index', component: require('./components/Layout/Index.vue')},
  {
    path: '/blog', component: require('./components/Layout/Blog.vue'),
    children: [
      {path: 'posts', component: require('./components/Views/Posts.vue')},
      {path: 'posts/:id', component: require('./components/Partials/PostIntro.vue')},
      {path: 'tags', component: require('./components/Views/Tags.vue')},
      {path: 'login', component: require('./components/Views/Login.vue')},
    ]
  },
  {path: '/error', component: require('./components/Layout/404.vue')},
  {path: '*', redirect: '/error'},

]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})
/**
 * VueRouter 的钩子
 */
router.beforeEach((to, from, next) => {
  NProgress.start()
  next();
})
router.afterEach(route => {
  NProgress.done()
})
import axios from 'axios'
/* eslint-disable no-new */
const app = new Vue({
  router,
  render: (h) => h(App),
  mounted(){
    document.querySelectorAll('pre code').forEach(function (i, e) {
      hljs.highlightBlock(e)
    });
  }
}).$mount('#app')
