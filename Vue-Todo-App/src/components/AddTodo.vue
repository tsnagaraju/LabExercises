<template>
    <div class="row">
        <div class="offset-md-1 col-md-6">
            <b-form-input v-model="task" placeholder="Enter new task" :state="taskState"></b-form-input>
        </div>
        <div class="offset-md-1">
            <b-button variant="success" @click="addTaskClicked">Add Task</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name : 'AddTodo',
    props : {
        addTodo : Function
    },
    data() {
        return ({
            task : '',
            taskState : null
        })
    },
    methods : {
        addTaskClicked() {
            if (this.task === '')
                this.taskState = false;
            else {
                this.taskState = null;
                this.addTodo(this.task);
                this.task = '';
            }
        }
    }
}
</script>