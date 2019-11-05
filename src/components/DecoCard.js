import React from 'react';  
import {useSpring, animated} from 'react-spring';  

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`  

function DeckOfCards() { 
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const number = Math.floor(Math.random() * Math.floor(21))
 
  return (
    <animated.div
      className="deco-cards"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans)}}
      >
        <div> 
            <span className="m-2 d-flex flex-row-reverse">{number}</span>
            <span className="d-flex justify-content-center align-items-center" style={{height:'10rem' }}> 
                <i className="fas fa-lg fa-heart" ></i>
            </span>  
        </div> 
    </animated.div> 
  )
} 

export default DeckOfCards; 
