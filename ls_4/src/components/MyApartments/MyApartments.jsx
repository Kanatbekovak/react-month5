import React, { useState, useEffect } from "react"; 
import axios from "axios";

const MyApartments = () => {
    const [list_apart, set_list_apart] = useState([]);

    const get_data_fn = async () => {
        const data = {
            guid_landlord: "046833aa-8146-4931-a3fd-25ec2b0f5dee",
            guid_apartment: "4450459e-d5b3-447f-bb11-3a754b591f02",
        };

        
            const res = await axios.post(
                'https://tams.kg/api/rules/get_list',
                data
            );
            
            set_list_apart(res.data); 
            console.log(res.data);

            const ressom = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    count: res.data.length,
                    landlord: data,
                    status: "success"
                }
            });

            console.log(ressom.data);
        
    };

    
    useEffect(() => {
        get_data_fn();
    }, []);

    return (
        <div>
            <h2>Правила проживания</h2>
            <div>
                {list_apart.map((item) => {
                    return (
                        <div key={item.guid}>
                            <h5>{item.name}</h5>
                            <img src={item.iconUrl} alt="icon" style={{ width: "40px" }} />
                            <p>{item.description || item.destription}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MyApartments;