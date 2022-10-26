<template>
    <h1> List of todos </h1>
    <div>
    <hl class="list-group">
        <li class="list-group-item" v-bind:key="todo.id" v-for="todo in todos"> 
            <Todo :todo="todo"  @deleteTodo="deleteOneTodo"/>
            
        </li>
              
        </hl>
    </div>
</template>

<script>
import axios from 'axios'
import Todo from "./Todo"
export default {
    name : "todos",
    components :{
        Todo
    },
    data() {
        return {
            todos:[]
        }
    },
    methods:{
        getTodos(){

            axios.get('http://localhost:3000/todos')
                .then(resp => this.todos = resp.data)
                .catch(error => console.log(error))
        },
        deleteOneTodo(id){
            axios.delete('http://localhost:3000/todos/${2}')
                 .then(() => { this.todos = this.todos.filter(todo => todo.id !== id);
                 })
             }
        },
        created(){
            this.getTodos();
        }
}
</script>

<style>

</style>