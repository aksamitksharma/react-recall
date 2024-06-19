import { useState } from 'react'
import DemoCallback from '../Callback/DemoCallback'

const DemoUseState = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(3)
  const handleCount = () => {
    setCount(count + 1);
  }

  const handleClick=()=>{
    setCount2(prev=>prev+1)
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={handleCount}>Count</button>
      <div>
        {count2}
        <button onClick={handleClick}>Count 2</button>
      </div>
      <DemoCallback />

    </>
  )
}

export default DemoUseState