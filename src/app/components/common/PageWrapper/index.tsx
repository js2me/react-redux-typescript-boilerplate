import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Header } from '@components/common/Header'

import * as style from './style.styl'

export interface Props extends RouteComponentProps<void> {}

export class PageWrapper extends React.Component<Props> {
  render() {
    const { children } = this.props

    return (
      <div className={style.wrapper}>
        <Header />
        {children}
      </div>
    )
  }
}
