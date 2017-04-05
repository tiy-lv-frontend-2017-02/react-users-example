import axios from 'axios'
import store from '../store'

export function getUsers() {
  axios.get('http://localhost:3001/users').then(res=>{
    store.dispatch({
      type: 'GET_USERS',
      users: res.data
    })
  })
}

export function addUser(username, password) {
  axios.post('http://localhost:3001/users', {
    username, password
  }).then(res=>{
    getUsers()
  })
}