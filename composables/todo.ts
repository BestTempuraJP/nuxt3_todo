import type { Ref } from 'vue'
import type { Todo, CreateFormPayload } from '~/types/todo'

export const useTodos = () => {
  const nextTodoId: Ref<number> = useState('nextTodoId', () => 0)
  const todoList: Ref<Todo[]> = useState('todoList', () => [])

  const fetchTodo = (id: number): Todo => {
    const result = todoList.value.filter(todo => todo.id === Number(id))
    if (!result[0]) {
      throw throwError('Task is not found')
    }
    return result[0]
  }

  const createTodo = (payload: CreateFormPayload) => {
    todoList.value.push({
      id: nextTodoId.value,
      title: payload.title,
      body: payload.body
    })
    nextTodoId.value++
  }

  const updateTodo = (payload: Todo) => {
    const result = fetchTodo(payload.id)
    todoList.value[result.id] = payload
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
