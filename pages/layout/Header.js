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

export default Header;