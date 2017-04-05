import {combineReducers, createStore} from 'redux'
import userReducer from './reducers/users'

const rootReducer = combineReducers({
  userReducer
})

const store = createStore(rootReducer)

export default store