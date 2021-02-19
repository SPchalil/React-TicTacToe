import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    return <h1 className = "homePage">Home</h1>;
}
export default Home;

/*
const Home = () => {
    const history = useHistory();
    const handleClick = () => history.push('/');
    
    
      return (
        <h1 onClick={handleClick}>Home</h1>
    
      ) ;
  };
  */
  //export default Home;