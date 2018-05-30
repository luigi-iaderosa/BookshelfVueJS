<template>
    <div>
      Add To Bookshelf!
      <available-books></available-books>

    </div>
</template>

<script>
    import AvailableBooks from './AvailableBooks.vue';
    export default {

      methods: {

      },
      components : {
        availableBooks : AvailableBooks
      }

    }
</script>

<style scoped>

</style>
