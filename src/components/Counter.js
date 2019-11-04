import React, { Component } from 'react'; 
import {Button, Container, Row, Col} from 'react-bootstrap';
import DeckOfCards from './DeckOfCards'; 
 
export default class Counter extends Component{

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            card: '',
            cardCount: 0,
            playMargin: 21,
            playedCards: [],
            mount: false
        }   
    } 

    /**
     * Lifecycle Mount 
    componentWillMount() { 
        console.log('Counter Will Mount')
    }

    componentDidMount() {
        this.setState({mount: true}); 
        console.log('Counter did Mount' +  this.state.mount )
    }

    componentWillReceiveProps(nextProps) {
        console.log('Counter Will Receive Props'+ nextProps)
    }   */

    /**
     * Lifecycle Update
    shouldComponentUpdate(nextProps, nextState){ 
        if(nextState.mount === false) { 
            return false; 
        }
        return true; 
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Counter Will Update',nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Counter Did Update', prevProps, prevState)
    }*/

     /**
     * Lifecycle Unmount
    
    componentWillUnmount(){
        console.log('Counter Will Unmount')
    } */

    /**
     * Lifecycle Errorhandeling ... 
    componentDidCatch(error, info){
        console.log('componentDidCatch', error, info)
     }*/
 
    checkGameStatue() {
        if( this.state.playMargin  < 0 ){
            alert('game over')
        } 
    }

    increase () { 
        const card = Math.floor(Math.random() * 21) + 1; 

        this.setState({ card: card});
        this.setState({ playedCards: [...this.state.playedCards, card ]});
        this.setState({counter: this.state.counter +1}); 
        this.setState({cardCount: this.state.cardCount + card}); 
        
        if( (this.state.playMargin - card) < 0){  
                this.setState({playMargin: this.state.playMargin - card});     
                alert('game over')
        }else{
            this.setState({playMargin: this.state.playMargin - card}); 
        }
        
    } 

    render() {   
        const playedCardsList = this.state.playedCards.map((playedCard, index) => <p key={index}>{playedCard + ','}</p>);

        return (
            <Container >
                <Col className="d-flex m-2">
                    <h5 className="font-weight-bold">Played rounds:</h5> 
                    <p className="font-italic ml-2">{this.state.counter}</p>
                </Col>
                <Col className="d-flex m-2">
                    <h5 className="font-weight-bold">Sum of cards value:</h5> 
                    <p className="font-italic ml-2">{this.state.cardCount}</p>
                </Col>
                <Col className="d-flex m-2">
                    <h5 className="font-weight-bold">Margin left till 21:</h5> 
                    <p className="font-italic ml-2">{this.state.playMargin}</p>
                </Col> 
                <Col className="d-flex m-2">
                    <h5 className="font-weight-bold">Played Cards:</h5> 
                    <Row className="font-italic ml-2">{playedCardsList}</Row>
                </Col>
                <Col className="m-2 d-flex justify-content-center flex-wrap">
                    <Button 
                        variant="secondary" 
                        className="col-sm-12 col-md-6 mr-2 mt-2" 
                        onClick={this.increase.bind(this)}>TAKE ANOTHER CARD</Button>
                </Col> 
                <Col className="m-2 d-flex justify-content-center flex-wrap"> 
                    {this.state.playedCards.length ? <DeckOfCards card={this.state.card}/> : null }
                </Col>  
                    {this.state.playMargin === 0 ?  'game end' : null}
            </Container>
        );
    }
}