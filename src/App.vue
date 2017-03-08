<template>
  <transition
    enter-active-class="animated bounceInLeft">
    <router-view></router-view>
  </transition>
</template>

<script>
  export default {
    name: 'app',
    components: {},
  }
</script>

<style>

</style>
