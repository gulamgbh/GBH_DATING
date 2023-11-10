import React from 'react'
import { NavLink } from 'react-bootstrap'

const ChatMenu = () => {
    return (
        <div className="row">
            <ul className="navbar-nav flex-row pl-4 d-flex justify-content-around bg-dark chatbot_nav">
                <li className="nav-item">
                    <NavLink className="nav-link " to="/chetbot/matches">Matches</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/chetbot/messages">Messages</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default ChatMenu