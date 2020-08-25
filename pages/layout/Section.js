import { Container, Row, Col } from 'react-bootstrap'

const Section = ({ children }) => (
    <>
        <Container>            
            { children }
        </Container>
    </>
)

export default Section;

