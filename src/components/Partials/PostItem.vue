<template>


  <div class="ui fluid card ">
    <div v-if="picUrl"   :style="bg" style="height: 200px;width: 100%"></div>
    <div class="ui inverted dimmer" :class="{'active':loading}">
      <div class="ui text loader">Loading</div>
    </div>
    <!--<div class="image">-->
      <!--<img  :src="picUrl">-->
    <!--</div>-->
    <div class="content">
      <a class="ui white  right ribbon label">{{category}}</a>
      <router-link :to="{ path: `/blog/posts/${article.id}` }" class="header">{{ article.title }}</router-link>
      <div class="meta">2 days ago</div>
      <div class="description">
        <div class="html" v-html="">{{article.html | displayContent}}</div>
      </div>
    </div>
    <div class="extra content" v-show="tags"><a class="ui tag label" v-for="tag in tags">{{tag.name}}</a></div>
  </div>
</template>
<script>
  import axios from 'axios'
  import config from '../../conf/config'
  import cheerio from 'cheerio';
  export default{
    name: "",
    props: ['article'],
    data(){
      return {
        tags: [],
        category: '',
        loading: null,
        picUrl: '',
        bg: {},
      }
    },
    filters: {
      displayContent: function (value) {
        value = value.replace(/<[^>]+>/g, '').slice(0, 400) + '...'
        return value
      }
    },
    created(){
      this.getImg(this.article.html)
      self = this
      function getCategory() {
        return axios.get(`${config.server_base_url}/api/getcatebypost/${self.article.id}`)
      }

      function getTags() {
        return axios.get(`${config.server_base_url}/api/gettagsbypost/${self.article.id}`);
      }

      this.loading = true
      axios.all([getCategory(), getTags()])
        .then(axios.spread((cate, tags) => {
          this.category = cate.data.name
          this.tags = tags.data
          this.loading = false
        })).catch(e => console.log(e));
    },
    methods: {
      getImg(html){
        //<img src="http://pic.baike.soso.com/p/20130711/20130711100702-777693388.jpg" alt="Alt text" title="Optional title" />
        let $ = cheerio.load(html);
        let imgs = $('img')
        if (imgs.length == 0) {
          return
        }
        this.picUrl = imgs[0].attribs.src
        this.bg = {
          background: `url(${this.picUrl}) no-repeat`,
          backgroundSize: 'cover',
          filter: 'blur(2px)'
        }
      }


    },
    components: {}
  };
</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>
