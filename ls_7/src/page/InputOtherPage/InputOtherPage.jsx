import React from 'react'
import { useParams } from 'react-router-dom'

const InputOtherPage = () => {
    const param = useParams();
  return (
    <div>
        <p>{param.name}</p>
        <p>{param.f_name}</p>
    </div>
  )
}

export default InputOtherPage