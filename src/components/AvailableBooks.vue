<template>
<div>
  <div class="form-style-6">
    <!-- select2 integration -->
    <select2 :options="availableBooks">
    </select2>

<!--
  <ul>
    <li v-for="book in availableBooks" class="form-style-6">
        {{book.title}} &nbsp {{book.author.first_name}}&nbsp {{book.author.middle_names}} &nbsp {{book.author.last_name}}&nbsp <button @click="add(book.id)"> Add! </button>
    </li>
  </ul>
  -->
  </div>
</div>
</template>

<script>
  import AvailableBooksSelect2 from './AvailableBooksSelect2.vue';
    export default {
        data : function () {
          return {
            availableBooks : []
          }
        },
        methods : {
          add(bookId) {

            var body = {'id_book':bookId,'id_user':this.$store.state.user_id};
            var headers = {headers: {'apitoken': this.$store.state.apitoken}};
            this.$http.post('http://localhost:8000/api/bookshelf/book', body,headers);
            this.$router.push('/bookshelf/'+this.$store.state.bookshelf_id);
          },

        },
        created() {
          this.$http.get('http://localhost:8000/api/books').then(response => {return response.json()})
            .then(data => {
              for (let bookIndex in data.books){
                // console.log(data.books[bookIndex]);
                this.availableBooks.push(data.books[bookIndex]);
              }
            });
        },
      components : {
          select2: AvailableBooksSelect2
      }
    }
</script>

<style scoped>

</style>
