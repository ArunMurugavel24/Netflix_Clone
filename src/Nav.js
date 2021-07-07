import React, { useEffect, useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import './Nav.css';
import { useHistory } from 'react-router-dom';

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && `nav_black`}`}>
      <div className='nav_contents'>
        <img
          className='nav_logo' onClick={() => history.push("/")}
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
        />
        <img
          className='nav_avatar'
          onClick={() => history.push('./profile')}
          src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
          alt=''
        />
      </div>
    </div>
  );
}

export default Nav;
