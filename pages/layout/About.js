<<<<<<< HEAD
import { Col, Row, Container, Card } from 'react-bootstrap'

const About = () => (
    <Container className="pt-5">
        <Row  className="justify-content-center">            
               <Col md="8">
                <h2 className="black py-5 text-center">About Me</h2>
                  <p className="font-18 font-light black text-center">
                    I have <span className="font-bold blue">Information Systems</span> bachelor degree, studying about <span className="font-medium blue2"> Software Development, and Business Process</span>. Now I learning <span className="font-medium blue2">UI / UX Design </span>  for improving my software development. And have some skill as <span className="font-medium blue2">Video Editor</span>
                  </p>
               </Col>
               <Col md="12" className="justify-content-center my-5">
                  <h2 className="black py-5 text-center">Skill I Have</h2>
                  <Row className="justify-content-center">
                    <Col md="3">
                        <Card style={{ minHeight: ' 8rem' }} className="shadow-sm" border="light">                
                            <Card.Body >
                                <Card.Title className="blue text-center">
                                    Software Development
                                </Card.Title>            
                                <Card.Text className="black2 text-center ">
                                    Web app, HTML, Javascript, React JS, Codeigniter, PHP, Mysql, Node JS                                
                                </Card.Text>            
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card style={{ minHeight: ' 8rem' }} className="shadow-sm" border="light">        
                            <Card.Body>
                                <Card.Title className="blue text-center">
                                    UI / UX Design
                                </Card.Title>            
                                <Card.Text className="black2 text-center align-middle">
                                    Figma, Adobe XD,  Illustrator, Photoshop
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card style={{ minHeight: ' 8rem' }} className="shadow-sm" border="light">
                            <Card.Body>
                                <Card.Title className="blue text-center">
                                    Video Editor
                                </Card.Title>            
                                <Card.Text className="black2 text-center">
                                    Adobe After Effect, Premiere Pro
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                  </Row>
               </Col>
             </Row>
    </Container>
)

=======
import { Col, Row, Container, Card } from 'react-bootstrap'

const About = () => (
    <Container className="pt-5">
        <Row >
               <Col md="12" className="justify-content-center">
                  <h2 className="black py-5 text-center">About Me</h2>
                  <p className="font-18 font-light black text-center">
                    I have <span className="font-bold blue">Information Systems</span> bachelor degree, studying about <span className="font-medium blue2"> Software Development, and Business Process</span>. Now I learning <span className="font-medium blue2">UI / UX Design </span>  for improving my software development. And have some skill as <span className="font-medium blue2">Video Editor</span>
                  </p>
               </Col>
               <Col md="12" className="justify-content-center my-5">
                  <h2 className="black py-5 text-center">Skill I Have</h2>
                  <Row className="justify-content-center">
                    <Col md="3">
                        <Card style={{ minHeight: ' 8rem' }} className="shadow-sm" border="light">                
                            <Card.Body >
                                <Card.Title className="blue text-center">
                                    Software Development
                                </Card.Title>            
                                <Card.Text className="black2 text-center ">
                                    Web app, HTML, Javascript, React JS, Codeigniter, PHP, Mysql, Node JS                                
                                </Card.Text>            
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card style={{ minHeight: ' 8rem' }} className="shadow-sm" border="light">        
                            <Card.Body>
                                <Card.Title className="blue text-center">
                                    UI / UX Design
                                </Card.Title>            
                                <Card.Text className="black2 text-center align-middle">
                                    Figma, Adobe XD,  Illustrator, Photoshop
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card style={{ minHeight: ' 8rem' }} className="shadow-sm" border="light">
                            <Card.Body>
                                <Card.Title className="blue text-center">
                                    Video Editor
                                </Card.Title>            
                                <Card.Text className="black2 text-center">
                                    Adobe After Effect, Premiere Pro
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                  </Row>
               </Col>
             </Row>
    </Container>
)

>>>>>>> 44290d18c6d7b11a41c438298e67b8231b7cd8e2
export default About;