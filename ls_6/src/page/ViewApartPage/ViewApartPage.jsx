import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const ViewApartPage = ({ apartData }) => {

  const navigate = useNavigate();

  const next_page =()=>{
        navigate("/");
    }
  return (
    <div className="page">
      <h2>Просмотр объявления</h2>
      <div className="result-card">
        <div><strong>Адрес:</strong> {apartData.address}</div>
        <div><strong>Дом №:</strong> {apartData.house_num}</div>
        <div><strong>Площадь:</strong> {apartData.square} м²</div>
        <div>
          <strong>Описание:</strong>
          <p>{apartData.description || ""}</p>
        </div>
        <button onClick={next_page}>Вернуться на главную</button>
      </div>
    </div>
  );
};

export default ViewApartPage;