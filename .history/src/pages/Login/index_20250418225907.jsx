import logo from '../../assests/images/logo.jpg';
import { MyContext } from '../../App';
import { useContext, useEffect } from 'react';

const Login = () =>{
    const context = useContext(MyContext);

    useEffect(()=>{
        context.setisHideSidebarHeader(true);
    }, []);
    return (
        <section className="loginSection">
            <div className="loginBox">
                <div className="loginLogo text-center">
                    <img src={logo} alt="Logo" width="60px" />
                    <h5 className='font-weight-bold'>Login Form</h5>
                    
                </div>
            </div>
        </section>
    )
}

export default Login;