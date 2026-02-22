import React, { useRef } from 'react'
import "./style.css"

const InputControl = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    const handleClear = () => {
        inputRef.current.value = ""; 
        inputRef.current.focus();    
    };

    const handleFill = () => {
        inputRef.current.value = "Я всегда хотел(-а)"; 
        inputRef.current.focus();             
    };

    return (
      <div className="main-page">
            <h1>Welcome to my blog</h1>

        <div className="card">
          <div>
            <input 
                ref={inputRef} 
                type="text" 
                placeholder="Start..."
            />
          </div>

          <div className='button-grid'>
            <button onClick={handleFocus} className="btn-ctrl btn-focus">Focus</button>
            <button onClick={handleClear} className="btn-ctrl btn-clear">Clear</button>
            <button onClick={handleFill} className="btn-ctrl btn-fill">Fill Demo</button>
          </div>
        </div>
      </div>
    );
};


export default InputControl