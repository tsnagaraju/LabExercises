<template>
  <div>
    <h1>Task-2</h1>
    <h2>Todo List</h2>
    <br />
    <br />
    <br />
    <input type="text" v-model="task" />
    <button @click="addTask">Add Task</button>
    <br />
    <br />
    <input type="checkbox" @click="method1()" v-model="checkAll" />
    <label>Select All</label>
    <br />
    <br />
    <div v-for="(item,i) in todos" :key="i">
      <input type="checkbox" @click="method2(i)" :checked="checkAll" />
      {{item}}
    </div>
    <!-- <br />
    <span>Checked names: {{ remove }}</span>
    <br />
    <span>List: {{ todos }}</span>-->
    <br />
    <br />
    <button @click="removeTask()">Remove</button>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      todos: [],
      remove: [],
      task: "",
      checkAll: false,
      isChecked: false
    };
  },
  methods: {
    addTask() {
      this.todos.push(this.task);
      this.task = "";
      return;
    },
    removeTask() {
      if (this.checkAll) {
        this.todos = "";
        this.checkAll = !this.checkAll;
      } else {
        for (let i = 0; i < this.remove.length; i++) {
          this.todos.splice(this.todos.indexOf(this.remove[i]), 1);
        }
      }
      this.remove = "";
    },
    method1() {
      this.checkAll = !this.checkAll;
      this.remove = "";
      if (this.checkAll) {
        this.remove = this.todos;
      }
      return;
    },
    method2(i) {
      if (!this.checkAll) {
        this.remove.push(this.todos[i]);
      }
      return;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
  color: rgb(43, 58, 197);
}
h1 {
  margin: 40px 0 0;
  color: rgb(61, 33, 33);
}
</style>