<template>
  <div class="form-style-6">
    <h4>Sign up</h4>
    <form>
      <input type="text"  placeholder="Your Name" v-model="name"/>
      <input type="password"  placeholder="your password" v-model="password"/>
      <input type="text"  placeholder="Your username" v-model="username"/>
      <input type="submit" value="Send" @click="submitForm($event)"/>
    </form>
  </div>
</template>

<script>
    export default {
      props : ['username','name','password','apitoken'],
      methods : {
        submitForm($event){
          $event.preventDefault();

          this.$http.post('http://localhost:8000/api/signup',{'username':this.username,'name':this.name,'password':this.password})
            .then(response => {
              return response.json(); //response.json returns a Premise Object (only on first then)
          }, error => {
              console.log(error);
              this.$emit('signupUnSuccessful',error.json());
          }).then(response =>{
            this.$emit('signupSuccessful',response);
          }).then();
        }
      }
    }
</script>

<style scoped>

</style>
