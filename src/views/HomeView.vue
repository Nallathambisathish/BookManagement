<template>
  <div class="home">
    <BookList/>
  </div>
</template>

<script>
import BookList from '@/components/BookList.vue';

export default {
  name: 'HomeView',
  components: {
     BookList,
  }
}
</script>
