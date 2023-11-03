import {combineReducers} from 'redux'
import authReducer from './userAuth.reducer'
import profileReducer from './profile.reducer'

const rootReducer = combineReducers({
    userAuth : authReducer,
    userProfile : profileReducer,
})
export default rootReducer