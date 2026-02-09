import { useState } from "react";
import "./style.css";

const Counter = () => {
    const [count, setCount] = useState(0); 

    const plus_fun = () => {
       
        setCount(count + 1);
    };

    const minus_fun = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Kaniet</p>

            <div className="main_counter">
                <button onClick={minus_fun}>-</button>
                <p>{count}</p>
                <button onClick={plus_fun}>+</button>
            </div>
        </div>
    );
};

export default Counter;