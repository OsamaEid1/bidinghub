// Bootstrap Components
import { Button, Col, Container, Row } from "react-bootstrap";
// Auction Details Sytled Components
import { AuctionText, Image, Span } from "../StyledComponents/AuctionDetails";

// FOR TEST 
let userType = "seller";

const AuctionDetails = () => {
    return (
        <Container>
            <Row className="gap-3">
                <Col>
                <Image
                    src={require("../images/object_headphones_1-1-300x300.png")}
                    alt=""
                />
                </Col>
                <Col>
                <AuctionText>
                    Name: <Span className="fs-3">Bluetooth Headphones</Span>
                </AuctionText>
                <AuctionText>
                    Category: <Span>Electronics</Span>
                </AuctionText>
                <AuctionText>
                    Description:<br></br>
                    <Span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto fuga
                        praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Veritatis obcaecati tenetur iure
                        eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
                        quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                        quas aliquid. Reprehenderit, quia. Quo neque error
                        repudiandae fuga? Ipsa laudantium molestias eos sapiente
                        officiis modi at sunt excepturi expedita sint? Sed
                        quibusdam recusandae alias error harum maxime adipisci
                        amet laborum. Perspiciatis minima nesciunt dolorem!
                        Officiis iure rerum voluptates a cumque velit
                    </Span>
                </AuctionText>
                <AuctionText>Current Price: <Span>$4,500</Span></AuctionText>
                <AuctionText>Finish Date: <Span>22-4-2023</Span></AuctionText>
                {
                    userType == "seller" && (
                        <div>
                            <hr/>
                            <h3>Auction History</h3>
                            <AuctionText>Bid: <Span>$4,500</Span> &nbsp; Bidder: <Span>Osama Eid</Span> &nbsp; Phone: <Span>01142014769</Span></AuctionText>
                            <AuctionText>Bid: <Span>$4,300</Span> &nbsp; Bidder: <Span>Ahmed Fahmy</Span> &nbsp; Phone: <Span>01142014769</Span></AuctionText>
                            <AuctionText>Bid: <Span>$4,200</Span> &nbsp; Bidder: <Span>Ibrahim Mohamed</Span> &nbsp; Phone: <Span>01142014769</Span></AuctionText>
                            <Button as="a" href="/update-auction/id">Update</Button>
                            <Button className="btn-danger ms-3">Delete</Button>
                        </div>
                    )
                }
                </Col>
            </Row>
        </Container>
    );
}

export default AuctionDetails;