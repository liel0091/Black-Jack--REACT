import React, {Component} from 'react'; 
import { Container } from 'react-bootstrap';

class ErrorBondary extends Component{

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    } 

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        if(this.state.hasError === true){
            return (
                <Container>
                  <h1 className="d-flex justify-content-center text-danger"> An Error has occurred! </h1>  
                </Container> 
            )
        } 
        return this.props.children
    }
}

export default ErrorBondary; 