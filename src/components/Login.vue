<template>

  <div class="form-style-6">
  <h4>Login</h4>
  <form>
    <input type="text"  placeholder="Your username" v-model="username"/>
    <input type="password"  placeholder="your password" v-model="password"/>
    <input type="submit" value="Send" @click="submitForm($event)"/>
  </form>
  </div>
</template>


<script>
  import {mapMutations} from 'vuex';
  export default {
    data : function(){
      return {
        username : '',
        password : ''
      }
    },
    methods : {
      submitForm($event){
        $event.preventDefault();

        this.$http.post('http://localhost:8000/api/login',{
          'username':this.username,
          'password':this.password
        })
          .then(response => {
            return response.json(); //response.json returns a Premise Object (only on first then)
          }, error => {
            // console.log(error);
            // this.$emit('loginUnSuccessful',error.json());
          }).then(response =>{
          this.$store.commit('setApitoken',response.apitoken);
          this.$store.commit('setUserId',response.user_id);
          this.$store.commit('setBookshelfId',response.bookshelf_id);
          // console.log(this.$store.state); qui lo stato risulta cambiato
          this.$emit('loginSuccessful');
        });
      }
    }
  }
</script>

<style scoped>

</style>
