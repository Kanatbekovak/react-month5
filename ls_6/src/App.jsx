import React, { useState } from 'react'; 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage/HomePage.jsx';
import AddAddressPage from './page/AddAddressPage/AddAddressPage.jsx';
import AddDescriptionPage from './page/AddDescriptionPage/AddDescriptionPage.jsx';
import ViewApartPage from './page/ViewApartPage/ViewApartPage.jsx';

function App() {
  const [apartData, setApartData] = useState({
    address: '',
    house_num: '',
    square: '',
    description: ''
  });

  return (
    <div>
      <Routes>
        <Route path="/" 
        element={<HomePage/>} />
        <Route 
          path="/add_apart_address" 
          element={<AddAddressPage apartData={apartData} setApartData={setApartData} />} 
        />
        <Route 
          path="/add_description_apart" 
          element={<AddDescriptionPage apartData={apartData} setApartData={setApartData} />} 
        />
        <Route 
          path="/view_apart" 
          element={<ViewApartPage apartData={apartData} />} 
        />
      </Routes>
    </div>
  );
}

export default App;