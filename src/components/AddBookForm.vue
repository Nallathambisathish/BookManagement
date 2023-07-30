<template>
  <div>
    <h2>Add Book</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Title</label>
        <input v-model="book.title" required />
      </div>
      <div>
        <label>Author</label>
        <input v-model="book.author" required />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {
        title: "",
        author: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("addBook", { ...this.book });
      this.book.title = "";
      this.book.author = "";
    },
  },
};
</script>
