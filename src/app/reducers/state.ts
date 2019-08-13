import { TodoModel } from 'app/models'

export interface RootState {
  todos: TodoState
  router?: any
}

export type TodoState = TodoModel[]
