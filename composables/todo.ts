import type { Ref } from 'vue'
interface Todo {
  id: number;
  title: string;
  body: string;
}
interface Payload {
  title: string;
  body: string;
}

export const useTodos = () => {
  const nextTodoId: Ref<number> = useState('nextTodoId', () => 0)
  const todoList: Ref<Todo[]> = useState('todoList', () => [])

  const fetchTodo = (id: number) => {
    const result = todoList.value.filter(todo => todo.id === Number(id))
    return result[0]
  }

  const createTodo = (payload: Payload) => {
    todoList.value.push({
      id: nextTodoId.value,
      title: payload.title,
      body: payload.body
    })
    nextTodoId.value++
  }

  const updateTodo = (payload: Todo) => {
    const targetIndex = todoList.value.findIndex(todo => todo.id === Number(payload.id))
    if (targetIndex > -1) {
      todoList.value[targetIndex] = payload
    }
  }

  const deleteTodo = (id: number) => {
    const targetIndex = todoList.value.findIndex(todo => todo.id === id)
    if (targetIndex > -1) {
      todoList.value.splice(targetIndex, 1)
    }
  }

  return {
    todoList: readonly(todoList),
    fetchTodo,
    createTodo,
    updateTodo,
    deleteTodo
  }
}
