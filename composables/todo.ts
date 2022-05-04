import type { Ref } from 'vue'
interface Todo {
  id: number;
  title: string;
  body: string;
}
interface payload {
  title: string;
  body: string;
}

export const useTodos = () => {
  const key: Ref<number> = useState('key', () => 0)
  const todoList: Ref<Todo[]> = useState('todoList', () => [])

  const getTodo = (id: number) => {
    const result = todoList.value.filter(todo => todo.id === Number(id))
    return result[0]
  }

  const createTodo = (payload: payload) => {
    key.value++
    todoList.value.push({
      id: key.value,
      title: payload.title,
      body: payload.body
    })
  }

  const updateTodo = (payload: Todo) => {
    const targetIndex = todoList.value.findIndex(todo => todo.id === Number(payload.id))
    if (todoList.value[targetIndex]) {
      todoList.value[targetIndex] = payload
    }
  }

  return {
    todoList: readonly(todoList),
    getTodo,
    createTodo,
    updateTodo
  }
}