<template>
  <transition
    enter-active-class="animated bounceOutRight"
    leave-active-class="animated tada">
    <router-view></router-view>
  </transition>
</template>

<script>

  export default {
    name: 'app',
    components: {}
  }
</script>

<style>

</style>
