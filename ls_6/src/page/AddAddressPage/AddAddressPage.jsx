import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css"

const AddAddressPage = ({ apartData, setApartData }) => {
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setApartData({ ...apartData, [e.target.name]: e.target.value });
  };

  const send_data_fn =(e)=>{
    e.preventDefault();
    if (apartData.address.trim().length === 0) {
      alert("error");
      return;
    }
    
    navigate("/add_description_apart");
  }

  return (
    <form className="page" onSubmit={send_data_fn}>
      <h2>Шаг 1: Адресные данные</h2>
      <div className="form-group">
        <input name="address" placeholder="Улица или Район" value={apartData.address} onChange={handleChange} />
        <input name="house_num" placeholder="Номер дома" value={apartData.house_num} onChange={handleChange} />
        <input name="square" placeholder="Площадь квартиры" value={apartData.square} onChange={handleChange} />
        <button type='submit'>Далее</button>
      </div>
    </form>
  );
};

export default AddAddressPage;




