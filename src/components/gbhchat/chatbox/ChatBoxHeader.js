import React from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { FaSearch } from "react-icons/fa";
const ChatBoxHeader = (props) => {
    return (
        <div className='row' style={{ backgroundColor: '#eff0eb', padding:'22px 0px',}}>
            <div className='col-md-1 d-flex justify-content-start'>
                <img src={`	http://localhost:8000/public/${props.pic}`} className={`rounded rounded-pill  `} alt="..." width={50} height={50} />
            </div>
            <div className='col-md-2 pt-2'>
                <h6  className='mb-0 text-capitalize'>{props.name}</h6>
                <p style={{ fontSize: 12 }} className='mb-0'>Online</p>
            </div>
            <div className='col-md-9 d-flex justify-content-end pt-2'>
                <FiMoreVertical size={25} style={{margin:"0px 12px"}}/>
                <FaSearch size={25} style={{margin:"0px 12px"}}/>
            </div>
        </div>
    )
}

export default ChatBoxHeader