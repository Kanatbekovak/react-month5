import './style.css'

const LogAlert =()=> {
    const num = 4
    const func_num =()=>{
        if(num % 2 === 0) {
            alert('четное число');
        }else {
            alert('нечетное число');
        }
    }
    return <div>
        <p className='log'>Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing elit. Repellat enim sit ut delectus illo minus, accusantium ipsam ipsum, tempora cum labore aspernatur odit molestias eaque sint! Maxime rerum excepturi unde?</p>
        <button className="number" onClick={func_num}>click</button>
    </div>
}

export default LogAlert;