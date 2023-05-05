// React Router 
import { Link } from "react-router-dom";
// Bootstrap Components
import { Carousel, Col, Container, Row } from "react-bootstrap";
// Custom CSS 
import "../css/home.css"
// Components 
import SpecialHeading from "../components/SpecialHeading";
import AuctionComp from "../components/AuctionComp";

const Home = () => {
    return (
        <div>
            {/* Start Carousel */}
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/caro-house.jpg")}
                    alt="Houses"
                    />

                    <Carousel.Caption>
                        <h3>Houses</h3>
                        <p>Many valuable houses.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/caro-lands.jpg")}
                    alt="Lands"
                    />

                    <Carousel.Caption>
                        <h3>Lands</h3>
                        <p>Many multi-activity lands.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/caro-car.jpg")}
                    alt="Cars"
                    />

                    <Carousel.Caption>
                    <h3>Cars</h3>
                    <p>Lots of high-end cars.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/caro-antiques.jpg")}
                    alt="Cars"
                    />

                    <Carousel.Caption>
                    <h3>Antiques</h3>
                    <p>Old and distinctive antiques.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* End Carousel */}

            {/* Start About */}
            <section id="about">
                <SpecialHeading title="About" />

                    <Container>
                        <Row gap={2}>
                            <Col className="d-flex gap-4 align-items-center ">
                                <i className="fa-solid fa-question fa-xl"></i>
                                <div className="text">
                                    BiddingHub is a comprehensive auction management system designed to streamline the auction process for both buyers and sellers. Our platform is equipped with powerful tools and features that enable you to easily create, manage, and monitor auctions in real-time.
                                </div>
                            </Col>
                            <Col className="d-flex gap-4 align-items-center ">
                                <i class="fa-solid fa-shop fa-lg"></i>
                                <div className="text">
                                    With BiddingHub, sellers can effortlessly create and manage auctions with customizable settings and preferences. The platform also provides detailed analytics and reporting tools to track the progress of each auction and identify areas for improvement.
                                </div>
                            </Col>
                            <Col className="d-flex gap-4 align-items-center ">
                                <i class="fa-solid fa-cart-shopping fa-lg"></i>
                                <div className="text">
                                    For buyers, BiddingHub offers a user-friendly interface to search, bid, and win items with ease. The system provides real-time updates on auction progress, bids, and notifications for upcoming auctions, making it easy for buyers to stay informed and engaged.
                                </div>
                            </Col>
                            <Col className="d-flex gap-4 align-items-center ">
                                <i class="fa-sharp fa-solid fa-check-double fa-lg"></i>
                                <div className="text">
                                    At BiddingHub, we strive to provide the most efficient and effective auction management experience for all our users. Our platform is designed to simplify the entire auction process, from start to finish, ensuring a seamless and successful auction experience.
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </section>
            {/* End About */}

            {/* Start Services */}
            <section className="services">
                <SpecialHeading title="Services" />

                <Container>
                    <Row gap={2}>
                        <Col className="d-flex gap-4 align-items-center ">
                            <img src={require("../images/support-serv.png")} alt="support" />
                            <div className="text">
                                <h4>Call Center</h4>
                                <p>Completely synergies</p>
                            </div>
                        </Col>
                        <Col className="d-flex gap-4 align-items-center ">
                            <img src={require("../images/tracking-serv.png")} alt="Order tracking" />
                            <div className="text">
                                <h4>Order Tracking</h4>
                                <p>Objectively empowered</p>
                            </div>
                        </Col>
                        <Col className="d-flex gap-4 align-items-center ">
                            <img src={require("../images/deliveries-serv.png")} alt="Delivery" />
                            <div className="text">
                                <h4>Fastest Delivery</h4>
                                <p>Efficiently unleash media</p>
                            </div>
                        </Col>
                        <Col className="d-flex gap-4 align-items-center ">
                            <img src={require("../images/money-serv.png")} alt="Money" />
                            <div className="text">
                                <h4>Instant Buying</h4>
                                <p>Podcasting operational</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* End Services */}

            {/* Start banners */}
            <section className="banners">
                <Container>
                    <div className="col">
                        <div className="banner">
                            <img src={require("../images/caro-house.jpg")} alt="Houses" />
                            <div className="content">
                                <h1>Houses</h1>
                                <p><span className="houses-num">0</span> Products</p>
                                <Link to="/houses">VIEW MORE</Link>
                            </div>
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                            <span className="line-3"></span>
                            <span className="line-4"></span>
                        </div>
                        <div className="banner">
                            <img src={require("../images/electronics-banner.jpg")} alt="Electronics" />
                            <div className="content">
                                <h1>Electronics</h1>
                                <p><span className="elec-num">0</span> Products</p>
                                <Link to="/electronics">VIEW MORE</Link>
                            </div>
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                            <span className="line-3"></span>
                            <span className="line-4"></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="banner">
                            <img src={require("../images/caro-car.jpg")} alt="Cars" />
                            <div className="content">
                                <h1>Cars</h1>
                                <p><span className="cars-num">0</span> Products</p>
                                <Link to="/cars">VIEW MORE</Link>
                            </div>
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                            <span className="line-3"></span>
                            <span className="line-4"></span>
                        </div>
                        <div className="banner">
                            <img src={require("../images/caro-antiques.jpg")} alt="Antiques" />
                            <div className="content">
                                <h1>Antiques</h1>
                                <p><span className="antiq-num">0</span> Products</p>
                                <Link to="/antiques">VIEW MORE</Link>
                            </div>
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                            <span className="line-3"></span>
                            <span className="line-4"></span>
                        </div>
                    </div>
                </Container>
            </section>
            {/* End banners */}

            {/* Start Latest Auctions */}
            <section className="latest-auctions">
                <SpecialHeading title="latest auctions" />

                <Container>
                    <AuctionComp
                        for="general"
                        img={require("../images/auc-1.jpg")}
                        name="bluetooth Headphone"
                        statue="active"
                        finishDate="4-20-2023"
                        currBid="3,550"
                    />
                    <AuctionComp
                        for="general"
                        img={require("../images/auc-1.jpg")}
                        name="bluetooth Headphone"
                        statue="active"
                        finishDate="4-22-2023"
                        currBid="3,550"
                    />
                    <AuctionComp
                        for="general"
                        img={require("../images/auc-1.jpg")}
                        name="bluetooth Headphone"
                        statue="active"
                        finishDate="4-9-2023"
                        currBid="3,550"
                    />
                    <Link to="/shop" className="more">See More</Link>
                </Container>
            </section>
            {/* End Latest Auctions */}
        </div>
    );
}

export default Home;