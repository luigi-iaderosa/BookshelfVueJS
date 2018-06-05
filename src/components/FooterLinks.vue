<template>
  <div>
    <!-- router links for addBookToBookshelf-->


    <!-- <router-link :to="{name : 'bookshelf-add-book', params: { id : $store.state.bookshelf_id } }" tag="li"
                 active-class = "active" exact>
      <a>Add to Bookshelf</a></router-link>-->

    <button class="modal-default-button" @click="showModal = true">Add to Bookshelf</button>
    <add-to-book-shelf v-if="showModal" @close="showModal = false">
    </add-to-book-shelf>
  </div>
</template>

<script>
    import AddToBookShelf from "./AddToBookShelf";

    export default {
      components: {AddToBookShelf},
      data(){
        return {
          showModal : false
        }
      }
    }
</script>

<style scoped>

</style>
