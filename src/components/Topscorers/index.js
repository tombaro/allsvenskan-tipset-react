import React, {Component} from 'react';
import {getScorersStanding} from '../../services/standings';

class Topscorers extends Component {
    constructor() {
        super();
        this.state = {
            standings: [],
        }
    }
    componentDidMount() {
        // return 
        getScorersStanding()
            .then((data) => {
                const current = JSON.parse(data);
                this.setState({standings: current.result.item});
            })
    }

    render() {
        return (
            <ul>
                {this.state.standings.map((row, index) => (
                    <li key={index}>
                        {row.position} {row.name} {row.goals}
                    </li>
                ))}
            </ul>
        );
    }
}

export default Topscorers;