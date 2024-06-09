import React from 'react'

const UnderConstruction = () => {
  return (
    <div className='text-slate-400 italic flex flex-col justify-center items-center py-4 gap-8'>
        <img width={300} src="/under_construction.png" alt="Under Construct" />

        <h1>Whooppss... This Pages is still in progress.</h1>
    </div>
  )
}

export default UnderConstruction