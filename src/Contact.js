import React from 'react';
import { useHistory } from 'react-router-dom';


const Contact = () => {
    const history = useHistory();
    const handleClick = () => history.push('/home');
    
    return (
        <div className = "backContainer">
            <div>
                <h1>Contact Us</h1>
            </div>
            <div>   
                <button className = "backButton" type="button" onClick={handleClick}>
                    Back
                </button>
            </div>
        </div>
    
    );
  };
export default Contact;