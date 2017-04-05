import React from 'react'
import {addUser} from './api/users'

export default React.createClass({
  getInitialState() {
    return {
      username: '',
      password: ''
    }
  },
  update(e) {
    this.setState({[e.target.name]: e.target.value})
  },
  handleSubmit(e) {
    e.preventDefault()
    addUser(this.state.username, this.state.password)
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="username" onChange={this.update} type="text" placeholder="username" value={this.state.username} />
        <input name="password" onChange={this.update} type="password" placeholder="password" value={this.state.password} />
        <button type="submit">Submit</button>
      </form>
    )
  }
})