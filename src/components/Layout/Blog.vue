<template>
  <div>
    <VNav></VNav>
    <div class="content">
      <transition
        enter-active-class="animated bounceInLeft">
        <router-view></router-view>
      </transition>
    </div>
    <div class="pushpins"><div class="arrow-up icon" @click="goTop"></div></div>
  </div>
</template>
<script>
  import Nav from '../Partials/Nav.vue'
  export default{
    name: "",
    data(){
      return {
        msg: 'Blog'
      }
    },
    methods: {
      goTop(){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    },
    components: {
      'VNav': Nav
    }
  };
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .pushpins{
    position: fixed;
    right: 40px;
    bottom: 40px;
    background: #FFF;
    height: 25px;
    width: 25px;
    text-align: center;
    border-radius: 2px;
    line-height: 1.25;
    z-index: 1000;
  }
  .arrow-up.icon {
    color: #000;
    position: absolute;
    margin-left: 10px;
    margin-top: 3px;
    width: 1px;
    height: 16px;
    background-color: currentColor;
  }

  .arrow-up.icon:before {
    content: '';
    position: absolute;
    left: -5px;
    top: 1px;
    width: 10px;
    height: 10px;
    border-top: solid 1px currentColor;
    border-right: solid 1px currentColor;
    transform: rotate(-45deg);
  }


</style>
