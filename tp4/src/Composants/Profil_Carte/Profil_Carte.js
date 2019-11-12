import React, { Component } from 'react';
import './Profil_Carte.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'; // Popover pour changer de couleur de background 

class Profil_Carte extends Component {

    

    constructor(props){
        super(props);
        this.state = {
            img : this.props.img,
            alt : this.props.alt,
            prenom : this.props.prenom,
            nom : this.props.nom,
            date : this.props.date,
            background_color : this.props.backgroundColor
        }
        // Cette liaison est nécéssaire afin de permettre
        // l'utilisation de `this` dans la fonction de rappel. (source : https://fr.reactjs.org/docs/handling-events.html)
        this.handleClickBleu = this.handleClickBleu.bind(this);
        this.handleClickRouge = this.handleClickRouge.bind(this);
        this.handleClickVert = this.handleClickVert.bind(this);
        this.handleClickGris = this.handleClickGris.bind(this);
        this.handleClickViolet = this.handleClickViolet.bind(this);
        this.handleClickJaune = this.handleClickJaune.bind(this);
        this.handleClickBlanc = this.handleClickBlanc.bind(this);
    }

    
    handleClickBleu() {
        this.setState(state => ({
            background_color : "#4b7bec"
          }));
    }
    handleClickRouge() {
        this.setState(state => ({
            background_color : "#eb3b5a"
          }));
    }
    handleClickVert() {
        this.setState(state => ({
            background_color : "#26de81"
          }));
    }
    handleClickGris() {
        this.setState(state => ({
            background_color : "#d1d8e0"
          }));
    }
    handleClickViolet() {
        this.setState(state => ({
            background_color : "#a55eea"
          }));
    }
    handleClickJaune() {
        this.setState(state => ({
            background_color : "#fed330"
          }));
    }
    handleClickBlanc() {
        this.setState(state => ({
            background_color : "#ffffff"
          }));
    }

    render() {

        const profil_carte = this.props.profil_carte;

        return (
           <div class="profil_carte_margin">
               {/* La carte de Pofil */}
                <Card className="text-left" style={{backgroundColor: this.state.background_color}}>
                    <CardImg top width="100%" src={profil_carte.img} alt={profil_carte.alt} />
                    {/* Le contenu = texte */}
                    <Container>
                        <Row className="row">
                            <Col sm={{size : 5, offset : 1}} >
                                Prénom : {profil_carte.prenom}
                            </Col>
                            <Col sm={{size : 5, offset : 1}} >
                                Nom : {profil_carte.nom}
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col sm={{size : 6, offset : 1}} >
                                Né(e) le : {profil_carte.date}
                            </Col>
                        </Row>
                        {/* Le bouton changer style */}
                        <CardBody className="text-right">
                            <Button id="PopoverLegacy">Changer style</Button>
                            {/* Le Popover du bouton. Popover Legacy = il dégage quand on clique à côté + on peut clicker dedans sans qu'il disparaisse */}
                            <UncontrolledPopover trigger="legacy" placement="right" target="PopoverLegacy">
                                {/* Le titre du Popover */}
                                <PopoverHeader className="text-center">Choisissez votre couleur !</PopoverHeader>
                                {/* Le contenu du Popover = Les boutons */}
                                <PopoverBody>
                                    <Container>
                                        <Row>
                                            <Col sm={{size : 4}}>
                                                <Button 
                                                    style={{backgroundColor : "#4b7bec"}} 
                                                    onClick={this.handleClickBleu}>Bleu</Button>
                                            </Col>
                                            <Col sm={{size : 4}}>
                                                <Button 
                                                    style={{backgroundColor : "#eb3b5a"}} 
                                                    onClick={this.handleClickRouge}>Rouge</Button>
                                            </Col>
                                            <Col sm={{size : 4}}>
                                                <Button 
                                                    style={{backgroundColor : "#26de81"}} 
                                                    onClick={this.handleClickVert}>Vert</Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={{size : 4}}>
                                                <Button 
                                                    style={{backgroundColor : "#d1d8e0"}} 
                                                    onClick={this.handleClickGris}>Gris</Button>
                                            </Col>
                                            <Col sm={{size : 4}}>
                                                <Button 
                                                    style={{backgroundColor : "#a55eea"}} 
                                                    onClick={this.handleClickViolet}>Violet</Button>
                                            </Col>
                                            <Col sm={{size : 4}}>
                                                <Button 
                                                    style={{backgroundColor : "#fed330"}} 
                                                    onClick={this.handleClickJaune}>Jaune</Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={{size : 4, offset : 4}}>
                                                <Button 
                                                    id="popover_btn_white"
                                                    onClick={this.handleClickBlanc}>Blanc</Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </PopoverBody>
                            </UncontrolledPopover>
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