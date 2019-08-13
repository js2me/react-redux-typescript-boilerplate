import { TodoActions } from '@actions/todos'
import { TodoTextInput } from '@components'
import * as React from 'react'

export interface Props {
  addTodo: typeof TodoActions.addTodo
}

export class Header extends React.Component<Props> {
  constructor(props: Props, context?: any) {
    super(props, context)
    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(text: string) {
    if (text.length) {
      this.props.addTodo({ text })
    }
  }

  render() {
    return (
      <header>
        <h1>Todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    )
  }
}
