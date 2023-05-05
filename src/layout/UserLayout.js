// Router
import { NavLink, Outlet, useParams } from "react-router-dom";
import { DashboardLayout, SideMenu, Content } from "../StyledComponents/UserLayout.style";

const UserLayout = () => {
    // Get User Type From Local Storage 
    let userType = window.localStorage.getItem("userType")
    
    // Get Username From Params
    let { userName } = useParams();
    
    // JUST FOR TEST
    userType = "admin";

    return (
        <DashboardLayout>
            {
                userType === "seller" && (
                    <SideMenu>
                        <NavLink to={"/" + userName + "my-auctions"} className="dash-link" end >My Auctions</NavLink>
                        <NavLink to={"/" + userName + "add-auction"} className="dash-link" >Add New Auction</NavLink>
                    </SideMenu>
                )
            }
            {
                userType === "admin" && (
                    <SideMenu>
                        <NavLink to={"/" + userName + "/new-accounts"} className="dash-link">New Accounts</NavLink>
                        <NavLink to={"/" + userName + "/transactions-results"} className="dash-link" >Transactions Results</NavLink>
                    </SideMenu>
                )
            }
            <Content>
                <Outlet />
            </Content>
        </DashboardLayout>
    );
}

export default UserLayout;