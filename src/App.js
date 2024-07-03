import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './mainPage/firebase';
import './App.css';
import Feed from './mainPage/Feed';
import Header from './mainPage/Header';
import Sidebar from './mainPage/Sidebar';
import Widgets from './mainPage/Widgets';
import Footer from './mainPage/Footer';
import Login from './mainPage/Login';
import { useEffect } from 'react';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      }
      else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="appBody">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
      <div className='appFooter'><Footer /></div>
    </div >
  );
}

export default App;