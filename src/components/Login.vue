<template>

  <div class="form-style-6">
  <h4>Login</h4>
  <form>
    <input type="text"  placeholder="Your username" v-model="username"/>
    <input type="password"  placeholder="your password" v-model="password"/>
    <input type="submit" value="Send" @click="submitForm($event)"/>
    <ul v-if="validationErrors.length" style="background-color: orange">
      <li style = "color: red " v-for="error in validationErrors">
        {{error}}
      </li>
    </ul>
  </form>
  </div>
</template>


<script>
  import {mapMutations} from 'vuex';
  export default {
    data : function(){
      return {
        username : '',
        password : '',
        validationErrors : []
      }
    },
    methods : {
      validateSignupForm (){
        if (this.username == '')
          this.validationErrors.push('username field has not been provided');
        if (this.password == ''){
          this.validationErrors.push('password field has not been provided');
        }

      },
      submitForm($event){
        $event.preventDefault();
        this.validationErrors = [];
        this.validateSignupForm();

        if (this.validationErrors.length == 0){
          this.$http.post('http://localhost:8000/api/login',{
            'username':this.username,
            'password':this.password
          })
            .then(response => {
              return response.json(); //response.json returns a Premise Object (only on first then)
            }, error => {
            }).then(response =>{
            this.$store.commit('setApitoken',response.apitoken);
            this.$store.commit('setUserId',response.user_id);
            this.$store.commit('setBookshelfId',response.bookshelf_id);
            this.$emit('loginSuccessful');
          });
        }

      }
    }
  }
</script>

<style scoped>

</style>
