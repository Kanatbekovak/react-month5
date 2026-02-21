import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  const next_page =()=>{
        navigate("/add_apart_address");
    }
  return (
    <div>
      <h1>Сервис аренды недвижимости</h1>
      
      <div>
        <button onClick={next_page}>Создать объявление</button>
      </div>

    </div>
  );
};

export default HomePage;