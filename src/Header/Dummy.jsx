import { Link } from "react-router-dom";
function Dummy (){
    return(
        <>
        <div className="Header"> 
        <ul>
            <Link to="/"> Home </Link>  
            <Link to='Aboutus'> About Us </Link>
            </ul>
        </div>
        </>
    )
}
export default Dummy;