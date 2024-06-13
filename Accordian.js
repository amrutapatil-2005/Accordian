import React from 'react';
import { data }  from "../Component/Datas";
import Ui from './Ui';

const Accordian=()=>{
  console.log(data);
  return (
    <>
    {
      data.map((curElem,index)=>{
        return <Ui curElem={curElem}/>

      })
    }

    </>
  )
}
export default Accordian;