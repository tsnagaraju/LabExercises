<template>
    <div class="container">
        <div class="jumbotron">
            <h3>Todo App</h3>
            <p>This app is made using Vue and Bootstrap-Vue ...</p>
            <br>
            <div class="row">
            <div class="offset-md-3 col-md-6">
                <AddTodo :addTodo="addTodo" />
            </div>
        </div>
        </div>
        <div class="row">
            <div class="offset-md-3 col-md-6">
                <h3 class="align-center">Todo List</h3>
                <table class="table table-dark table-striped table-hover table-responsive">
                    <tr>
                        <th>
                            <b-form-checkbox v-model="allChecked" @change="checkUncheckAll" v-b-tooltip.hover title="Select All"></b-form-checkbox>
                        </th>
                        <th>ID</th>
                        <th>Task</th>
                    </tr>
                    <tr v-for="(todo, index) in todos" :key="index">
                        <td>
                            <b-form-checkbox v-model="todo.checked"></b-form-checkbox>
                        </td>
                        <td>{{index+1}}</td>
                        <td>{{todo.task}}</td>
                    </tr>
                </table>
                <b-button @click="removeTodo">Remove</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import AddTodo from "./AddTodo";

export default {
    name : "TodoList",
    components : {
        AddTodo
    },
    data() {
        return ({
            todos : [],
            allChecked : false
        })
    },
    methods : {
        addTodo(task) {
            let todo = { 'task' : task, 'checked' : false};
            this.todos.push(todo);
        },

        checkUncheckAll() {
            if (!this.allChecked) {
                this.allChecked = true;
                for (let todo of this.todos)
                    todo.checked = true;
            }
            else {
                this.allChecked = true;
                for (let todo of this.todos)
                    todo.checked = false;
            }
        },

        removeTodo() {
            if (this.allChecked) 
                this.allChecked = false;
            this.todos = this.todos.filter(todo => todo.checked !== true);
        }
    }
}
</script>

<style scoped>
    .align-center {
        align-content: center;
    }
    table {
        border-radius: 10px;
    }
</style>