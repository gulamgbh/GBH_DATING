import React from 'react'
import ChatHeader from '../profile-header/ChatHeader'
import ChatMenu from '../profile-header/ChatMenu'
import Conversation from '../conversation'

const LeftLayout = () => {
    return (
        <div className='col-md-3'>
            <ChatHeader />
            <ChatMenu />
            <Conversation />
        </div>
    )
}

export default LeftLayout