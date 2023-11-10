import { Drawer } from '@mui/material'
import { green } from '@mui/material/colors';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const drawerStyle = {
  top: 90,
  width: "24%",
  height: "86%",
  left: 15
}

const ProfileDrower = ({ open, setOpen }) => {
  const userInfo = useSelector(state => state.userProfile);

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
    >
      <div className='row pt-5' style={{ backgroundColor: "#6ecff5", paddingBottom: "38px" }}>
        <div className='col-md-1 px-4'>
          <BiArrowBack size={24} onClick={() => setOpen(false)} />
        </div>
        <div className='col-md-4 pl-2'>
          <h5>Profile</h5>
        </div>
      </div>
      <div className='row py-3'>
        <div className='col-md-12'>
          <img
            src={`http://localhost:8000/public/${userInfo.profile.profile}`}
            className={`rounded mx-auto d-block rounded-pill`}
            alt="..."
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className='row py-2' style={{ backgroundColor: '#eceff4' }}>
        <div className='col-md-12 pl-5' style={{paddingLeft:"40px"}}>
          <h6 style={{ color: "#6ecff5" }}>Your name</h6>
          <div className='d-flex '>
            <h6 >{userInfo.profile.fullname}</h6>
            <AiOutlineEdit size={20} className='mx-2'/>
          </div>
        </div>
      </div>
    </Drawer>
  )
}

export default ProfileDrower