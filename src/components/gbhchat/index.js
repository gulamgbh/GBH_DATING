import React from 'react'
import ChatHeader from './profile-header/ChatHeader'
import ChatMenu from './profile-header/ChatMenu'
import ChatPanel from './chatpanal'

const GbhChatPanel = () => {
    return (
        <div className='row'>
            <div className='col-md-3'>
                <ChatHeader />
                <ChatMenu />
            </div>
            <div className='col-md-9 border d-flex justify-content-center'>
                <ChatPanel />
            </div>
        </div>
    )
}

export default GbhChatPanel