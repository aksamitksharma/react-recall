import { Component } from "react";


class DemoClassCount extends Component{

  componentDidMount(){
    console.log("Component did mount")
  }
  
  render(){
    return(
      <>
        <h2>Component did mount</h2>
      </>
    )
  }
}

export default DemoClassCount