import { FaUserFriends } from "react-icons/fa";


const DashboardBox = (props) => {

    return (
        <div className="dashboardBox" style={{
            backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
        }}
        >
            <div className="d-flex w-100">
                <div className="col1">
                    <h4 className="text-white">Total User</h4>
                    <span className="text-white">500</span>
                </div>
                <div className="ml-auto">
                    <span className="icon">
                        <FaUserFriends/>
                    </span>
                </div>
            </div>
        </div>
       
        
    )

}

export default DashboardBox;