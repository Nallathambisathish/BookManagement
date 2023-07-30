<!-- TodoInput.vue -->
<template>
  <div>
    <input type="text" v-model="newTodoText" />
    <button @click="addNewTodo">Add Todo</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const newTodoText = ref('');
    const store = useStore();

    const addNewTodo = () => {
      store.dispatch('addNewTodo', {
        id: Date.now(),
        text: newTodoText.value
      });
      newTodoText.value = '';
    };

    return {
      newTodoText,
      addNewTodo
    };
  }
};
</script>
