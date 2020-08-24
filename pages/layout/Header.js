import Head from "next/head"
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => (
    <div>
        <Head>
            <title>Webqu - Portfolio Website</title>
        </Head>

        <Navbar expand="lg" className="p-4">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="/" className="px-3">Home</Nav.Link>
                <Nav.Link href="#about" className="px-3">About Me</Nav.Link>
                <Nav.Link href="#portfolio" className="px-3">Portfolio</Nav.Link>
                <Nav.Link href="#contact" className="px-3">Contact</Nav.Link>                
            </Nav>        
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default Header;