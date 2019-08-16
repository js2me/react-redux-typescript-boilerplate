import * as React from 'react'
import { NavLink } from 'react-router-dom'

import * as c from './style.styl'

export interface Props {
  addTodo?: any
}

export const Header: React.StatelessComponent<Props> = props => {
  return (
    <header>
      <h1>hhheaeder</h1>
      <nav>
        <NavLink to="/" activeClassName={c.navLink}>
          home
        </NavLink>
        <NavLink to="/about" activeClassName={c.navLink}>
          about
        </NavLink>
      </nav>
    </header>
  )
}
