<template>
  <div>
    <h3> To do </h3>
    <br />
    <label>Add a todo</label>
    <input v-model="newTodo" />
    <button @click="addNewTodo">Add</button>
    <br />
    <br />
    <input type="checkbox" v-model="selectAll" @change="toggleAll" />
    <br />
    <div v-for="(todo,i) in todos" :key="i">
      <input type="checkbox" :checked="selectAll" @change="toggle(todo)" />
      <label>{{todo}}</label>
      <br />
    </div>
    <br />
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      todos: ["Daily Workout", "Read books", "Cook Dinner"],
      newTodo: "",
      deleteList: [],
      selectAll: false
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push(this.newTodo);
    },

    toggle(i) {
      if (this.deleteList.length != 0) {
        if (this.deleteList.indexOf(i) != -1)
          this.deleteList.splice(this.deleteList.indexOf(i), 1);
        else this.deleteList.push(i);
      } else this.deleteList.push(i);
    },

    toggleAll() {
      if (this.selectAll == true) this.deleteList = [...this.todos];
      else this.deleteList = [];
    },

    remove() {
      this.deleteList.forEach(element => {
        this.todos.splice(this.todos.indexOf(element), 1);
      });
    }
  }
};
</script>


<style scoped>
</style>