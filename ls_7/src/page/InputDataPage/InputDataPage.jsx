import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const InputDataPage = () => {

    const navigate = useNavigate()
    const [obj,set_obj] = useState({
        f_name:'',
        name:'',
    })

    const on_change=(e)=>{
        const {name,value}=e.target;
        set_obj({...obj,[name]:value})
    }

    const send_data=()=>{
        navigate(`/input_other/${obj.name}/${obj.f_name}`)
    }
  return (
    <div>
        <input type="text" onChange={on_change} name="name" value={obj.name}/>
        <input type="text" onChange={on_change} name="f_name" value={obj.f_name}/>

        <button onClick={send_data}>send</button>
    </div>
  )
}

export default InputDataPage