import { Link } from "react-router-dom";
function Dummy (){
    return(
        <>
        <div className="Header"> 
        <ul>
            <button type="button" className="btn btn-secondary"> <Link to="/"> Home </Link> </button>
            <Link to="/Aboutus"> About Us </Link>
            </ul>
        </div>
        </>
    )
}
export default Dummy;