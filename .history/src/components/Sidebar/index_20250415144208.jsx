import Button from '@mui/material/Button';
import { RiDashboardLine } from "react-icons/ri";

const Sidebar = () =>{

    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Button className="w-100">
                        <span className='icon'><RiDashboardLine/></span>
                        Dashboard
                        <span className="arrow"></span>
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar