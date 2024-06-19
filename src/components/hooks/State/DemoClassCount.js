import { Component } from 'react'

class DemoClassCount extends Component{
  constructor(){
    super()
    this.state = {
      count:0
    }
  }

  handleCount=()=>{
    this.setState({count:this.state.count+1})
  }

  render(){
    return(
      <>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleCount}>Count</button>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Count</button>
      </>
    )
  }
}

export default DemoClassCount