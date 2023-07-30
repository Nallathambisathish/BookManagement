<template>
  <div class="about">
    <TodoList />
    <TodoInput />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import TodoInput from '@/components/TodoInput.vue';

export default {
  name: 'AboutView',
  components: {
     TodoList,
     TodoInput,
  }
}
</script>
