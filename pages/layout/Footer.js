import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => (
    <>
        <Container>
            <Row className="justify-content-center">
                <Col md="10">
                    <h1 className="text-center my-5 black">Contact</h1>
                    <h2 className="text-center blue my-2">hanifrfd@gmail.com</h2>
                </Col>
                <Row className="justify-content-center my-5">
                    <img className="px-4" src="icon/facebook.png" alt="facebook" />
                    <img className="px-4" src="icon/instagram.png" alt="instagram" />
                    <img className="px-4" src="icon/linkedin.png" alt="linkedin" />
                </Row>
            </Row>
        </Container>
    </>
)

export default Footer;

