import { Navbar } from 'react-bootstrap';
function Home(){
    return (
        <>
        <Navbar bg='myRed'
        sticky='top'>
            <Navbar.Brand>
                Logo
            </Navbar.Brand>
        <div className='header'> 
        <a href="Home"> Home </a>
        <a href="Aboutus"> About Us </a>
        </div>
        </Navbar>
        <div className='content'>
            this is Hannah 
        </div>
        
        </>
    )
}
export default Home;