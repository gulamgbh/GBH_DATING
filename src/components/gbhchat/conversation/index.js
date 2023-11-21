import React, { useEffect } from 'react'
import { getAllUsers } from '../../../redux/action/allusers.action'
import { useDispatch, useSelector } from 'react-redux'
import { chatWithUser } from '../../../redux/action/userChat.action';
import { UserConversation } from '../../../redux/action/conversation.action';

const Conversation = () => {
  const allUsers = useSelector(state => state.usersList.allusers);
  const loginUserInfo = useSelector(state => state.userAuth.user);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  const getUser = (chattinguserinfo) => {
    dispatch(chatWithUser(chattinguserinfo))
    const ids = {
      senderId: loginUserInfo._id,
      receiverId: chattinguserinfo._id
    }
    dispatch(UserConversation(ids))

  }
  return (
    <div style={{ height: "66vh", overflowY: "scroll" }}>
      {
        allUsers.map((items, index) =>
          loginUserInfo._id !== items._id &&
          <div className='row m-2 px-1 py-2' onClick={() => getUser(items)} style={{ borderRadius: 6, backgroundColor: "#eff0eb" }} key={index} >
            <div className='col-md-7 d-flex'>
              <img src={`http://localhost:8000/public/${items.profile}`} className={`rounded rounded-pill  `} alt="..." width={50} height={50} />
              <div style={{ paddingTop: 6 }}>
                <h6 style={{ marginLeft: 9 }} className='mb-0'>{items.fullname}</h6>
                <p style={{ marginLeft: 9, fontSize: 12 }} className='mb-0'>{items.fullname}</p>
              </div>
            </div>
            <div className='col-md-5 d-flex justify-content-end'>
              <p style={{ fontSize: 12 }}>12:22 pm</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Conversation