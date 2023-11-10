import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../redux/action/profile.action';
import IconMenu from './IconMenu';
import ProfileDrower from '../drower/ProfileDrower';

const ChatHeader = () => {
    const userInfo = useSelector(state => state.userProfile);
    const [openDrawer, setOpenDrawer] = useState(false)

    const dispatch = useDispatch()
    const toggleDrawer = () => {
        setOpenDrawer(true)
    }
    useEffect(() => {
        dispatch(getProfile());
    }, [])

    return (
        <div className='row info-sec pt-3'>
            <div className='col-md-1'></div>
            <div className='col-md-3 d-flex justify-content-center px-2' >
                <img
                    src={`http://localhost:8000/public/${userInfo.profile.profile}`}
                    className={`rounded mx-auto d-block rounded-pill`}
                    alt="..."
                    width={50}
                    height={50}
                    onClick={() => toggleDrawer()}
                />
                <h6 id="align-info-text " className='p-2'>{userInfo.profile.fullname}</h6>
            </div>
            <IconMenu />
            <ProfileDrower open={openDrawer} setOpen={setOpenDrawer}/>
        </div>

    )
}


export default ChatHeader
