import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Nav, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import Image from "../../image/philadelphiabackground.jpg";

const Styles = styled.div`
    .navbar {
        display: flex;
        background-color: transparent;
        margin-bottom: 20px;
        width: 100%;
        font-family: Andale Mono;
    }
    .navbar-light .navbar-nav .nav-link {
        color: #fff8f0ff;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        font-size: 125%;
    }
    .navbar-brand {
        color: #ffcf99ff;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        font-size: 200%;
    }   
    .title {
        padding: 5px;
        font-family: Frutiger;
    }
    .links {
        margin-right: -50%;
    }
    .jumbotron {
        position: relative;
        // margin-top: 100px;
        // padding-top: 0;
        // padding-bottom: 0;
        // width: 100%;
        // height: auto;
        // max-height: 625px;
        // min height: 100px;
    }
    .header {
        width: 100%;
    }
    .test {
        margin-top: -100px;
        width: 100%;
    }
`
const backgroundStyle = {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto"
    // backgroundSize: "cover",
    // width: "100%"
}
function NavBarLogin(props) {

    const location = useLocation();

    // const [redirectTo, setRedirectTo] = useState("");

    return (
        <header>
            <>
            <Styles>
            <div className="test">
                <Jumbotron fluid style={backgroundStyle}>
                    <Navbar expand="md">
                        <Navbar.Brand href="/home" className="title ">Title</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="links basic-navbar-nav float-right">
                            <Nav className="mr-auto justify-content-end">
                                <Nav.Link href="/" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>Login</Nav.Link>
                                <Nav.Link href="/signup" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}>Signup</Nav.Link>
                                <Nav.Link href="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>Home</Nav.Link>
                                <Nav.Link href="/map" className={location.pathname === "/map" ? "nav-link active" : "nav-link"}>Map</Nav.Link>
                                <Nav.Link href="/resources" className={location.pathname === "/resources" ? "nav-link active" : "nav-link"}>Resources</Nav.Link>
                                <Nav.Link onClick={props.handleLogout} className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Log Out</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Jumbotron>
            </div>
            </Styles>
            </>
        </header>
    )
}
export default NavBarLogin;