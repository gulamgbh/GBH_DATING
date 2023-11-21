import { useState, Suspense, lazy, useEffect } from 'react';
import ChatBoxFooter from './ChatBoxFooter'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersMessage, newMsgAndUpdateConversaion } from '../../../redux/action/conversation.action';
// import MessageInbox from './MessageInbox';
const MessageInbox = lazy(() => import('./MessageInbox'));
const ChatBoxMessage = () => {
  const auth = useSelector(state => state.userAuth.user);
  const frndAuth = useSelector(state => state.chatUser.user);
  const conversation = useSelector(state => state.currentConversation.currentUser);
  const [textMessage, setTextMessage] = useState('');
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch()
  const sendText = (e) => {
    const code = e.keyCode || e.which
    if (code === 13) {
      let message = {
        senderId: auth._id,
        receiverId: frndAuth._id,
        conversationId: conversation._id,
        type: 'text',
        text: textMessage
      }
      dispatch(newMsgAndUpdateConversaion(message))
      setTextMessage('')
      setFlag(prev => !prev)
    }
  }
  return (
    <>
      <div className='row' style={{ height: "64vh", overflowY: 'scroll', backgroundColor: '#ffdeeb' }}>
        <Suspense>
          <MessageInbox flag={flag} />
        </Suspense>

      </div>
      <ChatBoxFooter
        sendText={sendText}
        setTextMessage={setTextMessage}
        textMessage={textMessage}
        
      />
    </>
  )
}

export default ChatBoxMessage