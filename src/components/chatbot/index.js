import React from 'react'
import MatchingPanal from './MatchingPanal'
import UserCardPannel from './UserCardPannel'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProfile } from '../../redux/action/profile.action'

const ChatBot = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getProfile());
  },[])
  return (
    <div className='row'>
      <div className='col-md-3 border'>
        <MatchingPanal />
      </div>
      <div className='col-md-9 border' style={{backgroundColor:"#e5e9f0"}}>
        <UserCardPannel />
      </div>
    </div>
  )
}

export default ChatBot