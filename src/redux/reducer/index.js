import {combineReducers} from 'redux'
import authReducer from './userAuth.reducer'
import profileReducer from './profile.reducer'
import allUsersReducer from './allusers.reducer'
import chatReducer from './userChat.reducer'
import conversationReducer from './conversation.reducer'
import usersChatReducer from './usersChat.reducer'
const rootReducer = combineReducers({
    userAuth : authReducer,
    userProfile : profileReducer,
    usersList : allUsersReducer,
    chatUser : chatReducer,
    currentConversation : conversationReducer,
    chats : usersChatReducer,
})
export default rootReducer