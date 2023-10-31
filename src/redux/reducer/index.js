import {combineReducers} from 'redux'
import authReducer from './userAuth.reducer'

const rootReducer = combineReducers({
    userAuth : authReducer,
})
export default rootReducer