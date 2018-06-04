<template>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>

  import {eventBus} from "../main";
    export default {
      methods : {
        logout (){

          this.$store.commit('reset');
          console.log(this.$store.state);
          eventBus.$emit('logoutButtonPushed');
          this.$router.push('/home');
        }
      },
      created(){
        console.log(eventBus);
      }
    }
</script>

<style scoped>

</style>
