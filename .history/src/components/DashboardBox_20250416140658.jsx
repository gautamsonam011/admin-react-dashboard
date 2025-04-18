
import { HiDotsVertical } from "react-icons/hi";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const DashboardBox = (props) => {

    return (
        <div className="dashboardBox" style={{
            backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
        }}
        >
            <div className="d-flex w-100">
                <div className="col1">
                    <h4 className="text-white mb-0">Total User</h4>
                    <span className="text-white">500</span>
                </div>
                <div className="ml-auto">
                    {
                        props.icon ? 
                        <span className="icon">
                            {props.icon ? props.icon : ''}
                            </span>
                            :
                            ''
                    }
                    
                </div>

            </div>
            <div className="d-flex align-items-center">
                <h6 className="text-white mb-0 mt-0">Last Mont</h6>
                <button className="ml-auto toggleIcon"><HiDotsVertical/></button>
            </div>
        </div>
       
        
    )

}

export default DashboardBox;