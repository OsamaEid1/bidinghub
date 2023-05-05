//import { useNavigate } from "react-router-dom";
import { Auctions } from "../../../StyledComponents/MyAuctions.style";
import AuctionComp from "../../../components/AuctionComp";
//import  {useState}  from "react";

const TransactionResults = () => {
    // Set Active Link
    window.localStorage.setItem("activeLink", "myAuc"); 
    return (
        <div>
            <div>
                <header className='title'>Auctions Results</header>                
            </div>
            
            <Auctions>
                <AuctionComp
                    for="admin"
                    img={require("../../../images/object_headphones_1-1-300x300.png")}
                    name="bluetooth Headphone"
                    statue="sold"
                    finishDate="4-12-2023"
                    currBid="3,550"
                />
                <AuctionComp
                    for="admin"
                    img={require("../../../images/object_headphones_1-1-300x300.png")}
                    name="bluetooth Headphone"
                    statue="sold"
                    finishDate="4-12-2023"
                    currBid="3,550"
                />
                <AuctionComp
                    for="admin"
                    img={require("../../../images/object_headphones_1-1-300x300.png")}
                    name="bluetooth Headphone"
                    statue="sold"
                    finishDate="4-12-2023"
                    currBid="3,550"
                />
                <AuctionComp
                    for="admin"
                    img={require("../../../images/object_headphones_1-1-300x300.png")}
                    name="bluetooth Headphone"
                    statue="sold"
                    finishDate="4-12-2023"
                    currBid="3,550"
                />
                <AuctionComp
                    for="admin"
                    img={require("../../../images/object_headphones_1-1-300x300.png")}
                    name="bluetooth Headphone"
                    statue="sold"
                    finishDate="4-12-2023"
                    currBid="3,550"
                />
                <AuctionComp
                    for="admin"
                    img={require("../../../images/object_headphones_1-1-300x300.png")}
                    name="bluetooth Headphone"
                    statue="sold"
                    finishDate="4-12-2023"
                    currBid="3,550"
                />
                <AuctionComp
                    for="admin"
                    img={require("../../../images/object_headphones_1-1-300x300.png")}
                    name="bluetooth Headphone"
                    statue="sold"
                    finishDate="4-12-2023"
                    currBid="3,550"
                />
                <AuctionComp
                    for="admin"
                    img={require("../../../images/object_headphones_1-1-300x300.png")}
                    name="bluetooth Headphone"
                    statue="sold"
                    finishDate="4-12-2023"
                    currBid="3,550"
                />
            </Auctions>
        </div>
    );
}

export default TransactionResults;