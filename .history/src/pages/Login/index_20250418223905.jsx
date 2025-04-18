import logo from '../../assests/images/logo.jpg';

const Login = () =>{
    return (
        <section className="loginSection">
            <div className="loginBox">
                <div className="loginLogo text-center"><img src={logo} alt="Logo" /></div>
            </div>
        </section>
    )
}

export default Login;