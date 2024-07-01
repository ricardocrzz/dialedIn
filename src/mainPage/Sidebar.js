import React from 'react'
import '../styles/Sidebar.css'
import { Avatar } from '@mui/material'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebarRecentItem">
            <span className="sidebarHash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebarTop">
                <img src="https://media.licdn.com/dms/image/C4D12AQHMPBvE3avWzg/article-inline_image-shrink_1000_1488/0/1616872522462?e=1684972800&v=beta&t=6JApKuGeaiLZ0dZytB4qFSrf6Alo2GDJOJTiV7Q1-ns" alt="" />
                <Avatar src={user?.photoURL} className='sidebarAvatar'>
                    {user.email[0].toUpperCase()}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebarStats">
                <div className="sidebarStat">
                    <p>Who viewed you</p>
                    <p className="sidebarStatNumber">1,234</p>
                </div>
                <div className="sidebarStat">
                    <p>Views on post</p>
                    <p className="sidebarStatNumber">845</p>
                </div>
            </div>
            <div className="sidebarBottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('softwaredesign')}
                {recentItem('developer')}
            </div>
        </div>

    );
}

export default Sidebar