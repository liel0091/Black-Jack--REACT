import React, {PureComponent} from 'react';   
import {Row, Container} from 'react-bootstrap';  
import ReactDOM from 'react-dom';

class Footer extends PureComponent {
    render() {  
        return ReactDOM.createPortal (  
            <Row id="footer" className="mt-4 bg-dark">
                <Container className="p-4"> 
                    <span className="text-light"> OBS! This site does not take any responsability for any game addition.</span>
                </Container>
            </Row>,
            document.getElementById('footer-root') 
        )
    }
}

export default Footer;
 


