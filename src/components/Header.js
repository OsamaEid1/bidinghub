import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useParams } from "react-router-dom";


const Header = (props) => {
    // Specify What Links Will Show Based On The Type Of User
    let navType = props.for;
    // Get Username From Params
    let { userName } = useParams() 

    // // offcanvas
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const toggleShow = () => setShow((show) => !show);

    return (
        <Navbar>
            <Container className="px-0">
                {navType === "general" && (<Navbar.Brand href="/">BiddingHub</Navbar.Brand>)}
                {(navType === "seller" || navType === "admin") && (<Navbar.Brand href={`/${userName}`}>BiddingHub</Navbar.Brand>)}
                <div className="d-flex align-items-center">
                {
                    navType === "general" && (
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/#about">About</Nav.Link>
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/signin">Sign In</Nav.Link>
                        </Nav>
                    ) 
                }
                {
                    (navType === "seller" || navType === "admin") && (
                        <Nav>
                            {/* <Nav.Link href={"/" + userName}>My Auctions</Nav.Link>
                            <Nav.Link href={"/" + userName + "/shop"}>Shop</Nav.Link> */}
                            <a href="/signin" className="ms-3 btn text-black btn-light rounded-pill fs-6">Sign Out</a>
                        </Nav>
                    )
                }
                
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;