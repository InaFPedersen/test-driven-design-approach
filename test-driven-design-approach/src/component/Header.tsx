import { Nav, Navbar } from "react-bootstrap";
import logo from "../logo.svg";
import { BsQuestionCircle, BsPersonFill } from "react-icons/bs";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import About from "../pages/AboutPage";
import Application from "../pages/ApplicationPage";
import { Divider } from "@react-md/divider";

const Header = () => {
    const title = "Test application";
    return (
        <div>
            <Navbar
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "50px",
                    margin: "10px",
                }}
            >
                <Navbar.Brand href="/">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img
                            src={logo}
                            data-cy="logo"
                            alt="logo"
                            style={{
                                width: "50px",
                            }}
                        />
                        <h1>{title}</h1>
                    </div>
                </Navbar.Brand>

                <Nav>
                    <Link to="/" data-cy="home-tab">
                        Home
                    </Link>
                    <Link
                        to="/about"
                        data-cy="about-tab"
                        style={{
                            marginLeft: "40px",
                        }}
                    >
                        About
                    </Link>
                    <Link
                        to="/application"
                        data-cy="application-tab"
                        style={{
                            marginLeft: "40px",
                        }}
                    >
                        Application
                    </Link>
                </Nav>
                <div style={{}}>
                    <BsQuestionCircle
                        data-cy="help-icon"
                        style={{
                            width: "25px",
                            height: "25px",
                            marginRight: "20px",
                            marginLeft: "10px",
                        }}
                    />
                    <BsPersonFill
                        data-cy="profile-icon"
                        style={{ width: "25px", height: "25px" }}
                    />
                </div>
            </Navbar>
            <Divider />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/application" element={<Application />} />
            </Routes>
        </div>
    );
};

export default Header;
