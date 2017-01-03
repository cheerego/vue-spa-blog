<template>
    <div>
      <div class="ui secondary  menu">
        <router-link to="/index" class="item">Home</router-link>
        <router-link to="/blog/posts" class="item">Blog</router-link>
        <router-link to="/blog/tags" class="item">Tags</router-link>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search...">
              <i class="search link icon"></i>
            </div>
          </div>
          <a class="ui item">Logout </a>
        </div>
      </div>
    </div>
</template>
<script>
    export default{
        name: "",
        data(){
            return {
                msg: 'Nav'
            }
        },
        methods: {},
        components: {}
    };
</script>
<style scoped lang="scss" rel="stylesheet/scss">
 .router-link-active {
    box-shadow: none;
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
    border-radius: 0.28571429rem;
  }
</style>
