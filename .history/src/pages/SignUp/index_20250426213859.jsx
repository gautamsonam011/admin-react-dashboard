import logo from '../../assests/images/logo.jpg';
import bgImage from '../../assests/bg.jpg';

import { MyContext } from '../../App';
import { useContext, useEffect, useState } from 'react';
import { MdMarkEmailRead } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import google from "../../assests/images/google.png";

const SignUp = () => {
    const context = useContext(MyContext);
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setisShowPassword] = useState(false);
    const focusInput = (index) => {
        setInputIndex(index);
    }

    useEffect(() => {
        context.setisHideSidebarHeader(true);
    }, []);

    return (
        <>
            <img src={bgImage} className='loginbgimage' alt="bgimage" />
            <section className="loginSection signupSection">
                <div className='row'>
                    <div className='col-md-8'>

                    </div>
                    <div className='col-md-4 pr-0'>
                        <div className="loginBox">
                            <div className="loginLogo text-center">
                                <img src={logo} alt="Logo" width="60px" />
                                <h5 className='font-weight-bold'>Registration Form</h5>
                            </div>

                            <div className='wrapper mt-3 card border p-3'>
                                <form>
                                    <div className={`form-group mb-3 position-relative ${inputIndex === 0 && 'focus'}`}>
                                        <span className="icon"><MdMarkEmailRead /></span>
                                        <input type="email" className='form-control' placeholder='Enter your email' onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} />
                                    </div>
                                    <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus'}`}>
                                        <span className="icon"><RiLockPasswordFill /></span>
                                        <input type={`${isShowPassword === true ? 'text' : 'password'}`} className='form-control' placeholder='Enter your password' onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} />
                                        <span className="toggleShowPassword" onClick={() => setisShowPassword(!isShowPassword)}>
                                            {
                                                isShowPassword === true ? <FaEye /> : <FaRegEyeSlash />
                                            }

                                        </span>
                                    </div>
                                    <div className='form-group'>
                                        <Button className="btn-lg w-100 btn-big">Sign Up</Button>
                                    </div>
                                    <div className='form-group text-center mt-3'>
                                        <Link to={'forgot-password'} className="forgotPassword">Forgot Password</Link>
                                        <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                                            <span className='line'></span>
                                            <span className='txt'>or</span>
                                            <span className='line'></span>
                                        </div>

                                        <Button variant="outlined" color="error" className='w-100 btn-lg loginwithGoogle'><img src={google} /> &nbsp; Sign In with Google</Button>
                                    </div>
                                </form>
                            </div>
                            <div className='wrapper mt-3 card border p-3 footer'>
                                <span className='text-center'>
                                    Don't have an account?
                                    <Link to={'/login'} className='link color ml-2'>Login</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default SignUp;