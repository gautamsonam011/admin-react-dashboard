import DashboardBox from "../../components/DashboardBox";

const Dashboard = () => {
    return (
        <div className="right-content w-100">
            <div className="row dashboardBoxWrapperRow ">
                <div className="col-md-8">
                    <div className="dashboardBoxWrapper d-flex">
                        <DashboardBox color={["#2C5F2D", "#97BC62"]} />
                        <DashboardBox color={["#A1BE95", "#F98866"]} />
                        <DashboardBox color={["#CC313D", "#F7C5CC"]} />
                        <DashboardBox color={["#F52549", "#FA6775"]} />
                        
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