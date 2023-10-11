import React from 'react';
import logo from './images/instagram-new.webp';
import { AiOutlineHeart } from "react-icons/ai";
import { LuSend } from "react-icons/lu";

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='navIcons'>
                <img src={logo} alt='' className='logo' />
                <AiOutlineHeart className='navHeart'/>
                <LuSend className='navSend'/>
            </div>
        </div>
    )
}

export default Navbar;