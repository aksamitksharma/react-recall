import {useCallback, useState} from 'react' 

const DemoCallback=()=>{
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount1=useCallback(()=>{
    console.log("Count 1")
    for (let i = 0; i < 1000000; i++) {
      setCount1(count1+1)      
    }
  })

  // const handleCount1=()=>{
  //   console.log("Count 1")
  //   for (let i = 0; i < 1000000; i++) {
  //     setCount1(count1+1)      
  //   } 
  // }

  const handleCount2=()=>{
    console.log("Count 2")
      setCount2(count2+1)      
  }

  return(
    <>
      <h2>
        Callback demo
        <button onClick={handleCount1}>{count1}</button>
        <button onClick={handleCount2}>{count2}</button>

      </h2>
    </>
  )
}

export default DemoCallback