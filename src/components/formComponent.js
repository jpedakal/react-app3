import React, { Component, Fragment } from 'react';
import Header from './Header';

class FormsComponent extends Component {
    constructor() {
        super()

        this.state = {
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
                           <label>Name</label>
                           <input type="text" className="form-group" value={this.state.name}></input>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FormsComponent;