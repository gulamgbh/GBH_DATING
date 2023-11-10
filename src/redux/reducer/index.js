import {combineReducers} from 'redux'
import authReducer from './userAuth.reducer'
import profileReducer from './profile.reducer'
import allUsersReducer from './allusers.reducer'

const rootReducer = combineReducers({
    userAuth : authReducer,
    userProfile : profileReducer,
    usersList : allUsersReducer,
})
export default rootReducer