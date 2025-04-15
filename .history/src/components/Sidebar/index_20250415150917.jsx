import Button from '@mui/material/Button';
import { RiDashboardLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { TbBrandProducthunt } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

const Sidebar = () =>{

    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Button className="w-100">
                        <span className='icon'><RiDashboardLine/></span>
                        Dashboard
                        <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className="w-100">
                        <span className='icon'><TbBrandProducthunt/></span>
                        Products
                        <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className="w-100">
                        <span className='icon'><TiShoppingCart/></span>
                        Orders
                        <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className="w-100">
                        <span className='icon'><MdOutlineMessage/></span>
                        Messages
                        <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className="w-100">
                        <span className='icon'><IoNotifications/></span>
                        Notifications
                        <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className="w-100">
                        <span className='icon'><RiDashboardLine/></span>
                        Settings
                        <span className="arrow"><IoIosArrowForward/></span>
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar