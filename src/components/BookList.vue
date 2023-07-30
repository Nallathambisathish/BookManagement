<template>
  <div>
    <h1>Book List</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.title }} - {{ book.author }}
        <button @click="deleteBook(book.id)">Delete</button>
      </li>
    </ul>
    <AddBookForm @addBook="addBook" />
  </div>
</template>

<script>
import AddBookForm from "./AddBookForm.vue";

export default {
  components: {
    AddBookForm,
  },
  data() {
    return {
      books: [
        { id: 1, title: "Book 1", author: "Author 1" },
        { id: 2, title: "Book 2", author: "Author 2" },
        { id: 3, title: "Book 3", author: "Author 3" },
      ],
    };
  },
  methods: {
    addBook(newBook) {
      newBook.id = this.books.length + 1;
      this.books.push(newBook);
    },
    deleteBook(id) {
      this.books = this.books.filter((book) => book.id !== id);
    },
  },
};
</script>
