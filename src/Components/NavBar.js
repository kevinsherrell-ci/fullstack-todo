import {Link} from "react-router-dom";

const NavBar = ()=>{
    return (
        <nav className={'nav-bar'}>
            <Link to={'/'}>Home</Link>
            <Link to={'/TodoFormPage'}>Todo Form</Link>
        </nav>
    )
}

export default NavBar;