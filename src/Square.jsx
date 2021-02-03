import React from "react";

function Square(props) {
    return (
      <button className= {props.value === 'X' ? 'squareX' : 'squareO'}onClick={props.onClick}>
      {props.value}
        
      </button>
    );
  }

  export default Square;