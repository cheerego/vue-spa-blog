/**
 * Vue 相关
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

/**
 * 第三方
 */
import 'normalize.css';
import 'animate.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'semantic-ui/dist/semantic.css'
// import 'semantic-ui/dist/semantic.js'
/**
 * Vue注册插件
 */
Vue.use(VueRouter)

const routes = [
  {path: '/', component: require('./components/Layout/Index.vue')},
  {path: '/index', component: require('./components/Layout/Index.vue')},
  {
    path: '/blog', component: require('./components/Layout/Blog.vue'),
    children: [
      {
        path: 'posts',
        component: require('./components/Views/Posts.vue')
      },
      {
        path: 'tags',
        component: require('./components/Views/Tags.vue')
      }
    ]
  }
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

/* eslint-disable no-new */
const app = new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
