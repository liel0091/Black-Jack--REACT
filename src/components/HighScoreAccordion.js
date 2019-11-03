import React, {Component} from 'react'; 
import {Accordion, Card, Button} from 'react-bootstrap';   
import HighScore from './HighScore';

class HighScoreAccordion extends Component {

    render() {
        return(
            <Accordion className="mt-4 mb-5">
                <Card>
                    <Card.Header className="d-flex justify-content-center">
                        <Accordion.Toggle as={Button} variant="text" eventKey="0">
                            Click here to see previous users here ... 
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <HighScore/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card> 
            </Accordion>
        )
    } 
}

export default HighScoreAccordion;