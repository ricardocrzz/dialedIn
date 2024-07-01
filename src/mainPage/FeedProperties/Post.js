import React, { forwardRef } from 'react'
import '../../styles/Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import RepostIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="postHeader">
                <Avatar src={photoUrl} alt=''>{name[0].toUpperCase}</Avatar>
                <div className="postInfo">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="postBody">
                <p>{message}</p>
            </div>
            <div className="postButtons">
                <InputOption Icon={ThumbUpIcon} title='Like' color='grey' />
                <InputOption Icon={CommentIcon} title='Comment' color='grey' />
                <InputOption Icon={RepostIcon} title='Share' color='grey' />
                <InputOption Icon={SendIcon} title='Send' color='grey' />

            </div>
        </div>
    )
})
export default Post