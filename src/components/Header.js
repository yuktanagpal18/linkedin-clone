import React from 'react'
import '../style/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import {logout} from '../features/userSlice'
import {auth} from "../firebase"
import { useDispatch } from 'react-redux';

const Header = () => {

    const dispatch = useDispatch();

    const logoutHandler= async ()=>{
        await auth.signOut()
        dispatch(logout());
    }

  return (
    <div className='header'>
      <div className='header_left'>
        <img
            src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
            alt='linkedin-logo'
        />
        <div className='header_search'>
            <SearchIcon/>
            <input type='text' placeholder='search'/>
        </div>
      </div>
      <div className='header_right'>
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption avatar={true} title='Me' onClick={logoutHandler}/>
      </div>
    </div>
  )
}

export default Header
