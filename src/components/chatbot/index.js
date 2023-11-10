import React from 'react'
import MatchingPanal from './MatchingPanal'
import UserCardPannel from './UserCardPannel'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllUsers, getProfile } from '../../redux/action/profile.action'

const ChatBot = ({ children }) => {
  const userInfo = useSelector(state => state.userProfile);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfile());
  },[])
  return (
    <div className='row'>
      <div className='col-md-3 border' style={{backgroundColor:'#EAE6DA'}}>
        <MatchingPanal data={userInfo}/>
      </div>
      <div className='col-md-9 border d-flex justify-content-center' style={{ backgroundColor: "#e5e9f0" }}>
        <UserCardPannel child={children}/>
      </div>
    </div>
  )
}

export default ChatBot