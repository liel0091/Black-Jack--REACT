import React, {useState} from 'react'; 
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal' 
import {Row, Button} from 'react-bootstrap'; 

function Instruction() { 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ReactDOM.createPortal (
        <>
            <Row className="justify-content-center">
                <Button variant="primary" className="m-2" onClick={handleShow}>Read the rules!</Button>
            </Row> 
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>"THE RULES OF THE GAME"</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    "Blackjack also called 21 is a fun and enjoyable casino card game. The basic rules of blackjack are quite easy to learn.As the name 21 implies, the object of the game is to come as close to 21 points as possible with your cards -- without going over -- and having a higher total than the dealer.The game begins with the player placing a bet, then receiving two cards face up. The dealer also receives two cards.The player wins the amount that was bet if the total value of his cards is closer to 21 than the dealer's cards. Another way to win is if the dealer goes over 21, while the player does not.The player loses the amount bet if his total goes over 21."
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button> 
                </Modal.Footer>
            </Modal> 
        </>,
        document.getElementById('instruction-root')
    );
  }

  export default Instruction;
