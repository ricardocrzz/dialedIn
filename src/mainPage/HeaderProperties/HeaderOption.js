import { Avatar } from '@mui/material'
import React from 'react'
import '../../styles/HeaderOption.css'

function HeaderOption({ Icon, title, avatar }) {
    return (
        <div className='headerOption'>
            {Icon && <Icon className='headerOptionIcon' />}
            {avatar && <Avatar className='headerOptionIcon' src={avatar} alt='' />}
            <p className='headerOptionTitle'>{title}</p>
        </div >
    )
}

export default HeaderOption