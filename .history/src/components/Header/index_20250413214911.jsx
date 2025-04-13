import {Link} from "react-router-dom";
import logo from "../../assests/images/logo.jpg";
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";


const Header = () =>{
    return (
        <>
        <header>
            <div className="container-fluid">
                <div className="row d-flex align-items-center w-100">
                    {/* logo */}
                    <div className="col-xs-3">
                        <Link to="/" className="d-flex align-items-center logo">
                        <img src={logo} alt="logo"/>
                        <spam className="ml-2">e.com</spam>
                        </Link>
                    </div>
                    <div className="col-xs-3 d-flex align-items-center">
                    <Button className="rounded-circle"><MdMenuOpen/></Button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header