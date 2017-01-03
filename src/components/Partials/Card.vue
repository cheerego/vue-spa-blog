<template>
  <div class="ui card">
    <div class="image">
      <img src="http://www.semantic-ui.cn/images/avatar2/large/kristy.png">
    </div>
    <div class="content">
      <a class="header">Kristy</a>
      <div class="meta">
        <span class="date">Joined in 2013</span>
      </div>
      <div class="description motto"></div>
    </div>
    <div class="extra content">
      <div class="ui three buttons">
        <router-link to="/blog" class="ui basic green button"><i class=" large home icon" style="margin: 0"></i>
        </router-link>
        <a class="ui basic red button"><i class=" large github icon" style="margin: 0"></i></a>
        <a class="ui basic teal  button"><i class=" large weibo icon" style="margin: 0"></i></a>
      </div>
    </div>
  </div>
</template>
<script>
  import Motto from 'motto'
  export default{
    name: "",
    data(){
      return {}
    },
    mounted(){
      var motto = new Motto('.motto', {
        lyric: 'Kristy is an art director living in New York.',
        showUpSpeed: 120,
        flashSpeed: 100,
        flashTimeout: 1000,
      })
    },
    methods: {},
    components: {}
  };
</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>
