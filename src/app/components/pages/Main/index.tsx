import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import * as c from './style.styl'

export interface Props extends RouteComponentProps<void> {}

export const MainPage: ReactPageSLC<Props> = props => {
  console.log('main page props', props)

  return <div className={c.page}>main page</div>
}
