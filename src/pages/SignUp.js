//import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/SignIn.css"
import "../css/SignUp.css"
import { FloatingLabel, Form, FormGroup } from "react-bootstrap";




const SignUp = () => {

    const [type,setType] = useState({KindOfUser:"" , another:"another"});

    const {KindOfUser} = type;

    const handelChange = e =>{
        e.persist();

        setType(prevState => ({
            ...prevState,
            KindOfUser: e.target.value
        }));

        console.log(KindOfUser);
    }

    return (
        <div className="div-log-in">

            <form method="POST" action="" className="log-in-form">
                <label className="form-header">Sign Up</label>
                <div class="form-outline mb-4">
                <FloatingLabel
                        controlId="floatingInput"
                        label="Type your name"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="TV-45 inch"
                            className="fs-5"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Type your Phone number"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="TV-45 inch"
                            className="fs-5"
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Type your email"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="TV-45 inch"
                            className="fs-5"
                        />
                    </FloatingLabel>
                    
                <FloatingLabel
                        controlId="floatingInput"
                        label="Type your password"
                        className="mb-3"
                    >
                        <Form.Control
                            type="password"
                            placeholder="TV-45 inch"
                            className="fs-5"
                        />
                    </FloatingLabel>

                    <FormGroup className="radio-group" controlId="KindOfUser">
                        <Form.Check
                        value={"seller"}
                        type="radio"
                        aria-label="radio 1"
                        label= "I'm Seller"
                        onChange={handelChange}
                        checked = {KindOfUser === "seller"}
                        className="radio-btn"
                        />
                        <Form.Check
                        value={"bidder"}
                        type="radio"
                        aria-label="radio 1"
                        label= "I'm Bidder"
                        onChange={handelChange}
                        checked = {KindOfUser === "bidder"}
                        className="radio-btn"
                        />
                    </FormGroup>
                    
                <div class="text-center">
                    <button type="button" class="btn btn-primary btn-block mb-4">Sign Up</button>
                </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;