<template>
  <div class="spinner">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
    <div class="line4"></div>
    <div class="line5"></div>
  </div>
</template>
<script>
  export default{
    name: "",
    props: [],
    data(){
      return {}
    },
    methods: {},
    components: {}
  };
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .spinner{
    display: inline-block;
  }
  .spinner div {
    display: inline-block;
    height: 35px;
    width: 3px;
    background-color: #41b883;
    animation: loading 1.2s infinite ease-in-out;
  }

  .spinner .line2 {
    animation-delay: -1.1s;
  }

  .spinner .line3 {
    animation-delay: -1.0s;
  }

  .spinner .line4 {
    animation-delay: -0.9s;
  }

  .spinner .line5 {
    animation-delay: -0.8s;
  }

  @keyframes loading {
    0%, 40%, 100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
    }
  }
</style>
