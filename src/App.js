import React, { Component, Fragment } from 'react';   
import {Button, Row} from 'react-bootstrap';    
import Header from './components/Header'; 
import Counter from './components/Counter'; 
import HighScoreAccordion from './components/HighScoreAccordion'; 
import Footer from './components/Footer'; 
import ErrorBondary from './components/ErrorBondary';
import Instruction from './components/Instruction';

class App extends Component { 
  constructor(props) {
    super(props);
 
    this.state = {
      mount: true,
      show: false,
      gameOver: false,
      isLoggedIn: false
    }

    this.exRef = React.createRef(); 
    this.mountCounter = () => this.setState({mount:true});
    this.unmountCounter = () => this.setState({mount:false});  
  }

  componentDidMount() {
    this.exRef.current.focus(); 
  }

  handelLoggIn = () => { 
    this.state.isLoggedIn ? 
      this.setState({isLoggedIn: false}) : 
      this.setState({isLoggedIn: true}); 

  }
   
  render() {   
    const loggin = 'Logged In';
    const loggout = 'Logged Out';

    return(
      <Fragment>   
        <Header name={this.state.isLoggedIn ? 'John' : 'User'} user='the player'>
            <small>If you dare...</small>   
        </Header>  

        <Row className="justify-content-center">
          <Button variant={this.state.isLoggedIn ? "primary" : "secondary"} className="m-2" onClick={this.handelLoggIn}>
            {this.state.isLoggedIn ? loggin : loggout} 
          </Button>
        </Row> 

        <HighScoreAccordion/>  

        <Row className="justify-content-center">
          <Button variant="warning" className="m-2" ref={this.exRef} onClick={this.mountCounter} disable={this.state.mount}>Start Game</Button>
          <Button variant="danger" className="m-2" onClick={this.unmountCounter} disable={!this.state.mount}>End Game</Button>
        </Row>  

        <Row className="justify-content-center">  
          <ErrorBondary>
             {this.state.mount ? <Counter/> : null } 
          </ErrorBondary> 
        </Row> 
           
        <Instruction/> 

        <Footer/>

      </Fragment> 
    ); 
  } 
}

export default App;
 