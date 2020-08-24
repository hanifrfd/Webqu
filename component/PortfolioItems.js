import { Card, Col } from 'react-bootstrap'

const PortfolioItems = ({ data }) => (
    <Col md="4" sm="1" className="my-3 p-0">
        <Card border="light" className="m-0">
            <Card.Img variant="top" src={data.image} />
            <Card.Body className="text-center py-4">
                    <Card.Title className="black"> { data.title } </Card.Title>
                    <Card.Text className="black2">
                        { data.tools }
                </Card.Text>                        
            </Card.Body>
        </Card>
    </Col>
)

export default PortfolioItems;