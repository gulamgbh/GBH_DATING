import React from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BsShield } from 'react-icons/bs';
import { BiGift } from 'react-icons/bi';
import { FiMoreVertical } from 'react-icons/fi';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuWithItemsBox from '../drower/MenuWithItemsBox'
const IconMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div div className='col-md-8 d-flex justify-content-end '>
            <div id="align-info-text" style={{ padding: "0px 5px" }}><AiOutlineFileSearch size={30} /></div>
            {/* <div id="align-info-text"><BsShield size={30} /></div> */}
            <div id="align-info-text" style={{ padding: "0px 5px" }}><BiGift size={30} /></div>
            <div id="align-info-text" style={{ padding: "0px 5px" }} onClick={handleClick}><FiMoreVertical size={30} /></div>
            <MenuWithItemsBox
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                menuItems1={'Profile'}
                menuItems2={'My account'}
                transHori={'right'}
                transVer={'top'}
            />
        </div>

    )
}

export default IconMenu