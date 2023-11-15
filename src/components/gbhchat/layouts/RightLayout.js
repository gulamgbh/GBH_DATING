import React from 'react'
import ConversationChatBox from '../chatbox/ConversationChatBox'
import ChatPanel from '../chatpanal/'
const RightLayout = () => {
    return (
        <div className='col-md-9'>
            <ConversationChatBox />
            {/* <ChatPanel /> */}
        </div>
    )
}

export default RightLayout