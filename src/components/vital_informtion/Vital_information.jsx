import React from 'react'

function Vital_information({data}) {
  return (
    <div className='p-3 w-80 text-center text-lg flex border justify-around items-center'>
     <div className=''>{data.label} :</div>
     <div>{data.value}</div>   
    </div>
  )
}

export default Vital_information