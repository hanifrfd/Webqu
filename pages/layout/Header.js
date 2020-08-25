<<<<<<< HEAD
import Link from '../../component/Link'
import Head from "next/head";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    
    return (
        <Container>
            <Head>
                <title>Webqu - Portfolio Website</title>
            </Head>

            <Navbar expand="sm" className="p-4">
                <Navbar.Brand href="/"> <h4  className="blue"> Webqu </h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Link exact href="/#home" activeClassName='active'> Home </Link>
                    <Link href="/#about" activeClassName='active'>About Me</Link>
                    <Link href="/#portfolio" activeClassName='active'>Portfolio</Link>
                    <Link href="/#contact" activeClassName='active'>Contact</Link>                    
                </Nav>
                <Nav><div></div></Nav>
                <Navbar.Text>
                      
                </Navbar.Text>            
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

=======
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

>>>>>>> 44290d18c6d7b11a41c438298e67b8231b7cd8e2
export default Header;