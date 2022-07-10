import React, { Component } from 'react'
import UpdatedComp from './HigherOrder'


export class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           Count: 0,
        }
      }
      IncrementCount=()=>{
         this.setState({ Count: this.state.Count + 1 }); 
      };
  render() {
    const { Count } = this.state;
    return (
      <div>
        <button onMouseEnter={this.IncrementCount}>
         The user incremented to { Count } 
        </button>
      </div>
    )
  }
}

export default UpdatedComp(Counter);