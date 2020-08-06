import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class FloorPlan extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <h1>Extreme Left</h1>
                        </Col>
                        <Col>
                            <h1>Middle</h1>
                        </Col>
                        <Col>
                            <h1>Extreme Right</h1>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default FloorPlan