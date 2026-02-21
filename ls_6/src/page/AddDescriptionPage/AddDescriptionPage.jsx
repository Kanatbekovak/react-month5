import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css"

const AddDescriptionPage = ({ apartData, setApartData }) => {
  const navigate = useNavigate();

  const handleDescChange = (e) => {
    setApartData({ ...apartData, description: e.target.value });
  };
   const send_data_fn =(e)=>{
    e.preventDefault();
    if (apartData.description.trim().length === 0) {
      alert("error");
      return;
    }
    
    navigate("/view_apart");
    }

  return (
    <div>
      <h2>Шаг 2: Описание объекта</h2>
      <form onSubmit={send_data_fn}>
        <textarea placeholder="Расскажите подробнее о квартире" value={apartData.description} onChange={handleDescChange} />
        <button type='submit'>Добавить квартиру</button>
      </form>
    </div>
  );
};

export default AddDescriptionPage;