import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import * as c from './style.styl'

export interface Props extends RouteComponentProps<void> {}

export const AboutPage: ReactPageSLC<Props> = props => {
  console.log('main page props', props)

  return <div className={c.page}>AboutPage</div>
}
