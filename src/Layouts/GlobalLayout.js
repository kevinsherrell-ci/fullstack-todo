import NavBar from "../Components/NavBar";
import {Outlet} from "react-router-dom";

const GlobalLayout = () => {
    return (
        <div className={'global'}>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default GlobalLayout;