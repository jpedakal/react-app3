import React, { Component } from 'react';
import Header from './Header';
import Axios from 'axios';

const url = "http://localhost:5000/artist"

class Artist extends Component {
    constructor(props) {

        super(props)

        this.state = {
            details: ""
        }
    }
    
    render() {
        var mydata = this.state.details;
        return (
            <div>
                <Header />
                <div className="artist_bio">
                    <h3>{mydata.name}</h3>
                    <h3>{mydata.genre}</h3>
                    <p>{mydata.bio}</p>
                </div>
            </div>
        )
    }

    componentDidMount() {
        Axios.get(`${url}/${this.props.match.params.id}`)
            .then((response) => { this.setState({ details: response.data }) })
    }
}

export default Artist;