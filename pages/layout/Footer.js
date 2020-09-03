import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => (
    <div id="contact">
        <Container>
            <Row className="justify-content-center mx-0">
                <Col md="10">
                    <h1 className="text-center my-5 black">Contact</h1>
                    <h4 className="text-center blue my-4">hanifrfd@gmail.com</h4>
                </Col>
                
            </Row>
            <Row className="justify-content-center my-5">
                    <a href="https://www.github.com/hanifrfd"><img className="px-4 github" src="icon/github.png" alt="github" /></a>
                    <a href="https://www.linkedin.com/in/hanif-rafidi-33446a189/"><img className="px-4 linkedin" src="icon/linkedin.png" alt="linkedin" /></a>
                    <a href="https://www.instagram.com/hanifrfd"><img className="px-4 instagram" src="icon/instagram.png" alt="github" /></a>
            </Row>

            <style type="text/css">{`
                .github{
                    fill: white
                }
            `}
            </style>
        </Container>
    </div>
)

export default Footer;

