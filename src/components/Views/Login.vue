<template>
  <div>
    <form class="ui form" @submit.prevent="onSubmit">
      <div class="field">
        <label>User Name</label>
        <input type="text" name="first-name" placeholder="User Name" v-model="username" required>
      </div>
      <div class="field">
        <label>Password</label>
        <input type="text" name="last-name" placeholder="Password" v-model="password" required>
      </div>
      <button class="right ui button " type="submit">Login</button>
    </form>
  </div>
</template>
<script>
  export default{
    name: "",
    data(){
      return {
        username:'',
        password:''
      }
    },
    methods: {
      onSubmit(){
        console.log(this.username,this.password)
      }
    },
    components: {}
  };
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .ui.form {
    width: 40%;
    margin: 0 auto;
  }
</style>
