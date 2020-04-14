import React, { Component, Fragment } from 'react';
import Header from './Header';

class FormsComponent extends Component {
    constructor() {
        super()

        this.state = {
            id: "",
            name: "",
            cover: "",
            bio: "",
            genre: ""
        }
    }
    render() {
        return (
            <Fragment>
                <Header />
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Artist Forms
                   </div>
                    <div className="panel-body">
                        <div className="form-group">

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FormsComponent;