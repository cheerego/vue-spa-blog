<template>
  <div class="ui card">
    <div class="image">
      <img :src="avatar">
    </div>
    <div class="content">
      <a class="header">{{name}}</a>
      <div class="meta">
        <span class="date">Joined in 2013</span>
      </div>
      <a class="description motto"></a>
    </div>
    <div class="extra content">
      <div class="ui three buttons">
        <router-link to="/blog/posts" class="ui basic green button"><i class=" large home icon" style="margin: 0"></i>
        </router-link>
        <a class="ui basic red button" :href="github"><i class=" large github icon" style="margin: 0"></i></a>
        <a class="ui basic teal  button" :href="weibo"><i class=" large weibo icon" style="margin: 0"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
  import { init } from 'ityped';
  import config from '../../conf/config';
  export default{
    name: "",
    data(){
      return {
        github: config.profile.github,
        weibo: config.profile.weibo,
        avatar:config.profile.avatar_url,
        name:config.profile.name

      }
    },
    mounted(){
      init('.motto', {
        // required - for now, only accepting texts
        strings: ['Kristy is an art director living in New York.'],
        typeSpeed: 55, //default
        backSpeed: 30, //default
        startDelay: 500, //default
        backDelay: 500, //default
        loop: false, //default
        showCursor: true, //default
        cursorChar: "|", //default
        onFinished: function(){}
      });
    },
    methods: {},
    components: {}
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .ityped-cursor {
    display: inline-block;
    width: 10px;
    background-color: red;
  }
</style>
