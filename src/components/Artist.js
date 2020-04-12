import React, { Component } from 'react';
import Header from './Header';
import Axios from 'axios';

const url= ""

class Artist extends Component {
  constructor(){
      super()

      this.state={
          details: ""
      }
  }
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }

    componentDidMount(){
        
    }
}

export default Artist;