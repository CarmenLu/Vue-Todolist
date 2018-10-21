<template>
<div id="Todolist">
<AddTask v-model="TaskName" placeholder="new Todo" @keydown.enter="addtask"></AddTask>
<ul v-if="todos.length">
<TodoListUnitem v-for="todo in todos" :key="todo.id" :todo="todo" v-if="!todo.condition"  @hasFinished="finishTask" @remove="removeTask"/>
</ul>

<button class="btn" @click="showOrHidden"> {{isHide?'HideHistoryTask':'ShowHistoryTask' }}</button>
<ul>
<TodoListitem v-for="todo in todos" :key="todo.id" :todo="todo" v-if="todo.condition"  :class="isHide? 'show' : 'hide'" @remove="removeTask"/>
</ul>
</div>
</template>

<script>
import AddTask from './AddTask.vue'
import TodoListitem from './TodoListitem.vue'
import TodoListUnitem from './TodoListUnitem.vue'

let Tasktodo = 1

export default {
  components: { AddTask, TodoListitem, TodoListUnitem },

  data () {
    return {
      TaskName: ' ',
      isHide: false,
      todos: [
        {
          id: Tasktodo++,
          text: 'Eat something',
          condition: false
        },

        {
          id: Tasktodo++,
          text: 'Reading',
          condition: false
        },

        {
          text: 'vue todolist',
          id: Tasktodo++,
          condition: true
        }
      ]
    }
  },

  methods: {
    addtask () {
      const trimedText = this.TaskName.trim()
      if (trimedText) {
        this.todos.push({
          text: trimedText,
          id: Tasktodo++,
          condition: false
        })
        this.TaskName = ' '
      } else {
        alert('please input TaskName')
      }
    },
    showOrHidden () {
      this.isHide = !this.isHide
    },
    finishTask (todo) {
      todo.condition = !todo.condition
    },
    removeTask (idtoRemove) {
      var message = '是否要删除任务？'
      if (confirm(message)) {
        this.todos = this.todos.filter(todo => {
          return todo.id !== idtoRemove
        })
      }
    }
  }
}
</script>

<style>
.hide {
  display: none;
}
.show {
  display: block;
}
.btn {
  background-color:#1E90FF;
    border:2px;
    color: white;
  font-size: 13px;
    padding:10px 20px;
  border-radius: 12px;
   display:block;
   margin:0 auto;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
</style>
