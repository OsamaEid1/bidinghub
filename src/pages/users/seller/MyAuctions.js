import { useNavigate } from "react-router-dom";
import { Auctions } from "../../../StyledComponents/MyAuctions.style";
import AuctionComp from "../../../components/AuctionComp";
import { useState } from "react";

const MyAuctions = () => {
    // Set Active Link
    window.localStorage.setItem("activeLink", "myAuc"); 
    // Check IF Seller OR Admin who is logged in 
    // const navigate = useNavigate();
    // console.log("hi");
    // if(window.localStorage.getItem("userType") === "admin") {
    //     console.log("hi2");
    //     navigate("/new-accounts");
    // }
    // Filter Auctions Based On These Checkboxes (WAITING FOR API URL TO LOOP ON THEME AND FILTER)
    let [soldBox, setSoldBox] = useState(false);
    let [runningBox, setRunningBox] = useState(false);

    return (
        <div>
            <div className="filter">
                <i className="fa-solid fa-filter me-2" style={{color: "#1877f2"}}></i>
                <label className="me-3">
                Sold
                <input
                    type="checkBox"
                    checked={soldBox}
                    onChange={() => setSoldBox(!soldBox)}
                    className="ms-2"
                />
                </label>
                <label className="me-3">
                Running
                <input
                    type="checkBox"
                    checked={runningBox}
                    onChange={() => setRunningBox(!runningBox)}
                    className="ms-2"
                />
                </label>
            </div>
            <Auctions>
                <AuctionComp
                    for="seller"
                    img={require("../../../images/object_headphones_1-1-300x300.png")}
                    name="bluetooth Headphone"
                    statue="sold"
                    finishDate="4-12-2023"
                    currBid="3,550"
                />
                <AuctionComp
                    for="seller"
                    img={require("../../../images/object_headphones_1-1-300x300.png")}
                    name="bluetooth Headphone"
                    statue="running"
                    finishDate="4-11-2023"
                    currBid="3,550"
                />
                <AuctionComp
                    for="seller"
                    img={require("../../../images/object_headphones_1-1-300x300.png")}
                    name="bluetooth Headphone"
                    statue="running"
                    finishDate="4-9-2023"
                    currBid="3,550"
                />
            </Auctions>
        </div>
    );
}

export default MyAuctions;