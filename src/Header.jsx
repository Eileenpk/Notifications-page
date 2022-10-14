import { useEffect, useReducer, useState } from 'react'
import data from './data'
export default function Header ({markAllAsUnread, unread}) {
    
    return (<header>
        <div className='header--text_wapper'>
            <h1>Notifications </h1>
            <div className="header--notifications">{unread}</div>
        </div>
        
        <button className='header--btn' onClick={markAllAsUnread} >{unread ? 'Mark all as read' : ''}</button>
    </header>
)}