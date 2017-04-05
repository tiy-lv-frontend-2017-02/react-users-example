import React from 'react'
import store from './store'
import {getUsers} from './api/users'
import UserForm from './UserForm'

export default React.createClass({
  getInitialState() {
    return {
      users:[]
    }
  },
  componentWillMount() {
    this.unsubscribe = store.subscribe(()=>{
      const appState = store.getState()

      this.setState({
        users: appState.userReducer.users
      })
    })
    getUsers()
  },
  componentWillUnmount() {
    this.unsubscribe()
  },
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user=>(
            <li key={user.id}>{user.username} {user.password}</li>
          ))}
        </ul>
        <UserForm />
      </div>
    )
  }
})