import React from 'react'
import { CiImageOn } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { CiFaceSmile } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import MenuWithItemsBox from '../drower/MenuWithItemsBox';
import { TiDocument } from "react-icons/ti";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";

const ChatBoxFooter = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='row' style={{ backgroundColor: '#eff0eb' }}>
            <div
                className='col-md-11 d-flex '
                style={{
                    alignItems: 'center',
                    height: 45,
                    width: '100%',
                    padding: '0 20px',
                    margin: 5
                }}
            >
                <CiFaceSmile size={25} style={{ margin: 5 }} />
                <GoPlus size={25} style={{ margin: 5 }} onClick={handleClick} />
                <div style={{ backgroundColor: 'white', borderRadius: 18, width: 'calc(94%-100px)' }}>
                    <input
                        placeholder='Type a message'
                        style={{
                            width: 910,
                            height: 40,
                            borderRadius: 10,
                            padding: '0 4px'
                        }}
                    />
                </div>
                <CiMicrophoneOn size={25} style={{ margin: 5 }} />
                <MenuWithItemsBox
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    transHori={'left'}
                    icon1={<TiDocument size={22} style={{color:'#bf616a'}}/>}
                    icon2={<CiImageOn size={22} style={{color:'#d08770'}}/>}
                    icon3={<IoCameraOutline size={22} style={{color:'#ebcb8b'}}/>}
                    icon4={<MdOutlineContactMail size={22} style={{color:'#a3be8c'}}/>}
                    menuItems1={'Documents'}
                    menuItems2={'Photos & Videos'}
                    menuItems3={'Camera'}
                    menuItems4={'Contacts'}
                />
            </div>
        </div>
    )
}

export default ChatBoxFooter