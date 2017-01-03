<template>
  <div>
    <VNav></VNav>
    <router-view></router-view>
  </div>
</template>
<script>
  import Nav from '../Partials/Nav.vue'
  export default{
    name: "",
    beforeCreate(){
      console.log('beforeCreate')
    },
    data(){
      return {
        msg: 'Blog'
      }
    },
    methods: {},
    components: {
      'VNav': Nav
    }
  };
</script>
<style scoped lang="scss" rel="stylesheet/scss"></style>
