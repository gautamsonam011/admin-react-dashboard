import DashboardBox from "../../components/DashboardBox";
import { FaUserFriends } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { BsStars } from "react-icons/bs";


const Dashboard = () => {
    return (
        <div className="right-content w-100">
            <div className="row dashboardBoxWrapperRow ">
                <div className="col-md-8">
                    <div className="dashboardBoxWrapper d-flex">
                        <DashboardBox color={["#2C5F2D", "#97BC62"]} icon={<FaUserFriends/>} grow={true} />
                        <DashboardBox color={["#A1BE95", "#F98866"]} icon={<FaCartArrowDown/>} />
                        <DashboardBox color={["#CC313D", "#F7C5CC"]} icon={<FaShoppingBag/>} />
                        <DashboardBox color={["#F52549", "#FA6775"]} icon={<BsStars/>} />
                        
                    </div>
                </div>
                <div className="col-md-4 pl-0">
                    <div className="box"></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;