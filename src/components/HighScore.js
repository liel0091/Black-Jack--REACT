import React, {Component} from 'react';
import axios from 'axios';

class HighScore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scores: [],
            errMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => { 
                this.setState({scores: res.data})
            })
            .catch(err => { 
                this.setState({errMsg: 'An error has occured!' + err})
            })
    }

    render() { 
        const {scores, errMsg} = this.state; 

        return (
            <ul className="list-group list-group-flush"> 
                {
                    scores.length ? 
                        scores.map( user => <li key={user.id} className="list-group-item d-flex"><span className="col-4">{user.name}</span><span className="col-4">{user.username}</span><span className="col-4">{user.email}</span></li>) : 
                        <li>There are no users yet</li> 
                }
                { errMsg ? <li className="list-group-item text-danger">{errMsg}</li> : null}
            </ul> 
        )
    }
}

export default HighScore;
