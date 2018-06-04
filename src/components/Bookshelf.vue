<template>
  <div>
    <div><b>Home</b></div>
    <div> {{$store.apitoken}}</div>
    <div class="h4">Bookshelf name: <b>{{shelfName}}</b></div>
  <div class="form-style-6">
    <ul><li v-for="b in books" class="form-style-6"> {{b.book.title}} by {{b.book.author.complete_name}}&nbsp&nbsp&nbsp
      <button @click="deleteBook(b.id)">Delete Book</button></li>
    </ul>
  </div>
    <footer-links></footer-links>
  </div>
</template>

<script>
  import FooterLinks from './FooterLinks.vue';
    export default {
      data: function() {
        return {
          shelfName : '',
          books : []
        }
      },
      methods: {
        deleteBook: function(book_id){


          alert('will be deleted a book '+book_id);
          //1. call for delete route


          console.log(this.$store.state.user_id);

          this.$http.delete('http://localhost:8000/api/bookshelf/book/'+book_id,
            { headers: {
                'id_user' :  ''+this.$store.state.user_id,
                'apitoken' : this.$store.state.apitoken
            }});

          //2. update page

          for (var bookIndex in this.books){
            if (this.books[bookIndex].id == book_id){
              this.books.splice(bookIndex,1);
              break;
            }
          }
        }
      },
      components: {
        footerLinks : FooterLinks
      },
      created(){
        console.log(this.$store.state);
        this.$http.get('http://localhost:8000/api/bookshelf/'+this.$route.params.id,{
          headers:{
            'apitoken': this.$store.state.apitoken
          }
        }).then(response => {
          return response.json();
        }).then( data =>{
            this.shelfName = data.shelf.bookshelf_description;
            for (let bookIndex in data.shelf.books){
              console.log(data.shelf.books[bookIndex]);
              this.books.push(data.shelf.books[bookIndex]);
            }
          }
        );




      }
    }
</script>

<style scoped>

</style>
