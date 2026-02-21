import React from 'react'
import { useNavigate } from 'react-router-dom';

const EveryPost = () => {
    const navigate = useNavigate();


    const next_page =()=>{
        navigate("/third.page")
    }
  return (
    <div>
        <p>second page</p>
        {/* <NavLink to={"/third.page"}>Перейти на страницу</NavLink> */}
        <button onClick={next_page}>next</button>
    </div>
  )
}

export default EveryPost