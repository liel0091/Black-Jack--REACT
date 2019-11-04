import React, {Component} from 'react';  
import { Spring } from 'react-spring/renderprops';
import { Card } from 'react-bootstrap';   

 
class DeckOfCards extends Component {
 
  render(){ 
    const myArray = [
            <i className="fas fa-lg fa-heart" ></i>, 
            <i className="fas fa-lg fa-spider"></i>,
            <i className="fas fa-adjust"></i>,
            <i className="far fa-lg fa-gem"></i>
          ]; 

    const sign = myArray[(Math.random() * myArray.length) | 0];

    return(

      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0}} 
      >
        { props => (
          <div style={props}>
            <Card className="shadow m-4" style={deckStyle}> 
              <Card.Body>
                <Card.Title className="m-2 d-flex flex-row-reverse">{this.props.card}</Card.Title>
                <Card.Text className="d-flex justify-content-center align-items-center" style={{height:'20rem' }}> 
                  {sign} 
                </Card.Text> 
              </Card.Body>
            </Card>
          </div>
        )}
      </Spring>
      
    )
  }
}

const deckStyle = {
  width: '18rem',
  height:'30rem' 
}

export default DeckOfCards; 