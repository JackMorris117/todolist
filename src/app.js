import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            todos: [
                {task: "Buy shopping"},
                {task: "Clean bathroom"},
                {task: "Car's MOT"}
            ]
        },
        methods: {
            saveNewItem: function(){
                this.todos.push({
                    task: this.newItem
                });
                this.newItem = "";
            }
        }
    })
});
