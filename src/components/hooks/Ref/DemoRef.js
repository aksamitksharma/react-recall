import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

const DemoRef=()=>{

  const inputEl = useRef();

  useEffect(()=>{
    inputEl.current.focus()
  })

  return(
    <>
    <h2>Ref</h2>
    <input type="text" ref={inputEl}/>
    </>
  )
}

export default DemoRef