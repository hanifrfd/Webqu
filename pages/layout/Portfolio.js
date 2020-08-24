import { Col, Row, Container, Card } from 'react-bootstrap'
import PortfolioItems from '../../component/PortfolioItems'

import Data from '../../data/portfolio-data'

const Portfolio = () => (
    <>
        <Container className="pt-5 px-0 py-3" fluid>
            <Row className="mx-0 px-0">
                <Col md="12" className="justify-content-center mb-4" >
                    <h2 className="black py-5 text-center">Portfolio</h2>                  
                    <Row className="justify-content-center black2 py-2">
                        <h5 id="" className="menu-link font-18 font-medium blue px-3">ALL</h5>
                        <h5 id="apps" className="menu-link font-18 font-medium px-3">APPS</h5>
                        <h5 id="ui" className="menu-link font-18 font-medium px-3">UI DESIGN</h5>
                        <h5 id="video" className="menu-link font-18 font-medium px-3">VIDEO GRAPHIC</h5>                    
                    </Row>
                </Col>
                <Row className="mx-0 px-0 justify-content-center">
                {
                    // console.log(datax)                    
                }
                { 
                    Data.apps.map(( datas, key ) => (                        
                        <PortfolioItems key={key} data={datas}></PortfolioItems>
                    ))                    
                }        
                </Row>        
            </Row>
        </Container>
    </>    
)

export default Portfolio;