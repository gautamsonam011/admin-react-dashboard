import Button from '@mui/material/Button';
import { RiDashboardLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { TbBrandProducthunt } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { Link } from 'react-router-dom';
import React, {useState} from "react";

const Sidebar = () =>{
    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const isOpenSubmenu = (index) =>{
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);


    }

    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">
                    <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`}>
                        <span className='icon'><RiDashboardLine/></span>
                        Dashboard
                        <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                    </Link>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab === 1 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(1)}>
                        <span className='icon'><TbBrandProducthunt/></span>
                        Products
                        <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab===1? 'colapse':'colapsed'}`}>
                    <ul className='submenu'>
                        <li><Link to="#">Product Add</Link></li>
                        <li><Link to="#">Product List</Link></li>
                        <li><Link to="#">Product View</Link></li>
                    </ul>
                    </div>
                </li>
                <li>
                    <Link to="/">
                    <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`}>
                        <span className='icon'><TiShoppingCart/></span>
                        Orders
                        <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`}>
                        <span className='icon'><MdOutlineMessage/></span>
                        Messages
                        <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`}>
                        <span className='icon'><IoNotifications/></span>
                        Notifications
                        <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`}>
                        <span className='icon'><MdOutlineSettings /></span>
                        Settings
                        <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar