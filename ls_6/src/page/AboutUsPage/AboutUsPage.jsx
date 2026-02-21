import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
    // const[is_name,set_is_name] = useState("");
    // const[is_surname,set_is_surname] = useState("");
    // const[is_lastname,set_is_lastname] = useState("");

    const navigate = useNavigate();

    const next_page =()=>{
        navigate("/");
    }

    const [obj_data,set_obj_data] = useState({
      is_name:'',
      last_name: '',
      first_name:'',
      address: '',
    });
    const on_change_fn =(event)=>{
      set_obj_data({...obj_data,[event.target.name]:event.target.value})
    }

    const send_data_fn =()=>{
      if(obj_data.is_name.length == 0){
        alert("error")
        return
      }
    }
    console.log(obj_data,"obj_data")
  return (
    <form onSubmit={send_data_fn}>
        <p>about page</p>
        {/* <NavLink to={"/"}>Перейти на страницу</NavLink> */}
        <button onClick={next_page}>next</button>
        <input type="text" value={obj_data.is_name} name ='is_name' onChange={on_change_fn} required={true}/>

        <input type="text" value={obj_data.first_name} name ='first_name' onChange={on_change_fn}/>

        <input type="text" value={obj_data.last_name} name ='last_name' onChange={on_change_fn}/>
        <button type='submit'>send data</button>
    </form>
  )
}

export default AboutUs