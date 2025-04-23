import logo from '../../assests/images/logo.jpg';
import bgImage from '../../assests/bg.jpg';

import { MyContext } from '../../App';
import { useContext, useEffect, useState } from 'react';
import { MdMarkEmailRead } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
    const context = useContext(MyContext);
    const [inputIndex, setInputIndex] = useState(null);

    const focusInput=(index)=>{
        setInputIndex(index);
    }

    useEffect(() => {
        context.setisHideSidebarHeader(true);
    }, []);

    return (
        <>
            <img src={ bgImage} className='loginbgimage' alt="bgimage" />
            <section className="loginSection">
                <div className="loginBox">
                    <div className="loginLogo text-center">
                        <img src={logo} alt="Logo" width="60px" />
                        <h5 className='font-weight-bold'>Login Form</h5>
                    </div>

                    <div className='wrapper mt-3 card border p-3'>
                        <form>
                            <div className={`form-group mb-3 position-relative ${inputIndex===0 && 'focus'}`}>
                                <span className="icon"><MdMarkEmailRead/></span>
                                <input type="text" className='form-control' placeholder='Enter your email' onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)} />
                            </div>
                            <div className={`form-group mb-3 position-relative ${inputIndex===0 && 'focus'}`}>
                                <span className="icon"><RiLockPasswordFill/></span>
                                <input type="text" className='form-control' placeholder='Enter your password' onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)} />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;