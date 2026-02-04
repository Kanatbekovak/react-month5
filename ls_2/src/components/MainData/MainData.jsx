import React from 'react'
import './style.css'
import ViewUser from '../ViewUser/ViewUser'
import ViewFloot from '../ViewFloot/ViewFloot'

const MainData = () => {

    const list_colors = ['red','green','yellow']

    const colors_log_fn =(col)=> {
        console.log(col);
        
    }
  return (
    <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit rem obcaecati ducimus unde quo. Consequuntur, doloremque tenetur tempora reprehenderit, iure laborum, quod unde distinctio aliquid adipisci placeat rem. Assumenda, architecto!</p>
        {list_colors.map((item) => {
            <button onClick={() => colors_log_fn(item)} style={{color: item}}>{item}</button>
        })}
    <ViewUser/>
    <ViewFloot/>
    </div>

  )
}

export default MainData