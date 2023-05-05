import React from 'react';
//import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import "./NewAccounts.css"



const NewAccounts = () => {
    // Set Active Link
    window.localStorage.setItem("activeLink", "newAcc");
    // Check IF Admin who is logged in
    const navigate = useNavigate();
    if (window.localStorage.getItem("userType") === "admin") {
        navigate("/userName");
    }

    return <div className='main-div' >
        <header className='title'>NewAccounts</header>
        <table>
            <tbody>
                <tr>
                    <td>
                        <h1 className='user-name'>AccountName</h1>
                        <p className='details'>example@example.com</p>
                        <p className='details mb-2'>01060203632</p>
                    </td>
                    <td className='button-cell'>
                        <button type="button" className="btn btn-success">Accept</button>
                    </td>
                    <td className='button-cell'>
                        <button type='button' className='btn btn-danger'>Reject</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1 className='user-name'>AccountName</h1>
                        <p className='details'>example@example.com</p>
                        <p className='details mb-2'>01060203632</p>
                    </td>
                    <td className='button-cell'>
                        <button type="button" className="btn btn-success">Accept</button>
                    </td>
                    <td className='button-cell'>
                        <button type='button' className='btn btn-danger'>Reject</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1 className='user-name'>AccountName</h1>
                        <p className='details'>example@example.com</p>
                        <p className='details mb-2'>01060203632</p>
                    </td>
                    <td className='button-cell'>
                        <button type="button" className="btn btn-success">Accept</button>
                    </td>
                    <td className='button-cell'>
                        <button type='button' className='btn btn-danger'>Reject</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default NewAccounts;