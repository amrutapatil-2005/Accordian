import React, { useState } from "react";
const Ui=({curElem})=>{
  const [data,setData]=useState(false);
  const showicon=()=>{
    setData(!data);

  }
  

  return (
    <>
      <div className="accordian">
        <div className="que">
          <button onClick={showicon}>{data ? <i class="fa-solid fa-minus"></i> :<i class="fa-solid fa-plus"></i>}</button>
          <h3>{curElem.q}</h3>
          <p>{data ? curElem.ans :""}</p>
        </div>

      </div>
    </>
  )
}
export default Ui;
