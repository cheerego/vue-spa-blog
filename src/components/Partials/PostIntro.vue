<template>
  <div class="ui piled segment">
    <div class="ui inverted dimmer" :class="{'active':loading}">
      <div class="ui text loader">Loading</div>
    </div>
    <a class="ui white  right ribbon label">{{category}}</a>
    <h1 class="ui header">{{ article.title}}</h1>
    <p>
      {{ article.author }}
      <i class="wait icon"></i>
      Created at:{{article.created_at | humanTime}}
    </p>
    <p>
    <div class="extra content" v-show="tags">
      <a class="ui tag label" v-for="tag in tags">{{tag.name}}</a>
    </div>
    </p>
    <i class="quote left icon big la"></i>
    <p v-html="article.html" ref="post" v-highlight></p>
    <!--<i class="quote right big icon"></i>-->
  </div>
</template>
<script>
  import moment from 'moment'
  import config from '../../conf/config'
  import axios from 'axios'
  export default{
    name: "",
    props: [],
    data(){
      return {
        article: [],
        tags: [],
        category: '',
        loading: true
      }
    },
    created(){
      self = this
      if (isNaN(parseInt(this.$route.params.id))) {
        self.$router.push('/error')
        return;
      }
      this.loading = true
      function getPost() {
        return axios.get(`${config.server_base_url}/api/getpost/${self.$route.params.id}`)
      }

      function getCategory() {
        return axios.get(`${config.server_base_url}/api/getcatebypost/${self.$route.params.id}`)
      }

      function getTags() {
        return axios.get(`${config.server_base_url}/api/gettagsbypost/${self.$route.params.id}`);
      }

      axios.all([getCategory(), getTags(), getPost()])
        .then(axios.spread((cate, tags, post) => {
          this.category = cate.data.name
          this.tags = tags.data
          this.article = post.data
          this.loading = false
        })).catch(e => {
        console.log(e)
        //this.$router.push('/error')
      });

    },
    mounted(){
    },
    filters: {
      humanTime(value){
        return moment(value).fromNow()
      }
    },
    methods: {},
    components: {}
  };




</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .ui.piled.segment {
    margin: 0 auto;
    margin-top: 10px;
    width: 70%;
  }

  code {
    color: rebeccapurple;
  }
</style>
