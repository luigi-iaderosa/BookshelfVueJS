<template>
<div>
  <div class="form-style-6">
  <ul>
    <li v-for="book in availableBooks" class="form-style-6">
        {{book.title}} &nbsp {{book.author.first_name}}&nbsp {{book.author.middle_names}} &nbsp {{book.author.last_name}}&nbsp <button @click="add(book.id)"> Add! </button>
    </li>
  </ul>
  </div>
</div>
</template>

<script>
    export default {
        data : function () {
          return {
            availableBooks : []
          }
        },
        created() {
          this.$http.get('http://localhost:8000/api/books').then(response => {return response.json()})
            .then(data => {
              for (let bookIndex in data.books){
                console.log(data.books[bookIndex]);
                this.availableBooks.push(data.books[bookIndex]);
              }
            });

        }
    }
</script>

<style scoped>

</style>
