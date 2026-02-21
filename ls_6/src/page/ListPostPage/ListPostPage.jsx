import React from 'react'
import { useNavigate } from 'react-router-dom';

const ListPostPage = () => {
    const navigate = useNavigate();


    const next_page =()=>{
        navigate("/second.page")
    }

  return (
    <div>
        <p>First page</p>
        {/* <NavLink to={"/second.page"}>Перейти на страницу</NavLink> */}
        <button onClick={next_page}>next</button>
    </div> 
  )
}

export default ListPostPage