import { TodoActions } from 'app/actions'
import { Footer, Header, TodoList } from 'app/components'
import { TodoModel } from 'app/models'
import { RootState } from 'app/reducers'
import { TodoState } from 'app/reducers/state'
import { omit } from 'app/utils'
import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { bindActionCreators, Dispatch } from 'redux'
import * as style from './style.styl'

const FILTER_VALUES = (Object.keys(TodoModel.Filter) as Array<
  keyof typeof TodoModel.Filter
>).map(key => TodoModel.Filter[key])

const FILTER_FUNCTIONS: Record<
  TodoModel.Filter,
  (todo: TodoModel) => boolean
> = {
  [TodoModel.Filter.SHOW_ALL]: () => true,
  [TodoModel.Filter.SHOW_ACTIVE]: todo => !todo.completed,
  [TodoModel.Filter.SHOW_COMPLETED]: todo => todo.completed
}

export interface Props extends RouteComponentProps<void> {
  todos: TodoState
  actions: TodoActions
  filter: TodoModel.Filter
}

@connect(
  (state: RootState, ownProps): Pick<Props, 'todos' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '')
    const filter =
      FILTER_VALUES.find(value => value === hash) || TodoModel.Filter.SHOW_ALL
    return { todos: state.todos, filter }
  },
  (dispatch: Dispatch): Pick<Props, 'actions'> => ({
    actions: bindActionCreators(omit(TodoActions, 'Type'), dispatch)
  })
)
export class App extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    filter: TodoModel.Filter.SHOW_ALL
  }

  constructor(props: Props, context?: any) {
    super(props, context)
    this.handleClearCompleted = this.handleClearCompleted.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleClearCompleted(): void {
    const hasCompletedTodo = this.props.todos.some(
      todo => todo.completed || false
    )
    if (hasCompletedTodo) {
      this.props.actions.clearCompleted()
    }
  }

  handleFilterChange(filter: TodoModel.Filter): void {
    this.props.history.push(`#${filter}`)
  }

  render() {
    const { todos, actions, filter } = this.props
    const activeCount =
      todos.length - todos.filter(todo => todo.completed).length
    const filteredTodos = filter
      ? todos.filter(FILTER_FUNCTIONS[filter])
      : todos
    const completedCount = todos.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    )

    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <TodoList todos={filteredTodos} actions={actions} />
        <Footer
          filter={filter}
          activeCount={activeCount}
          completedCount={completedCount}
          onClickClearCompleted={this.handleClearCompleted}
          onClickFilter={this.handleFilterChange}
        />
      </div>
    )
  }
}
