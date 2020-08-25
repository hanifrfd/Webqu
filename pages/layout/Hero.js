import { Col, Row, Container, Image } from 'react-bootstrap'

const Hero = () => (
    <Container className="my-5">
        <Row>
               <Col md="6" className="align-item-center pl-5 justify-content-center mx-auto my-auto">
                <p  className="font-14 font-regular black mb-0">HELLO</p>
                <h1 className="font-bold font-64 black">I'm <span className="blue"> Hanif Rafidi </span></h1>
                <p  className="font-light black font-18">Web Developer, UI / UX Designer, Video Editor</p>
               </Col>
               <Col md="6" className="px-0">
                  <Image src="img/avatar.png" alt="hero" fluid/>
               </Col>
        </Row>
    </Container>
)

export default Hero;