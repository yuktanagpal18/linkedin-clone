import React from 'react';
import Header from './components/Header';
import Login from'./components/Login';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import './App.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase";
import Widgets from './components/Widgets'
import {selectUser,login,logout} from './features/userSlice'

function App() {
  const userState = useSelector(selectUser);
  const { user } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    //eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed/>
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
