import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import Styled from "styled-components";
//  Button Styles 
let SubmitBtn = Styled.button`
margin-top: 5px;
padding: 7px 15px;
background-color: #1877f2;
color: white;
border: 1px solid #1877f2;
border-radius: 20px;
font-size: 18px;
transition: .3s;
&:hover {
    color: black;
    background-color: white;
}
`;

let getMinDate = () => {
// Ex: 2023-04-07
return new Date().toLocaleDateString("sv-SE");
}
let getMaxDate = (minDate, period) => {

let minDateArr = minDate.split("-");
let month = +minDateArr[1];

// Add Period For Days
minDateArr[2] = +minDateArr[2] + period;

// For Months With 31 Days
if (
    month == 1 ||
    month == 3 || 
    month == 5 || 
    month == 7 || 
    month == 8 ||
    month == 10 ||
    month == 12
    ) {
        if (minDateArr[2] > 31) {
            // Increase Month By 1
            minDateArr[1] = +minDateArr[1] + 1;
            // Set Days 
            let days = minDateArr[2] - 31;
            minDateArr[2] = days;
        }
    } else if (
        // For Months With 30 Days
        month == 4 ||
        month == 6 ||
        month == 9 ||
        month == 11
        ) {
        if (minDateArr[2] > 30) {
            // Increase Month By 1
            minDateArr[1] = +minDateArr[1] + 1;
            // Set Days 
            let days = minDateArr[2] - 30;
            minDateArr[2] = days;
        }
    } else {
        // For February (28 days)
        if (minDateArr[2] > 28) {
            // Increase Month By 1
            minDateArr[1] = +minDateArr[1] + 1;
            // Set Days 
            let days = minDateArr[2] - 28;
            minDateArr[2] = days;
        }
    } 

    let maxDate =  minDateArr.join("-")
    return maxDate;
}

const AuctionForm = (props) => {

// Detect this form for add auction page or update auction page 
let disabled = false;
if (props.for === "add") {
    disabled = false;
} else if (props.for === "update") {
    disabled = true;
} else {
    console.log(Error("Wrong Prop For 'for' prop Passed To AuctionForm Component !, Must 'add' Or 'update'"))
}
// Get Min&Max Attribute Values 
let period = 4;
let minDate = getMinDate();
let maxDate = getMaxDate(minDate, period);

return (
    <form method="POST" action="" className="mt-4 pe-5">
        <FloatingLabel
            controlId="floatingInput"
            label="Auction Name"
            className="mb-3"
        >
            <Form.Control
            type="text"
            disabled={disabled}
            placeholder="TV-45 inch"
            className="fs-5"
            />
        </FloatingLabel>

        <FloatingLabel
            controlId="floatingInput"
            label="Description"
            className="mb-4"
        >
            <Form.Control
            type="text"
            as="textarea"
            style={{ height: "100px" }}
            disabled={disabled}
            placeholder="this is awesome TV..."
            className="fs-5"
            />
        </FloatingLabel>

        <Form.Group controlId="formFile" className="fs-5 mb-4">
            Auction Image
            <Form.Control type="file" size="lg" />
        </Form.Group>

        <FloatingLabel controlId="floatingInput" label="Start Price">
            <Form.Control
            type="number"
            disabled={disabled}
            placeholder="Start Price"
            className="fs-4"
            />
        </FloatingLabel>

        <Form.Select size="lg" className="mt-4 fs-5" disabled={disabled}>
            <option value="0">--Select Category--</option>
            <option value="house">House</option>
            <option value="car">Car</option>
            <option value="electronic">Electronic</option>
            <option value="antique">ِAntique</option>
            <option value="other">Other</option>
        </Form.Select>

        <label className="w-100 fs-5 mt-4">
            Finish Date For This Auction (note: maximum days is 5 including
            today)
            <Form.Control
            type="date"
            className="mb-4"
            min={minDate}
            max={maxDate}
            name="date"
            size="lg"
            />
        </label>
        <SubmitBtn>Submit</SubmitBtn>
    </form>
);
}

export default AuctionForm;