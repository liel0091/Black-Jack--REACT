import React, {Component} from 'react'; 
import {Card} from 'react-bootstrap';   


class DeckOfCards extends Component {

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.scroll.scrollIntoView({ behavior: 'smooth' });
  }

  render(){ 
    const myArray = [
            <i className="fas fa-lg fa-heart" ></i>, 
            <i className="fas fa-lg fa-spider"></i>,
            <i className="fas fa-adjust"></i>,
            <i className="far fa-lg fa-gem"></i>
          ]; 

    const sign = myArray[(Math.random() * myArray.length) | 0];

    return(
      <Card className="shadow m-4" style={{ width: '18rem', height:'30rem' }}> 
        <Card.Body ref={scroll => { this.scroll = scroll }}>
          <Card.Title className="m-2 d-flex flex-row-reverse">{this.props.card}</Card.Title>
          <Card.Text className="d-flex justify-content-center align-items-center" style={{height:'20rem' }}> 
            {sign} 
          </Card.Text> 
        </Card.Body>
      </Card>
    )
  }
}

export default DeckOfCards;