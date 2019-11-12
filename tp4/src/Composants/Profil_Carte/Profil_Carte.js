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
            background_color : this.props.backgroundColor,
            background_colorBigMom : "#ffffff",
            background_colorKaio : "#ffffff",
            background_colorLuffy : "#ffffff"
        }      
    }


    render() {

        const profil_carte = this.props.profil_carte;
        // BIG MOM
        if(this.props.quelProfil == 0){
            return (
            <div class="profil_carte_margin">
                {/* La carte de Pofil */}
                    <Card className="text-left" style={{backgroundColor: this.state.background_colorBigMom}}>
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
                                                        onClick={() => this.setState({background_colorBigMom : "#4b7bec"})}>Bleu</Button>
                                                </Col>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#eb3b5a"}} 
                                                        onClick={() => this.setState({background_colorBigMom : "#eb3b5a"})}>Rouge</Button>
                                                </Col>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#26de81"}} 
                                                        onClick={() => this.setState({background_colorBigMom : "#26de81"})}>Vert</Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#d1d8e0"}} 
                                                        onClick={() => this.setState({background_colorBigMom : "#d1d8e0"})}>Gris</Button>
                                                </Col>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#a55eea"}} 
                                                        onClick={() => this.setState({background_colorBigMom : "#a55eea"})}>Violet</Button>
                                                </Col>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#fed330"}} 
                                                        onClick={() => this.setState({background_colorBigMom : "#fed330"})}>Jaune</Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={{size : 4, offset : 4}}>
                                                    <Button 
                                                        id="popover_btn_white"
                                                        onClick={() => this.setState({background_colorBigMom : "#ffffff"})}>Blanc</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </PopoverBody>
                                </UncontrolledPopover>
                            </CardBody>
                        </Container>
                    </Card>

            </div>
            );
        }//fin cas profil big mom

        //KAIDO
        if(this.props.quelProfil == 1){
            return (
            <div class="profil_carte_margin">
                {/* La carte de Pofil */}
                    <Card className="text-left" style={{backgroundColor: this.state.background_colorKaido}}>
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
                                                        onClick={() => this.setState({background_colorKaido : "#4b7bec"})}>Bleu</Button>
                                                </Col>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#eb3b5a"}} 
                                                        onClick={() => this.setState({background_colorKaido : "#eb3b5a"})}>Rouge</Button>
                                                </Col>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#26de81"}} 
                                                        onClick={() => this.setState({background_colorKaido : "#26de81"})}>Vert</Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#d1d8e0"}} 
                                                        onClick={() => this.setState({background_colorKaido : "#d1d8e0"})}>Gris</Button>
                                                </Col>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#a55eea"}} 
                                                        onClick={() => this.setState({background_colorKaido : "#a55eea"})}>Violet</Button>
                                                </Col>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#fed330"}} 
                                                        onClick={() => this.setState({background_colorKaido : "#fed330"})}>Jaune</Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={{size : 4, offset : 4}}>
                                                    <Button 
                                                        id="popover_btn_white"
                                                        onClick={() => this.setState({background_colorKaido : "#ffffff"})}>Blanc</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </PopoverBody>
                                </UncontrolledPopover>
                            </CardBody>
                        </Container>
                    </Card>

            </div>
            );
        }//fin cas profil Kaido

        //LUFFY
        if(this.props.quelProfil == 2){
            return (
            <div class="profil_carte_margin">
                {/* La carte de Pofil */}
                    <Card className="text-left" style={{backgroundColor: this.state.background_colorLuffy}}>
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
                                                        onClick={() => this.setState({background_colorLuffy : "#4b7bec"})}>Bleu</Button>
                                                </Col>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#eb3b5a"}} 
                                                        onClick={() => this.setState({background_colorLuffy : "#eb3b5a"})}>Rouge</Button>
                                                </Col>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#26de81"}} 
                                                        onClick={() => this.setState({background_colorLuffy : "#26de81"})}>Vert</Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#d1d8e0"}} 
                                                        onClick={() => this.setState({background_colorLuffy : "#d1d8e0"})}>Gris</Button>
                                                </Col>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#a55eea"}} 
                                                        onClick={() => this.setState({background_colorLuffy : "#a55eea"})}>Violet</Button>
                                                </Col>
                                                <Col sm={{size : 4}}>
                                                    <Button 
                                                        style={{backgroundColor : "#fed330"}} 
                                                        onClick={() => this.setState({background_colorLuffy : "#fed330"})}>Jaune</Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={{size : 4, offset : 4}}>
                                                    <Button 
                                                        id="popover_btn_white"
                                                        onClick={() => this.setState({background_colorLuffy : "#ffffff"})}>Blanc</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </PopoverBody>
                                </UncontrolledPopover>
                            </CardBody>
                        </Container>
                    </Card>

            </div>
            );
        }//fin cas profil Luffy
        else{
            alert('erreur : état du profil = '+this.props.quelProfil);
            return null;
        }
    }
}


export default Profil_Carte;