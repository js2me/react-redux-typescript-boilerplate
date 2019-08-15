import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Route } from 'react-router'

import { Header } from '@components/common/Header'
import { AboutPage } from '@components/pages/About'
import { MainPage } from '@components/pages/Main'

export interface Props extends RouteComponentProps<void> {}

export const Routes = () => (
  <>
    <Header />
    <Route exact path="/" component={MainPage} />
    <Route path="/about" component={AboutPage} />
  </>
)
