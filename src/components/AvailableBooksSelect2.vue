<template>
  <div>
    <select v-model="selected">
        <option  v-for="option in options" :value="option.id" > {{option.title}} by {{option.author.complete_name}} </option>
    </select>
    <button @click="addByButton($event)">Add this!</button>
  </div>
</template>

<script>
  import {eventBus} from "../main";

  export default {
      props : ['options'],
      data : function() {
        return {
          selected : ''
        }
      },
      methods : {
      addByButton($event){


        var body = {'id_book':this.selected,'id_user':this.$store.state.user_id};
        var headers = {headers: {'apitoken': this.$store.state.apitoken}};

        this.$http.post('http://localhost:8000/api/bookshelf/book', body,headers);
        setTimeout(function(){
          eventBus.$emit('bookAdded')
        },1000);

        }
      }
    }
</script>

<style scoped>

</style>
