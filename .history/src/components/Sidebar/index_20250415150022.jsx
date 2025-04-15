import Button from '@mui/material/Button';
import { RiDashboardLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

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
            </ul>
        </div>
    )
}

export default Sidebar