import { useEffect, useState } from "react";


const DemoFunCount=()=>{
 const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("Component did mount");
  },[])

  useEffect(()=>{
    console.log("Component did update")
  })

  useEffect(()=>{
    return()=>{
      console.log("Component will unmount")
    }
  })

  return(
    <>
      <h2>Component hooks : {count}</h2>
      <button onClick={()=>setCount(count+1)}>Count</button>
    </>
    )
}

export default DemoFunCount