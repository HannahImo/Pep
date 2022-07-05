import { Link } from 'react-router-dom';

console.log("Girl = n")
function Header(){
    return (
        <>
 
            <ul className="header-menu"> 
            <li className="header-menu-list-item" > 
            <Link to="/"> Home </Link>
                </li>
            <li className="header-menu-list-item">
            <Link to="Donor"> Donor </Link>
                </li> 
            <li className="header-menu-list-item">
            <Link to="NonProfitSME"> NonProfit $ SME </Link>
                    </li>
            <li className="header-menu-list-item">
                <Link to="AboutUs"> About </Link>
                </li>
            <li className="header-menu-list-item">
            <Link to="/Authform"> Get help </Link>
            </li>
            </ul>
        </>
    )
}
export default Header;