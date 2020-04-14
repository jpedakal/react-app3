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
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Artist Forms
                   </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-group" value={this.state.name} onChange={this.handleChangeName}></input>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Cover:</label>
                                <input type="text" className="form-group" value={this.state.cover} onChange={this.handleChangeCover}></input>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Bio:</label>
                                <input type="text" className="form-group" value={this.state.bio} onChange={this.handleChangeBio}></input>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Genre:</label>
                                <input type="text" className="form-group" value={this.state.genre} onChange={this.handleChangeGenre}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FormsComponent;