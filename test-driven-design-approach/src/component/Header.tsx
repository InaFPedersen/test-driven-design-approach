import { Nav, Navbar } from "react-bootstrap";
import logo from "../logo.svg";
import { BsQuestionCircle, BsPersonFill } from "react-icons/bs";

const Header = () => {
    const title = "Test application";
    return (
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
                <Nav.Link href="/" data-cy="home-tab">
                    Home
                </Nav.Link>
                <Nav.Link
                    href="/about"
                    data-cy="about-tab"
                    style={{
                        marginLeft: "40px",
                    }}
                >
                    About
                </Nav.Link>
                <Nav.Link
                    href="/application"
                    data-cy="application-tab"
                    style={{
                        marginLeft: "40px",
                    }}
                >
                    Application
                </Nav.Link>
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
    );
};

export default Header;
