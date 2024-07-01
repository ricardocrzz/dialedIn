import { Avatar } from '@mui/material'
import React from 'react'
import '../../styles/HeaderOption.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function HeaderOption({ Icon, title, avatar, onClick }) {
    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOptionIcon' />}
            {avatar && <Avatar className='headerOptionIcon' src={user && user.photoURL} alt=''>{user?.email[0].toUpperCase()}</Avatar>}
            <p className='headerOptionTitle'>{title}</p>
        </div >
    )
}

export default HeaderOption