import { Link } from "react-router-dom";
import "../css/SignIn.css"
import { FloatingLabel, Form } from "react-bootstrap";


const SignIn = () => {
    return (
        <div className="div-log-in">

            <form method="POST" action="" className="log-in-form">
                <label className="form-header">Log In</label>
                <div class="form-outline mb-4">
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
                    <div class="text-center">
                        <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
                        <p>Not a member? <Link to={"/SignUp"}>Register</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignIn;