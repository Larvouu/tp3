import React, { Component } from 'react';
import './Profil_Carte.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class Profil_Carte extends Component {

    constructor(props){
        super(props);
        this.state = {
            img : this.props.img,
            alt : this.props.alt,
            prenom : this.props.prenom,
            nom : this.props.nom,
            date : this.props.date,
            prime : this.props.prime
        }
    }
    render() {
        return (
           <div class="profil_carte_margin">
                <Card className="text-left">
                    <CardImg top width="100%" src={this.props.img} alt={this.props.alt} />
                    <Container>
                        <Row className="row">
                            <Col sm={{size : 5, offset : 1}} md={{size : 5, offset : 1}}>
                                {this.state.prenom}
                            </Col>
                            <Col sm={{size : 5, offset : 1}} md={{size : 5, offset : 1}}>
                                {this.state.nom}
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col sm={{size : 5, offset : 1}} md={{size : 5, offset : 1}}>
                                Anniversaire : {this.state.date}
                            </Col>
                            <Col sm={{size : 5, offset : 1}} md={{size : 5, offset : 1}}>
                                Prime : {this.state.prime} Berry
                            </Col>
                        </Row>
                        <CardBody className="text-right">
                            <Button outline>Changer style</Button>
                        </CardBody>
                    </Container>
                </Card>
{/*
                <Card className="text-center">
                    <CardImg top width="100%" src={Kaido} alt="Card image Kaido" />
                    <CardBody>
                        <CardTitle>Kaido aux Cent Bêtes</CardTitle>
                        <CardSubtitle>24 décembre 1953</CardSubtitle>
                        <CardText>Prime : ?</CardText>
                        
                    </CardBody>
                    <CardBody className="text-right">
                        <Button outline>Changer style</Button>
                    </CardBody>
                </Card>

                <Card className="text-center">
                    <CardImg top width="100%" src={Luffy} alt="Card image Kaido" />
                    <CardBody>
                        <CardTitle>Monkey D. Luffy</CardTitle>
                        <CardSubtitle>22 juillet 1997</CardSubtitle>
                        <CardText>Prime : 1.500.000 B</CardText>
                        
                    </CardBody>
                    <CardBody className="text-right">
                        <Button outline>Changer style</Button>
                    </CardBody>
                </Card>
*/}
           </div>
        );
    }
}


export default Profil_Carte;