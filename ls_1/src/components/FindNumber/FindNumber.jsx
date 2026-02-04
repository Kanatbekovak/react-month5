import "./style.css"

const FindNumber =()=>{

    const num = [1, 44, 76, 35, 80, 168, 121]

    const fird_num =()=>{
        num.forEach(a => {
            if(a % 2 === 0){
                console.log('четное число')
            }else{
                console.log('нечетное число')
            }
        })
    }
    const input_text =(e)=>{
        console.log(e.target.value)
    }
    return <div>
        <button className="find" onClick={fird_num}>number</button>
        <input type="text" placeholder="тык..." onChange={input_text}/>
    </div>
}

export default FindNumber;