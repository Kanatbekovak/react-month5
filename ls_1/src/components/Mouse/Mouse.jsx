import './style.css'

const Mouse =()=> {

    const mouse =()=> {
        console.log("Курсор тути")
    }
    return <div className="box" onMouseEnter={mouse}></div>
}


export default Mouse;