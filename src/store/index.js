
import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  getters: {
    allTodos: state => state.todos
  },
  mutations: {
    addTodo: (state, todo) => state.todos.push(todo)
  },
  actions: {
    addNewTodo: ({ commit }, todo) => commit('addTodo', todo)
  },
  modules: {
  }
})
