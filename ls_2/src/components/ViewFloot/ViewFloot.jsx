import React from 'react'
import './style.css'
import home_1 from "../../assets/home.jpg"
import home_2 from "../../assets/home2.jpg"
import home_3 from "../../assets/home3.jpg"

const ViewFloot = () => {
    const list_floot = [
        {
            url: home_1,
            price: 24000,
            address: "Бишкек"
        },
        {
            url: home_2,
            price: 24000,
            address: "Бишкек"
        },
        {
            url: home_3,
            price: 24000,
            address: "Бишкек"
        }
    ]
  return (
    <div className='main'>
        {list_floot.map((item) => {
            return <div className="all_floot">
                <img src={item.url} alt="home" />
                <h4>{item.price}</h4>
                <h5>{item.address}</h5>
            </div>
        })}
    </div>
  )
}

export default ViewFloot