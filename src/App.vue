<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p>
      <signup :username="username" :password="password" :name="name"
              @signupSuccessful="handleSignupSuccessful($event)" @signupUnSuccessful="handleSignupUnSuccessful($event)"></signup>
    </p>

    <div class="form-style-6" v-if="signInDone">
      username : {{username}}
    <hr>
      apitoken : {{name}}
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

      <login :username="username" :password="password" apitoken="apitoken"
             @loginSuccessful="handleLoginSuccessful($event)"/>
    </p>

    <div class="form-style-6" v-if="loginDone">
      apitoken : {{apitoken}}
      <hr>
    </div>
  </div>
</template>

<script>
  import Signup from './components/Signup.vue';
  import Login from './components/Login.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Bookshelf',
      username: '',
      name : '',
      password : '',
      apitoken : '',
      signInDone : false,
      signInFailed : false,
      signInFailedMessage : '',
      loginDone : false
    }
  },
  methods : {
    handleSignupSuccessful($event){
      this.username = $event.username;
      this.name = $event.name;
      this.signInDone = true;
    },
    handleSignupUnSuccessful($event){
      this.signInFailed = true;
      this.signInFailedMessage = 'fields not all filled, or username already present';
    },
    handleLoginSuccessful($event){
      this.loginDone = true;
      this.apitoken = $event;
    }
  },
  components : {
    signup : Signup,
    login : Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.form-style-6{
  font: 95% Arial, Helvetica, sans-serif;
  max-width: 400px;
  margin: 10px auto;
  padding: 16px;
  background: #F7F7F7;
}
.form-style-6 h1{
  background: #43D1AF;
  padding: 20px 0;
  font-size: 140%;
  font-weight: 300;
  text-align: center;
  color: #fff;
  margin: -16px -16px 16px -16px;
}
.form-style-6 input[type="text"],
.form-style-6 input[type="password"],
.form-style-6 input[type="date"],
.form-style-6 input[type="datetime"],
.form-style-6 input[type="email"],
.form-style-6 input[type="number"],
.form-style-6 input[type="search"],
.form-style-6 input[type="time"],
.form-style-6 input[type="url"],
.form-style-6 textarea,
.form-style-6 select
{
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 3%;
  color: #555;
  font: 95% Arial, Helvetica, sans-serif;
}
.form-style-6 input[type="text"]:focus,
.form-style-6 input[type="date"]:focus,
.form-style-6 input[type="datetime"]:focus,
.form-style-6 input[type="email"]:focus,
.form-style-6 input[type="number"]:focus,
.form-style-6 input[type="search"]:focus,
.form-style-6 input[type="time"]:focus,
.form-style-6 input[type="url"]:focus,
.form-style-6 textarea:focus,
.form-style-6 select:focus
{
  box-shadow: 0 0 5px #43D1AF;
  padding: 3%;
  border: 1px solid #43D1AF;
}

.form-style-6 input[type="submit"],
.form-style-6 input[type="button"]{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  padding: 3%;
  background: #43D1AF;
  border-bottom: 2px solid #30C29E;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  color: #fff;
}
.form-style-6 input[type="submit"]:hover,
.form-style-6 input[type="button"]:hover{
  background: #2EBC99;
}

</style>
