import { useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import PortfolioItems from '../../component/PortfolioItems'

import Data from '../../data/portfolio-data'

const Portfolio = () => {        
    const [filter, setfilter] = useState("all")
    
    const setActive = (active) => {        
        return active === filter ? "blue" : ""        
    }
    return(
        <Container className="pt-5 px-0 py-3 mb-5" fluid>
            <Row className="mx-0 px-0">
                <Col md="12" className="justify-content-center mb-4" >
                    <h2 className="black py-5 text-center">Portfolio</h2>                  
                    <Row className="justify-content-center black2 py-2">
                        <h5 id="all" className={"menu-link font-18 font-medium px-3 " + setActive("all")} onClick={() => setfilter("all") }>ALL</h5> 
                        <h5 id="apps" className={"menu-link font-18 font-medium px-3 " + setActive("apps")}  onClick={() => setfilter("apps")}>APPS</h5>
                        <h5 id="ui" className={"menu-link font-18 font-medium px-3 " + setActive("ui")} onClick={() => setfilter("ui")}>UI DESIGN</h5>
                        <h5 id="video" className={"menu-link font-18 font-medium px-3 " + setActive("video")} onClick={() => setfilter("video")}>VIDEO GRAPHIC</h5>                    
                    </Row>
                </Col>
                <Row className="mx-0 px-0 justify-content-center">
                {                    
                    // console.log(filter)
                }
                {                              
                    Data[filter].map(( datas, key ) => (
                        <PortfolioItems key={key} data={datas} />
                    ))                                        
                }        
                </Row>        
            </Row>
            <style text="text/css">{`
                .menu-link{
                    cursor: pointer
                }
                .menu-link:hover{
                    color: #92C5F3
                }
            `}</style>
        </Container>

    )
}

export default Portfolio;