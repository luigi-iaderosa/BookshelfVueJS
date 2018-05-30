<template>
  <div>
    <p class="h4">{{ $store.state.msg }}</p>
    <p>
      <signup
              @signupSuccessful="handleSignupSuccessful($event)" @signupUnSuccessful="handleSignupUnSuccessful($event)"></signup>
    </p>

    <div class="form-style-6" v-if="signInDone">
      username : {{$store.state.username}}
      <hr>
      apitoken : {{$store.state.name}}
      <hr>

    </div>


    <div class="form-style-6" v-if="signInFailed">

      <hr>
      <span style="color:red">{{signInFailedMessage}}</span>
      <hr>

    </div>


    <p>
      <b>OR</b>
    </p>

    <p>

      <login @loginSuccessful="handleLoginSuccessful($event)" v-if="!loginDone"/>
    </p>

    <div class="form-style-6" v-if="loginDone">

      <button @click="goToBookshelf"> go to bookshelf!</button>
      <hr>
    </div>
  </div>
</template>
<script>
  import Signup from './Signup.vue';
  import Login from './Login.vue';
  export default {


    data (){
      return {
        signInDone : false,
        loginDone : false,
        signInFailed : false
      }


    },
    methods : {
      goToBookshelf (){
        console.log(this.$store.state);
        this.$router.push({path:`/bookshelf/${this.$store.state.bookshelf_id}`});
      },
      handleSignupSuccessful($event){
        this.$store.commit('setUsername',$event.username);
        this.$store.commit('setName',$event.$event.name);
        this.signInDone = true;
      },
      handleSignupUnSuccessful($event){
        this.signInFailed = true;
        this.signInFailedMessage = 'fields not all filled, or username already present';
      },
      handleLoginSuccessful($event){

        this.loginDone = true;
        console.log(this.$store.state);






      }
    },
    components : {
      signup : Signup,
      login : Login
    }
  }
</script>

<style scoped>

</style>
