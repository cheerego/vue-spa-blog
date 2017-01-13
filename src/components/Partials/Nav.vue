<template>
  <div class="nav default">
    <div class="ui secondary  menu">
      <router-link to="/index" class="item">Home</router-link>
      <router-link to="/blog/posts" class="item">Posts</router-link>
      <router-link to="/blog/tags" class="item">Tags</router-link>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search...">
            <i class="search link icon"></i>
          </div>
        </div>
        <router-link to="/blog/login" class="item">Login</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import 'animate.css/animate.css'
  export default{
    name: "",
    data(){
      return {
        msg: 'Nav'
      }
    },
    mounted(){

    },
    beforeDestory(){
    },
    methods: {},
    components: {}
  };
</script>
<style scoped lang="scss" rel="stylesheet/scss">


</style>
