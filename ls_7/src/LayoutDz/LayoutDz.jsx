import React, { Suspense, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import "./style.css"
import Loader from '../components/Loader/Loader';

const LayoutDz = () => {

     const navigate = useNavigate();
    const location = useLocation();
    

    const [list_page, _list_set_page] = useState([
        {id:1, name: "Главная", path:"/"},
        {id:2, name: "Обо мне", path:"/about_me"},
        {id:3, name: "Мои посты", path:"/posts"},
    ])

    const click_menu =(item)=>{
        console.log(location);
        navigate(item.path)
    }

  return (
    <div className='wrapper'>
        <header>
            <div className='menu_dz'>{list_page.map((item) =>(
            <div key={item.id} >
                <button 
                onClick={()=> click_menu(item)} 
                className={`btn ${item.path == location.pathname ? "active" : ""}`} 
                >
                    {item.name}
                </button>
            </div>
            ))}</div>
        </header>
        <main>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </main>

        <footer>
            <p>© 2025</p>
        </footer>
    </div>
  )
}

export default LayoutDz