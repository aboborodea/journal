import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import LandingPage from '../LandingPage/LandingPage'
import Entries from '../Entry/Entries'
import Entry from '../Entry/Entry'
import EntryCreate from '../Entry/EntryCreate'
import EntryEdit from '../Entry/EntryEdit'
import Sidebar from '../Sidebar/Sidebar'
import '../../index.scss'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state
    const mainJsx = (
      <main className="container">
        <Route path='/sign-up' render={() => (
          <SignUp alert={this.alert} setUser={this.setUser} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn alert={this.alert} setUser={this.setUser} />
        )} />
        <AuthenticatedRoute user={user} path='/sign-out' render={() => (
          <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/change-password' render={() => (
          <ChangePassword alert={this.alert} user={user} />
        )} />
        <Route user={user} exact path='/' render={() => (
          <LandingPage user={user} />
        )} />
        <AuthenticatedRoute user={user} exact path='/entries' render={() => (
          <Entries alert={this.alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} exact path='/entries/:id' render={() => (
          <Entry alert={this.alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/create-entries' render={() => (
          <EntryCreate alert={this.alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} exact path='/entries/:id/edit' render={() => (
          <EntryEdit alert={this.alert} user={user} />
        )} />
      </main>
    )

    const authJsx = (
      <div className="d-flex flex-row">
        <Sidebar user={user}/>
        {mainJsx}
      </div>
    )

    const unAuthJsx = (
      <Fragment>
        <Header user={user}/>
        {mainJsx}
      </Fragment>
    )

    return (
      <Fragment>
        {user ? authJsx : unAuthJsx}
        <div className="alertContainer">
          {alerts.map((alert, index) => (
            <AutoDismissAlert
              key={index}
              heading={alert.heading}
              variant={alert.variant}
              message={alert.message}
            />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default App
