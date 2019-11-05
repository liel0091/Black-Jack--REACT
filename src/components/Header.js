import React from 'react';  
import {Row} from 'react-bootstrap'; 

const Header = (props) => {
    const {name,user} = props; 
    
    return (
        <>    
            <Row className="justify-content-center m-4">
                <h1>Black Jack Game</h1> 
            </Row>
            <Row className="justify-content-center m-4">
                <p>Try your luck {name} a.k.a {user}!</p>  
            </Row>
            <Row className="justify-content-center m-4"> 
                {props.children}
            </Row>  
        </> 
    );
}  

export default React.memo(Header);