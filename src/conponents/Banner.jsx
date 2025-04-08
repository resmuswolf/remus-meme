import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import samDiana from '../assets/img/SamDiana.png';

 const Banner=()=>{
    return (
        <section className="banner" id="home"> 
        <Container>
            <Row className="align-items-center ">
                <Col xs={12} md={6} xl={6}>
                <span className="tagline">Fight Cute, Play Fierce!</span>
                <h1>{'Chronials'}<span className="wrap">!</span></h1>
                <p>A battle field of the brave warriors protecting their land</p>
                <button onClick={()=>console.log('connect')}>Let's Play<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={6}>
                <img src={samDiana} alt="Header img"/>
                </Col>
            </Row>
        </Container>
        </section>
    )
 }
 export default Banner;