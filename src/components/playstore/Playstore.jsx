import React from 'react';
import { FcCheckmark } from "react-icons/fc";
import phoneimage from "../../assets/phoneimage.jpg";
import applogo from "../../assets/applogo.png";
import "./playstore.css"; 

const Playstore = () => {
    return (
        <div className='playstore-div'>
            <div>
                <p className='heading'>Download Trophy Nig. App</p>
                <p className='sub-heading'>And never miss out any update</p>
                <div className='feature'>
                    <FcCheckmark className='checkmark-icon' />
                    <p>
                        Get to know about newly posted Properties as soon as they are posted
                    </p>
                </div>
                <div className='feature'>
                    <FcCheckmark className='checkmark-icon' />
                    <p>
                        Manage your Properties with ease and instant alerts about Properties
                    </p>
                </div>
                <div>
                    <img src={applogo} alt="logos" className='logo' />
                </div>
            </div>
            <div>
                <img src={phoneimage} alt="phone" className='phone' />
            </div>
        </div>
    );
};

export default Playstore;
