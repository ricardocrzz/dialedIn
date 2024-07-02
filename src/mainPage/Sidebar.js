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
                <img src="https://imageio.forbes.com/blogs-images/josephliu/files/2019/06/3-martin-adams-764547-unsplash-1200x300.jpeg?height=177&width=711&fit=bounds" alt="" />
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