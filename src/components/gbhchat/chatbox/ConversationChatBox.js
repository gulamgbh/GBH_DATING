import React, { useEffect } from 'react'
import ChatBoxHeader from './ChatBoxHeader'
import ChatBoxMessage from './ChatBoxMessage'
import { useDispatch, useSelector } from 'react-redux'
import { getUserConversation } from '../../../redux/action/conversation.action'

const ConversationChatBox = () => {
  const chattingUser = useSelector(state => state.chatUser.user);
  const auth = useSelector(state => state.userAuth.user);
  const dispatch = useDispatch()
  const { fullname, profile, _id } = chattingUser
  const ids = {
    senderId: auth._id,
    receiverId: _id
  }
  useEffect(() => {
    dispatch(getUserConversation(ids))
  }, [_id])
  return (
    <>
      <ChatBoxHeader name={fullname} pic={profile} />
      <ChatBoxMessage />
    </>
  )
}

export default ConversationChatBox