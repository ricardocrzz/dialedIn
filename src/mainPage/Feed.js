import React from 'react'
import '../styles/Feed.css'
import { Avatar } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FeedIcon from '@mui/icons-material/Feed';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Feed() {
    return (
        <div className='feed'>
            <div className="postFeed">
                <div className="postPictureInputContainer">
                    <Avatar className='pictureFeed' src='https://media.licdn.com/dms/image/C4E03AQE3tBYL0HZRVg/profile-displayphoto-shrink_800_800/0/1654298167497?e=1685577600&v=beta&t=Y94KbeVvJMCPgkW38E8kmUwI4cgtWn5akljbaOdn-NI' alt='' />
                    <div className="postInputContainer">
                        <input className="postInput" type="text" placeholder='Start a post' />
                    </div>
                </div>
                <div className="postMenu">
                    <div className="postMenuOption">
                        <InsertPhotoIcon className="photoIcon" />
                        <h2 className='postMenuTitle'>Photo</h2>
                    </div>
                    <div className="postMenuOption">
                        <SmartDisplayIcon className="videoIcon" />
                        <h2 className='postMenuTitle'>Video</h2>
                    </div>
                    <div className="postMenuOption">
                        <CalendarMonthIcon className="calendarIcon" />
                        <h2 className='postMenuTitle'>Event</h2>
                    </div>
                    <div className="postMenuOption">
                        <FeedIcon className="feedIcon" />
                        <h2 className='postMenuTitle'>Write Icon</h2>
                    </div>
                </div>
            </div>
            <div className="individualPost">
                <div className="individualPostContainer">
                    <Avatar className='individualPostPicture' src='https://media.licdn.com/dms/image/C5603AQGAkPZHEnP5Cg/profile-displayphoto-shrink_400_400/0/1619623731560?e=1686182400&v=beta&t=DWRTdamgCmC7eFpqqmfFaVVMPGPOLi9AKN77QI_C3C8' alt='' />
                    {/* <Avatar className='individualPostPicture' src='https://media.licdn.com/dms/image/D5603AQFy2kwHmbIHuQ/profile-displayphoto-shrink_400_400/0/1677196420666?e=1686182400&v=beta&t=SgVn5ocbkN3JmbN8eah_YbqXZiub_pG3Uq0uWcH4UvI' alt='' />*/}
                    <div className="individualPostInfo">
                        <div className="firstRow">
                            <h1 className="individualPostName">Lekan Ajibulu</h1>
                            <h1 className="connectionStatus"> · 1st</h1>
                            <MoreHorizIcon className="threeDots" />
                        </div>
                        <div className="individualPostNameBioContainer" >
                            <h1 className="individualPostNameBio">Honours Exercise and Health Psychology Student at the Univ...</h1>
                            <h1 className="individualPostNameBio">3w · Public</h1>
                        </div>
                    </div>
                </div>
                <h3 className='individualPostBio'>
                    Last week we officially launched our NELY 2023 programming with the YMCA’s - YMAP program (Youth Achievement Program) and Trellis’ After school youth program at their Bowness Location!
                </h3>
            </div>

        </div >
    )
}

export default Feed