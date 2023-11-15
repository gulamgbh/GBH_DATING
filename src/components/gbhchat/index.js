import React, { useEffect } from 'react'
import LeftLayout from './layouts/LeftLayout'
import RightLayout from './layouts/RightLayout'

const GbhChatPanel = () => {
    
    return (
        <div className='row'>
            <LeftLayout />
            <RightLayout />
        </div>
    )
}

export default GbhChatPanel