<template>
  <div>
    <div>
      <input id="todo" type="text" v-model="todoItem" placeholder="Enter Todo"/>
      <button style="padding-left:10px;width=30px;" :disabled="!todoItem" @click="add()">Add</button>
    </div>
    <div class="todos" v-if="todos && todos.length > 0">
      <ul>
        <li><input type="checkbox" id="selectAll" @change="selectAll()" v-model="select"><label for="selectAll">Select All</label></li>
        <li v-for="(todo, i) in todos" :key="i">
          <input type="checkbox" :id="todo" :value="todo" v-model="checked" />
          <label :for="todo">{{ todo.toUpperCase() }}</label>

        </li>
      </ul>
    </div>
    <button style="margin-top:15px" @click="removeSelected()">Remove Selected</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      select: false,
      todoItem: "",
      todos: [],
      checked: []
    };
  },
  methods: {
    add() {
      this.todos.push(this.todoItem);
      this.todoItem = "";
    },
    removeSelected() {
      for (let i of this.checked) {
        this.todos = this.todos.filter(todo => {
          return i !== todo;
        });
      }
      this.select = false;
    },
    selectAll() {
      console.log(this.select);
      if (this.select) {
        this.checked = [];
        for (let i of this.todos) {
          this.checked.push(i);
        }
      } else {
        this.checked = [];
      }
    }
  }
};
</script>

<style scoped>
input[type="checkbox"] + label {
  display: block;
  margin: 0.2em;
  cursor: pointer;
  padding: 0.2em;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label:before {
  content: "\2714";
  border: 0.1em solid #000;
  border-radius: 0.2em;
  display: inline-block;
  width: 1em;
  height: 1em;
  padding-left: 0.2em;
  padding-bottom: 0.3em;
  margin-right: 0.2em;
  vertical-align: bottom;
  color: transparent;
  transition: 0.2s;
}
input[type="checkbox"] + label:active:before {
  transform: scale(0);
}

input[type="checkbox"]:checked + label:before {
  background-color: MediumSeaGreen;
  border-color: MediumSeaGreen;
  color: #fff;
}

input[type="checkbox"]:disabled + label:before {
  transform: scale(1);
  border-color: #aaa;
}

input[type="checkbox"]:checked:disabled + label:before {
  transform: scale(1);
  background-color: #bfb;
  border-color: #bfb;
}
/* label {
  display: inline-block;
  white-space: no-wrap;
  color: black;
  padding-left: 20px;
} */
ul {
  list-style-type: none;
}
li {
  font-size: 15px;
  font-family: sans-serif;
}
</style>
