import React, { Component, Fragment } from 'react';
import Banner from './Banner';

const url = "http://localhost:5000/artist";

class Home extends Component {
    constructor() {
        super()

        this.state = {
            artist: ""
        }
    }
    render() {
        return (
            <Fragment>
                <Banner />
            </Fragment>
        )
    }

    componentDidMount() {
        fetch(url, { method: "GET" })
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    artist: data
                })
            })
    }
}

export default Home;