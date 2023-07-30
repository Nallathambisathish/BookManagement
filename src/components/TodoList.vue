<!-- TodoList.vue -->
<template>
  <div>
    <h3>Todo List</h3>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.allTodos);

    return {
      todos
    };
  }
};
</script>
