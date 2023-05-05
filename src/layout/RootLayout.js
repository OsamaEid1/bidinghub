// Router Components
import { Link, Outlet } from "react-router-dom";
// CSS File
import "../css/rootLayout.css"
// Components
import Header from "../components/Header";
import ScrollTopButton from "../components/ScrollTopButton";

// Specify What Type Of User Is Then Render His Header
let userType = window.localStorage.getItem("userType")
// If he didn't signed in yet 
if (!userType) {
    userType = "general"
}

// JUST FOR DEVELOPING TEST
userType = "admin";
window.localStorage.setItem("userType", "admin")
//if user signed Out switch userType for General to get General Navbar
if (
    window.location.pathname === "/signin" ||
    window.location.pathname === "/signup"
) {
    userType = "general"
}

// Set Custom Css for Sign in page  footer
let footerBotom = {}
if (window.location.pathname === "/signin" ) {
    footerBotom = {
        position: "absolute",
        right: "0",
        left: "0",
        bottom: "0",
    }
}
const RootLayout = () => {

    return (
        <div className="root-layout">
            {/* Start Header */}
            <Header for={userType} />
            {/* End Header */}

            {/* Start Menu */}
            <main>
                <Outlet />
            </main>
            {/* End Menu */}

            {/* Start Footer */}
            <footer style={footerBotom}>
                <p>© 2023 <span>BiddingHub</span> All Right Reserved</p>
            </footer>
            {/* End Footer */}

            {/* Start Scroll Top Button  */}
            <ScrollTopButton />
            {/* End Scroll Top Button  */}
        </div>
    );
}

export default RootLayout;