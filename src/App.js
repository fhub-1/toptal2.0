import React from 'react';


// eslint-disable-next-line no-undef

export default class Parent extends React.Component{
  constructor(props){
    super();
    this.state={
      value:0
    }
  }
 
execute1(){
  this.setState({
    value:this.state.value+1
  })
}

execute2(){
  this.setState({
    value:this.state.value-1
  })
}
  render(){
    return(
      <div>
        <Child1 value={this.state.value} ></Child1>
        <button onClick={this.execute1.bind(this)}>click me</button>
      

      </div>
    )
  }
}

class Child1 extends React.Component{
  
  render(){
    return(
      <div className="modify">
        <label>{this.props.value}</label>
      </div>
    )
  }
}

class Child2 extends React.Component{
  
  render(){
    return(
      <div className="modify">
        <label>{this.props.value}</label>
      </div>
    )
  }
}