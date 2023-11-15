import { Menu, MenuItem, styled } from '@mui/material'
import React from 'react'
import { CiImageOn } from "react-icons/ci";

const MenuWithItemsBox = (props) => {
    return (
        <Menu
            id="plus-menu"
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={props.onClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',

            }}
            transformOrigin={{
                horizontal: props.transHori,
                vertical: props.transVer,
            }}
        >
            <MenuItem onClick={props.onClose} style={{ fontSize: 16 }}>
                {props.icon1} {props.menuItems1}
            </MenuItem>
            <MenuItem onClick={props.onClose} style={{ fontSize: 16 }}>
                {props.icon2} {props.menuItems2}
            </MenuItem>
            <MenuItem onClick={props.onClose} style={{ fontSize: 16 }}>
                {props.icon3} {props.menuItems3}
            </MenuItem>
            <MenuItem onClick={props.onClose} style={{ fontSize: 16 }}>
                {props.icon4} {props.menuItems4}
            </MenuItem>
        </Menu>
    )
}

export default MenuWithItemsBox