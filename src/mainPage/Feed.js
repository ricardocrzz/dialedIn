import React, { useEffect, useState } from 'react'
import '../styles/Feed.css'
import InputOption from './FeedProperties/InputOption';
import Post from './FeedProperties/Post';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FeedIcon from '@mui/icons-material/Feed';
import CreateIcon from '@mui/icons-material/Create';
import { db } from './firebase'
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser)

    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            photoUrl: user?.photoURL,
            name: user.displayName,
            description: user.email,
            message: input
        })
        //reset the input
        setInput('');
    }

    return (
        <div className="feed">
            <div className="feedInputContainer">
                <div className="feedInput">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feedInputOptions">
                    <InputOption Icon={InsertPhotoIcon} title='Photo' color='#70b5f9' />
                    <InputOption Icon={SmartDisplayIcon} title='Video' color='#e7a33e' />
                    <InputOption Icon={CalendarMonthIcon} title='Event' color='#c0cbcd' />
                    <InputOption Icon={FeedIcon} title='Write Article' color='#7fc15e' />
                </div>
            </div>
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
                ))}
            </FlipMove>
        </div >
    )
}

export default Feed