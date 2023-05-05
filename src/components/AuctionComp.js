// React Router 
import { Link } from "react-router-dom";
// Auction Styled Components 
import {
AucLink,
Auction,
FinishText,
FirstUnitSpan,
Foot,
FootText,
FootTextSpan,
Gavel,
Icon,
Icons,
Image,
Img,
LastUnitSpan,
Timer,
TimerText,
Top,
Trash,
Unit,
Units,
Username,
} from "../StyledComponents/Auction.style";
// React Hooks 
import { useEffect, useState } from "react";
//import { Button } from "react-bootstrap";

const AuctionComp = (props) => {
    let [aucTimeFinished, setAucTimeFinished] = useState(false);
    let [hideWinnerName, setHideWinnerName] = useState(false);
    
    // Get Auction Info
    let userType = props.for;
    let img = props.img;
    let name = props.name;
    let statue = props.statue;
    let currBid = props.currBid;
    // Decrease No. of Days by 1
    let finishDate = props.finishDate;
    finishDate = finishDate.split("-");
    finishDate[1] -= 1;
    finishDate = finishDate.join("-");
    
    // Counter Vars
    let [leftDays, setLeftDays] = useState(0);
    let [leftHours, setLeftHours] = useState(0);
    let [leftMin, setLeftMin] = useState(0);
    let [leftSec, setLeftSec] = useState(0);
    useEffect(() => {
        function getDateDiff(date) {
            let countDownDate = new Date(date).getTime();
            // Interval Loop
            let counter = setInterval(() => {
                // Get Date Now
                let dateNow = new Date().getTime();
                // Find The Date Difference Between Now And Countdown Date
                let dateDiff = countDownDate - dateNow;
                // Get Time Units
                let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
                let hours = Math.floor(
                (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
                // Set Units And Formate Them
                setLeftDays(days < 10 ? `0${days}` : days);
                setLeftHours(hours < 10 ? `0${hours}` : hours);
                setLeftMin(minutes < 10 ? `0${minutes}` : minutes);
                setLeftSec(seconds < 10 ? `0${seconds}` : seconds);
                // Break Rule
                if (dateDiff < 0) {
                    setAucTimeFinished(true)
                    clearInterval(counter);
                }
            }, 1000);
        }

        // Get The Left Time For This Auction
        getDateDiff(finishDate + " 23:59:59");

        //  Hide Winner Name for The General User
        if (userType === "general" || userType === "bidder") {
            setHideWinnerName(true)
        }
    }, [])
    

    return (
    <Auction data-statue={statue}>
        <Top>
        <Image>
            <Img src={img} alt="Auction Image" />
        </Image>
        {userType === "general" && (
            <Icons>
                <Link to="bid/id">
                    <Gavel className="fa-solid fa-gavel fa-xl"></Gavel>
                </Link>
            </Icons>
        )}
        {userType === "seller" && (
            <Icons>
                <button type="submit" name="delete" className="border-0 bg-transparent">
                    <Trash className="fa-solid fa-trash-can trash"></Trash>
                </button>
                <Link to="update-auction/45">
                    <Icon className="fa-solid fa-pencil"></Icon>
                </Link>
            </Icons>
        )}
        {userType === "admin" && (
            <Icons>
                <Link to="bid">
                    <Icon className="fa-solid fa-magnifying-glass"></Icon>
                </Link>
            </Icons>
        )}
        </Top>
        
        {!aucTimeFinished  && (
        <Timer>
            <TimerText>Time Left:</TimerText>
            <Units>
                <Unit>
                    <FirstUnitSpan>{leftDays}</FirstUnitSpan>
                    <LastUnitSpan>Days</LastUnitSpan>
                </Unit>
                <Unit>
                    <FirstUnitSpan>{leftHours}</FirstUnitSpan>
                    <LastUnitSpan>Hours</LastUnitSpan>
                </Unit>
                <Unit>
                    <FirstUnitSpan>{leftMin}</FirstUnitSpan>
                    <LastUnitSpan>Minutes</LastUnitSpan>
                </Unit>
                <Unit>
                    <FirstUnitSpan>{leftSec}</FirstUnitSpan>
                    <LastUnitSpan>Seconds</LastUnitSpan>
                </Unit>
            </Units>
        </Timer>
        )}
        {aucTimeFinished && !hideWinnerName && userType === "seller"  && (
        <FinishText>
            Time is Finished, Winner Is: <Username>winner name</Username>
        </FinishText>
        )}
        {aucTimeFinished && !hideWinnerName && userType === "admin" && (
        <FinishText>
            Seller Name : <Username>"Seller Name"</Username>, Winner Name: <Username>winner name</Username>
        </FinishText>
        )}
        {aucTimeFinished && hideWinnerName && (
        <FinishText>
            Time is Finished
        </FinishText>
        )}
        <Foot>
        <AucLink href="\bid">
            <h5 className="text-capitalize">{name}</h5>
        </AucLink>
        {
            userType !== "admin" && ( 
            <FootText>
                Current Bid: <FootTextSpan>${currBid}</FootTextSpan>
            </FootText>
        )
        }
        {
        userType === "admin" && ( 
            <FootText>
                Final Price: <FootTextSpan>${currBid}</FootTextSpan>
            </FootText>
        )
        }
        </Foot>
    </Auction>
    );
};

export default AuctionComp;
