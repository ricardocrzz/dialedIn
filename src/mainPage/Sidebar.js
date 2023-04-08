import React from 'react'
import '../styles/Sidebar.css'
import { Avatar } from '@mui/material'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="upperSide">
                <div className="upperFirst">
                    <Avatar className='picture' src='https://media.licdn.com/dms/image/C4E03AQE3tBYL0HZRVg/profile-displayphoto-shrink_800_800/0/1654298167497?e=1685577600&v=beta&t=Y94KbeVvJMCPgkW38E8kmUwI4cgtWn5akljbaOdn-NI' alt='' />
                    <img className='banner' src='https://media.licdn.com/dms/image/C4D12AQHMPBvE3avWzg/article-inline_image-shrink_1000_1488/0/1616872522462?e=1684972800&v=beta&t=6JApKuGeaiLZ0dZytB4qFSrf6Alo2GDJOJTiV7Q1-ns' alt='' />
                    <h1 className='name'>Ricardo Cruz</h1>
                    <h3 className='bio'>Computer Science Student at University of Calgary</h3>
                </div>
                <div className="upperSecond">
                    <div className="profileViews">
                        <div className="variableContainer">
                            <h4 className='variableName'>Who's viewed your profile</h4>
                            <h4 className='variableValue'>32</h4>
                        </div>
                    </div>
                    <div className="connections">
                        <div className="connectionsContainer">
                            <div className="variableContainer">
                                <h4 className='variableName'>Connections</h4>
                                <h4 className='variableValue'>227</h4>
                            </div>
                            <h4 className='growNetwork'>Grow your network</h4>
                        </div>
                    </div>
                </div>
                <div className="upperThird">
                    <h4 className='accessExclusive'>Access exclusive tools & insights</h4>
                    <div className="premiumContainer">
                        <SubscriptionsIcon className='premium' />
                        <h4 className='getHired'>Get Hired Faster, Try Premium Free</h4>
                    </div>
                </div>
                <div className="upperFourth">
                    <BookmarkIcon className='bookmark' />
                    <h4 className='myItems'>My items</h4>
                </div>
            </div>
            <div className="lowerSide">
                <div className="dropdown">
                    <h4 className="dropdownOption">Groups</h4>
                    <div className="eventsContainer">
                        <h4 className="dropdownOption">Events</h4>
                        <AddIcon className='plus' />
                    </div>
                    <div className="lastDropdownOption">
                        <h4 className="dropdownOption">Followed Hashtags</h4>
                    </div>
                </div>
                <div className="discoverMore">
                    <h4 className="discoverMoreText">Discover more</h4>
                </div>
            </div>
        </div>
    )
}

export default Sidebar