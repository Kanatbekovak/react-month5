import axios from "axios"

const MyApartments =()=> {

    const get_data_fn =()=>{
        console.log('data');

        const data = {
            guid_landlord: "046833aa-8146-4931-a3fd-25ec2b0f5dee",
            guid_apartment: "4450459e-d5b3-447f-bb11-3a754b591f02",
        }

        const res = await axios.post(
            'https://tams.kg/api/rules/get_list',
            data
        );
    };

    // get_data_fn();
    return <div></div>
}

export default MyApartments