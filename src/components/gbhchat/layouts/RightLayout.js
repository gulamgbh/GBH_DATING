import React from 'react'
import ConversationChatBox from '../chatbox/ConversationChatBox'
import ChatPanel from '../chatpanal/'
import { useSelector } from 'react-redux';
const RightLayout = () => {
  const chattingUser = useSelector(state => state.chatUser.user);
    return (
        <div className='col-md-9' style={{width:'74%'}}>
            {
                Object.keys(chattingUser).length?<ConversationChatBox />:<ChatPanel />
            }
            
        </div>
    )
}

export default RightLayout