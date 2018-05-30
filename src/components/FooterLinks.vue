<template>
  <div>
    <!-- router links for addBookToBookshelf-->


    <router-link :to="{name : 'bookshelf-add-book', params: { id : $store.state.bookshelf_id } }" tag="li"
                 active-class = "active" exact>
      <a>Add to Bookshelf</a></router-link>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
