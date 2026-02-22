import React from 'react'
import "./style.css"

const Loader = () => (
    <div className="loader-container">
        <div className="spinner"></div>
        <p className="loader-text">Загрузка</p>
    </div>
);

export default Loader;