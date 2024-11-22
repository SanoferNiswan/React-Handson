import { useState } from "react"

const Unique = () => {
    const [array,setArray]=useState(["sano","Adithi","Vaan"])

    const handleAdd=()=>{
        let inp=prompt("enter name to add");
        setArray([...array,inp]);
    }

    var arr=array.map((x,ind)=>(
        <li key={ind}>{x}</li>
    ))


  return (
    <div>
      <ul>{arr}</ul>
      <button onClick={handleAdd}>Add names</button>
    </div>
  )
}

export default Unique
