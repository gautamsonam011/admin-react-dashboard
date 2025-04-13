import {Link} from "react-router-dom";
import logo from "../../assests/images/logo.jpg";

const Header = () =>{
    return (
        <>
        <header>
            <div className="container-fluid">
                <div className="row d-flex align-items-center w-100">
                    {/* logo */}
                    <div className="col-xs-3">
                        <Link to="/" className="d-flex align-items-center">
                        <img src={logo} alt="logo" className="logo" />
                        <spam className="ml-2">e.com</spam>
                        </Link>
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