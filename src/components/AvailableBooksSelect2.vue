<template>
  <div>
    <select v-for="i in inputDimension" v-model="selected[i]">
        <option  v-for="option in options" :value="option.id" > {{option.title}} by {{option.author.complete_name}} </option>
    </select>
    <button @click="enlargeInput">Add more!</button>
    <button @click="addByButton($event)">Add these!</button>

  </div>
</template>

<script>
  import {eventBus} from "../main";

  export default {
      props : ['options'],
      data : function() {
        return {
          selected : [],
          inputDimension: 1
        }
      },
      methods : {
        enlargeInput (){
          this.inputDimension++;
        },
        addByButton($event) {
          for (var x in this.selected){
            var body = {'id_book': this.selected[x], 'id_user': this.$store.state.user_id};
            var headers = {headers: {'apitoken': this.$store.state.apitoken}};
            this.$http.post('http://localhost:8000/api/bookshelf/book', body, headers);
          }
          setTimeout(function(){
            eventBus.$emit('bookAdded')
          },3000);

          }
        }
    }
</script>

<style scoped>

</style>
