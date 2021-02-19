import React from 'react';
import { useHistory } from 'react-router-dom';

/*
function About() {
    return <h1>About</h1>;
}
export default About;
*/

const About = () => {
    const history = useHistory();
    const handleClick = () => history.push('/home');
    
    return (
        <div className = "backContainer">
            <div>
                <h1>About</h1>
            </div>
            <div>   
                <button className = "backButton" type="button" onClick={handleClick}>
                    Back
                </button>
            </div>
        </div>
    
    );
  };
  
  export default About;