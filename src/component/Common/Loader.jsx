import { CircularProgress } from '@mui/material'
import React from 'react'

function Loader() {
  return (
    <div className='h-screen  w-full flex justify-center items-center text-[white]'> <CircularProgress style={{height:"70px",width:"70px",color:"#7f08fd"}} />
</div>
  )
}

export default Loader