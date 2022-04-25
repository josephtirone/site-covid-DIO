import React from 'react';

const randomColor = ()=> `5px solid rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`

function Card(props) {
    
    return (
        
        <div className='card' style={({borderLeft:randomColor()})}>
            {
                console.log(randomColor())
            }
            
            {props.text1}: {`${props.number}`.split("").reverse().join("").match(/.{1,3}/g).join(".").split("").reverse().join("")}

        </div> 
    );
}

export default Card;