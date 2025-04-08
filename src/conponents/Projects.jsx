import { Col, Container, Row ,Nav, Tab} from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import family1 from '../assets/img/family1.jpeg';
import family2 from '../assets/img/family2.jpeg';
import family3 from '../assets/img/family3.jpeg';
import family4 from '../assets/img/family4.jpeg';
import family5 from '../assets/img/family5.jpeg';
import family6 from '../assets/img/family6.jpeg';

import fighter1 from '../assets/img/HakaAndYani.jpeg'
import fighter2 from '../assets/img/KujiAndGiki.jpeg'
import fighter3 from '../assets/img/LoveBirds.jpeg'
import fighter4 from '../assets/img/MisoAndHija.jpeg'
import fighter5 from '../assets/img/TimmiAndPopo.jpeg'
import fighter6 from '../assets/img/YoniAndSuki.jpeg'

import warrior1 from '../assets/img/single/aomi.jpeg'
import warrior2 from '../assets/img/single/Gini.jpeg'
import warrior3 from '../assets/img/single/Kimi.jpeg'
import warrior4 from '../assets/img/single/popi.jpeg'
import warrior5 from '../assets/img/single/sara.jpeg'
import warrior6 from '../assets/img/single/Timi.jpeg'

import warrior7 from '../assets/img/single/Gina.jpeg'
import warrior8 from '../assets/img/single/Hiko.jpeg'
import warrior9 from '../assets/img/single/Jena.jpeg'
import warrior10 from '../assets/img/single/Jimi.jpeg'
import warrior11 from '../assets/img/single/Kiko.jpeg'
import warrior12 from '../assets/img/single/Limo.jpeg'
import warrior13 from '../assets/img/single/popo.jpeg'
import warrior14 from '../assets/img/single/rosy.jpeg'
import warrior15 from '../assets/img/single/Sora.jpeg'

import warrior16 from '../assets/img/single/Tori.jpeg'
import warrior17 from '../assets/img/single/Toshi.jpeg'
import warrior18 from '../assets/img/single/Tuma.jpeg'
import warrior19 from '../assets/img/single/Yaka.jpeg'
import warrior20 from '../assets/img/single/Yuja.jpeg'
import warrior21 from '../assets/img/single/Yuri.jpeg'

const Projects =()=>{
    const projects =[
        {
            title: "Ragnar's",
            description:"Gurds of the mother land",
            imgUrl:family1,
        },
        {
            title: "Hjalmar's",
            description:"Gurds of the mother land",
            imgUrl:family2,
        },
        {
            title: "Alfhar's",
            description:"Gurds of the mother land",
            imgUrl:family3,
        },
        {
            title: "Gunnar's",
            description:"Gurds of the Marianne",
            imgUrl:family4,
        },
        {
            title: "Oliver's",
            description:"Gurds of the Amaterasu",
            imgUrl:family5,
        },
        {
            title: "Agnar's",
            description:"Gurds of the Hibernia",
            imgUrl:family6,
        }
    ]

    const fighters =[
        {
            title: "Ragnar's",
            description:"Gurds of the mother land",
            imgUrl:fighter1,
        },
        {
            title: "Hjalmar's",
            description:"Gurds of the mother land",
            imgUrl:fighter2,
        },
        {
            title: "Alfhar's",
            description:"Gurds of the mother land",
            imgUrl:fighter3,
        },
        {
            title: "Gunnar's",
            description:"Gurds of the Marianne",
            imgUrl:fighter4,
        },
        {
            title: "Oliver's",
            description:"Gurds of the Amaterasu",
            imgUrl:fighter5,
        },
        {
            title: "Agnar's",
            description:"Gurds of the Hibernia",
            imgUrl:fighter6,
        }
    ]

    const warrior =[
        {
            title: "Aomi",
            description:"Gurds of the mother land",
            imgUrl:warrior1,
        },
        {
            title: "Gini",
            description:"Gurds of the mother land",
            imgUrl:warrior2,
        },
        {
            title: "Kimi",
            description:"Gurds of the mother land",
            imgUrl:warrior3,
        },
        {
            title: "Popi",
            description:"Gurds of the Marianne",
            imgUrl:warrior4,
        },
        {
            title: "Sara",
            description:"Gurds of the Amaterasu",
            imgUrl:warrior5,
        },
        {
            title: "Timi",
            description:"Gurds of the Hibernia",
            imgUrl:warrior6,
        },
        {
            title: "Gina",
            description:"Gurds of the Amaterasu",
            imgUrl:warrior7,
        },
        {
            title: "Hiko",
            description:"Gurds of the Hibernia",
            imgUrl:warrior8,
        },
        {
            title: "Jena",
            description:"Gurds of the Amaterasu",
            imgUrl:warrior9,
        },
        {
            title: "Jimi",
            description:"Gurds of the Hibernia",
            imgUrl:warrior10,
        },
        {
            title: "Kiko",
            description:"Gurds of the Amaterasu",
            imgUrl:warrior11,
        },
        {
            title: "Limo",
            description:"Gurds of the Hibernia",
            imgUrl:warrior12,
        },
        {
            title: "Popo",
            description:"Gurds of the Amaterasu",
            imgUrl:warrior13,
        },
        {
            title: "Rosy",
            description:"Gurds of the Hibernia",
            imgUrl:warrior14,
        },
        {
            title: "Sora",
            description:"Gurds of the Amaterasu",
            imgUrl:warrior15,
        },
        {
            title: "Tori",
            description:"Gurds of the Hibernia",
            imgUrl:warrior16,
        },
        {
            title: "Toshi",
            description:"Gurds of the Amaterasu",
            imgUrl:warrior17,
        },
        {
            title: "Tuma",
            description:"Gurds of the Hibernia",
            imgUrl:warrior18,
        }
    ]

    
return(
<section className="project" id="projects">
    <Container>
        <Row>
            <Col>
            <h2>Family</h2>
            <p>
                A collection of family to shed their blood to save the mother land
            </p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Family</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Fighters</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Warrior</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project,index)=>{
                            return(
                                <ProjectCard key={index} {...project}/>
                            )
                        })}
                      </Row>
                    </Tab.Pane>
                   
                    <Tab.Pane eventKey="second">
                        <h3>Second tab pane</h3>
                            <Row>
                            {fighters.map((project,index)=>{
                                return(<ProjectCard key={index} {...project}/>)})}
                            </Row>
                    </Tab.Pane>

                        <Tab.Pane eventKey="third">
                         <Row>
                            {warrior.map((project,index)=>{
                                return(<ProjectCard key={index} {...project}/>)})}
                         </Row>
                         </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            </Col>
        </Row>
    </Container>
</section>
)
}

export default Projects;