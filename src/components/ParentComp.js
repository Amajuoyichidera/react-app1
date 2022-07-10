import React, { Component } from 'react'
import PureComp  from './PureComp';
import RegComp from './RegComp';
class ParentComp extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name: "cruz"
     }
   }
   componentDidMount() {
    setInterval(() => {
        this.setState({
          name: "cruz",  
        })
    }, 1000);
   }     
  render() {
    return (
      <div>i'm the ParentComp
        <RegComp name={"this.state.name"} />
        <PureComp name={"this.state.name"} />
      </div>
    )
  }
}

export default ParentComp