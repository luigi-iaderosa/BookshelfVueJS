<template>
  <div class="form-style-6">
    <h4>Sign up</h4>
    <form>

      <input type="text"  placeholder="Your Name" v-model="name" />
      <input type="password"  placeholder="your password" v-model="password"/>
      <input type="text"  placeholder="Your username" v-model="username"/>
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
    import {mapMutations} from 'vuex'
    export default {
      data  : function(){
        return {
          username : '',
          name:'',
          password:'',
          validationErrors : []
        }
      },
      methods: {
        validateSignupForm (){
          if (this.username == '')
            this.validationErrors.push('username field has not been provided');
          if (this.name == '')
            this.validationErrors.push('name field has not been provided');
          if (this.password == ''){
            this.validationErrors.push('password field has not been provided');
          }

        },
        submitForm($event){
          $event.preventDefault();
          this.validationErrors = [];
          this.validateSignupForm();
          if (this.validationErrors.length == 0){
            this.$http.post('http://localhost:8000/api/signup',{'username':this.username,'name':this.name,'password':this.password})
              .then(response => {
                return response.json(); //response.json returns a Premise Object (only on first then)
            }, error => {
                console.log(error);
                this.$emit('signupUnSuccessful',error.json());
            }).then(response =>{

              this.$emit('signupSuccessful',response);
            }).then(data=>{
                this.$store.commit('setUsername',this.username);
                this.$store.commit('setName',this.name);
                this.$store.commit('setPassword',this.password);
            });
          }

        }
      }
    }
</script>

<style scoped>

</style>
