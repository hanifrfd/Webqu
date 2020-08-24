import { Card } from 'react-bootstrap'

const CardItem = ({ children, title, text }) => (
    <>
        <Card style={{ width: '18rem' }}>        
        <Card.Body>
            <Card.Title className={ title }>
                { children.only(title)}
            </Card.Title>            
            <Card.Text className={ text }>
                { children.text}
            </Card.Text>            
        </Card.Body>
        </Card>
    </>
)

export default CardItem;