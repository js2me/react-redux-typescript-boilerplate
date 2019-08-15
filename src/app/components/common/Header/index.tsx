import * as React from 'react'

export interface Props {
  addTodo?: any
}

export const Header: React.StatelessComponent<Props> = props => {
  return (
    <header>
      <h1>hhheaeder</h1>
    </header>
  )
}
