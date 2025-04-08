import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sword1 from '../assets/img/sword1.gif';
import sword2 from '../assets/img/sword2.gif';
import sword3 from '../assets/img/sword3.gif';
import sword4 from '../assets/img/sword4.gif';
import sword5 from '../assets/img/sword2.gif';
import colorSharp from '../assets/img/color-sharp.png';
const Skills=()=>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section>
            <Container className="skill" id="skills">
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2 className="text-blue-500">Swords</h2>
                        <p>A wide range of sward collection. choose the sword as per the power of your opponent</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={sword1} alt="Image"/>
                                <h5>Excalibur</h5>
                            </div>
                            <div className="item">
                                <img src={sword2} alt="Image"/>
                                <h5>Stormbringer</h5>
                            </div>
                            <div className="item">
                                <img src={sword3} alt="Image"/>
                                <h5>Gladius</h5>
                            </div>
                            <div className="item">
                                <img src={sword4} alt="Image"/>
                                <h5>Shamshir</h5>
                            </div>
                            <div className="item">
                                <img src={sword5} alt="Image"/>
                                <h5>Whisperwind</h5>
                            </div>
                            <div className="item">
                                <img src={sword4} alt="Image"/>
                                <h5>Frostheart</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}

export default Skills;