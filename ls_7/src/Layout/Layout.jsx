import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import "./style.css"

const Layout = () => {

    const navigate = useNavigate();
    const location = useLocation();
    

    const [list_page, _list_set_page] = useState([
        {id:1, name: "Главная", path:"/"},
        {id:2, name: "О нас", path:"/about"},
        {id:3, name: "Информация", path:"/info"},
        {id:4, name: "ввод", path:"/input_main"},
    ])

    const click_menu =(item)=>{
        console.log(location);
        navigate(item.path)
    }

    
  return (
    <div className='main'>
        <div className='menu'>{list_page.map((item) =>(
            <div key={item.id} >
                <button 
                onClick={()=> click_menu(item)} 
                className={`btns ${item.path == location.pathname ? "active_item" : ""}`} 
                // style={
                //     item.path == location.pathname
                //         ? {
                //             color:"red",
                //         }
                //     : {}
                // }
                >
                    {item.name}
                </button>
            </div>
        ))}</div>
        <Outlet/>
    </div>
  )
}

export default Layout