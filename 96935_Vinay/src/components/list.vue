<template>
   <div class="container mt-5">
        <h3 class="text-center">Todo List</h3>
        <div class="row">
           <div class="col-12">
                <div class="d-table-cell w-100 mr-3" >
                     <input class="form-control" type="text" v-model="todo">
                </div>
                <div class="d-table-cell align-middle">
                    <button class="btn btn-primary" :disabled="!todo" @click="onAddTodoItem">Add</button>
                </div>
           </div>
       </div>
        <div class="row">
           <div class="col-12">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <div class="custom-control custom-checkbox" v-if="todoList.length > 0">
        <input type="checkbox" class="custom-control-input" :checked="isAllSelected" id="all" @change="onSelectAllClicked">
        <label class="custom-control-label" for="all">Select All</label>
      </div>
    </li>
    <li class="list-group-item" v-for="(item,i) in todoList" :key="i">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" :checked="item.selected" :id="i" @change="onItemClicked(i,item.selected)">
        <label class="custom-control-label" :for="i">{{item.name}}</label>
      </div>
    </li>
  </ul>
           </div>
        </div>
        <div class="row"  v-if="todoList.length > 0">
        <div class="col-sm-12 text-center">
            <button class="btn btn-primary" @click="onRemove">Remove</button>
        </div>
    </div>
   </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "todoList",
  data() {
    return {
      isAllSelected : false,
      todoList: [] as {name : string, selected : boolean}[],
      todo : ''
    };
  },
  methods: {
    onAddTodoItem() {
        const obj = {
            name : this.todo,
            selected: false
        }
      this.todoList.push(obj);
      this.todo = '';
    },
    onItemClicked(index : number, selected : boolean){
        this.todoList[index].selected = selected ? false : true;
    },
    onRemove(){
        if(this.isAllSelected){
            this.todoList = [];
            this.isAllSelected = !this.isAllSelected;
            return;
        }
        this.todoList.filter((item,index) =>{
                if(item.selected){
                    this.todoList.splice(index,1);
                }
        })
    },
    onSelectAllClicked(){
        this.isAllSelected = !this.isAllSelected ;
    }
  }
});
</script>

<style scoped>

</style>


