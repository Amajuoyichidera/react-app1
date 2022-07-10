import React, { Component } from 'react'
import UpdatedComp from './HigherOrder';

export class click extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Count: 0,
      }
    }
    UpdateClick=()=>{
       this.setState({Count: this.state.Count + 1}); 
    };

  render() {
    const { Count } = this.state;
    return (
      <div>
        <button onClick={this.UpdateClick}>
            {this.props.name}clicked {Count} times
        </button>
      </div>
    )
  }
}

export default UpdatedComp (click);