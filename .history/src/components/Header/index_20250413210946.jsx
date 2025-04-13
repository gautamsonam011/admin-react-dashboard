import {Link} from "react-router-dom";
import logo from "../../assests/images/logo.jpg";

const Header = () =>{
    return (
        <>
        <header>
            <div className="container-fluid">
                <div className="row d-flex align-items-center">
                    {/* logo */}
                    <div className="col-xs-3">
                        <Link to="/" ><img src={logo} alt="logo" className="logo" /></Link>
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