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

  const createTodo = (payload: payload) => {
    key.value++
    todoList.value.push({
      id: key.value,
      title: payload.title,
      body: payload.body
    })
  }

  return {
    todoList: readonly(todoList),
    createTodo
  }
}