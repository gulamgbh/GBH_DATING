import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersMessage } from '../../../redux/action/conversation.action';
import { Box, Typography, styled } from '@mui/material';
import { formatDate } from '../../global commponents/GlobalFunctions';

const Own = styled(Box)`
    background:pink;
    max-width:60%;
    padding:5px;
    margin-left:auto;
    margin-top:2px;
    margin-bottom:2px;
    width:fit-content;
    display:flex;
    border-radius:10px;
    word-break:break-word
`

const Wrapper = styled(Box)`
    background:white;
    max-width:60%;
    padding:5px;
    margin-top:2px;
    margin-bottom:2px;
    width:fit-content;
    display:flex;
    border-radius:10px;
    word-break:break-word
`
const Text = styled(Typography)`
    padding:0 25px 0 5px;
    font-size: 14px;
`

const Time = styled(Typography)`
    font-size: 10px;
    margin-top:6px;
    margin-top:auto;
    word-break:keep-all
`
const MessageInbox = ({flag}) => {
    const dispatch = useDispatch()
    const Auth = useSelector(state => state.userAuth.user);
    const conversation = useSelector(state => state.currentConversation.currentUser);
    const chats = useSelector(state => state.chats.chat);
    useEffect(() => {
        dispatch(getUsersMessage())
    }, [flag])
    return (
        <div >
            {
                chats.map((msg) =>
                    msg && msg.conversationId === conversation._id ?
                        msg.senderId === Auth._id ?
                            <Own>
                                <Text>{msg.text}</Text>
                                <Time>{formatDate(msg.updatedAt)}</Time>
                            </Own> :
                            <Wrapper>
                                <Text>{msg.text}</Text>
                                <Time>{formatDate(msg.updatedAt)}</Time>
                            </Wrapper>
                        : null
                )
            }
        </div>
    )
}

export default MessageInbox

// {
//     chats.map((msg) =>
//         msg && msg.conversationId === conversation._id ?
//             msg.senderId === Auth._id ?
//                 <Own>
//                     <Text>{msg.text}</Text>
//                     <Time>{formatDate(msg.updatedAt)}</Time>
//                 </Own> :
//                 <Wrapper>
//                     <Text>{msg.text}</Text>
//                     <Time>{formatDate(msg.updatedAt)}</Time>
//                 </Wrapper>
//             : null
//     )
// }