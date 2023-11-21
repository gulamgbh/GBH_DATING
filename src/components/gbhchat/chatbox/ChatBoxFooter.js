import React, { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { CiFaceSmile } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import MenuWithItemsBox from '../drower/MenuWithItemsBox';
import { TiDocument } from "react-icons/ti";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
import { EmojiSelector } from 'react-emoji-selectors';
import { Menu, MenuItem, ListItemIcon } from '@mui/material';


const ChatBoxFooter = ({ sendText, setTextMessage, textMessage }) => {
    const [showSelector, setShowSelector] = useState(true);
    const [output, setOutput] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onFileGet = (e) => {
        console.log('hhiii');
    }
    return (
        <div className='row' style={{ backgroundColor: '#eff0eb' }}>
            <div
                className='col-md-11 d-flex '
                style={{
                    alignItems: 'center',
                    height: 45,
                    width: '99%',
                    padding: '0 20px',
                    margin: 5
                }}
            >
                <CiFaceSmile size={25} style={{ margin: 5 }} onClick={() => setShowSelector(true)} />
                {showSelector &&
                    <EmojiSelector
                        onClose={() => setShowSelector(false)}
                        output={setOutput}
                    />
                }
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
                        onChange={(e) => setTextMessage(e.target.value)}
                        onKeyPress={(e) => sendText(e)}
                        value={textMessage}
                    />
                </div>
                <CiMicrophoneOn size={25} style={{ margin: 5 }} />
                <Menu
                    anchorEl={anchorEl}
                    id="media-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            top: '509px',
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                >
                    <MenuItem onClick={handleClose} >
                        {/* <label htmlFor='docs'>
                            <ListItemIcon>
                                <TiDocument size={22} style={{ color: '#bf616a' }} />
                            </ListItemIcon>
                            Documents
                        </label> */}
                        <input type='file' onChange={onFileGet} id='docs'  />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <CiImageOn size={22} style={{ color: '#d08770' }} />
                        </ListItemIcon>
                        Photos & Videos
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default ChatBoxFooter