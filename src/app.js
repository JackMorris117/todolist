import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            todos: [
                {task: "Buy shopping", priority: 1},
                {task: "Clean bathroom", priority: 2},
                {task: "Car's MOT", priority: 3}
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
