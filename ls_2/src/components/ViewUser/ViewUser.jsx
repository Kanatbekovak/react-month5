import React from 'react'
import './style.css'

const ViewUser = () => {
    const list_users = [
        {
            url: "https://cdn-icons-png.flaticon.com/256/11565/11565122.png",
            name: "Nurdin",
            age: 23,
        },
        {
            url: "https://cdn-icons-png.flaticon.com/256/11565/11565158.png",
            name: "Mira",
            age: 21,
            
        },
        {
            url: 'https://cdn-icons-png.flaticon.com/256/11565/11565113.png',
            name: 'Uluk',
            age: 19,
        },
        {
            url: "https://cdn-icons-png.flaticon.com/256/11565/11565108.png",
            name: "Akbermet",
            age: 19,
        },
        {
            url: "https://cdn-icons-png.flaticon.com/256/11565/11565172.png",
            name: "Meka",
            age: 17,
        },
    ]
  return (
    <div className='main_block'>
        {list_users.map((item) => {
            return <div className='every_user'  key={item.name}>
                <img src={item.url} alt={item.name} />
                <h5>{item.name}</h5>
                <p>{item.age}</p>
            </div>
        })}
        
    </div>
  )
}

export default ViewUser