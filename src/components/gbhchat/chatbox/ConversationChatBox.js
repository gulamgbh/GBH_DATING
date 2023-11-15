import React from 'react'
import ChatBoxHeader from './ChatBoxHeader'
import ChatBoxFooter from './ChatBoxFooter'
import ChatBoxMessage from './ChatBoxMessage'

const ConversationChatBox = () => {
  return (
    <>
      <ChatBoxHeader />
      <ChatBoxMessage />
      <ChatBoxFooter />
    </>
  )
}

export default ConversationChatBox