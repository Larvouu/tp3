import React, { Component } from 'react';
import BigMom from './BigMom.png';
import './Profil_Carte.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class Profil_Carte extends Component {
    render() {
        return (
           <div id="profil_carte_margin">
                <Card>
                    <CardImg top width="100%" src={BigMom} alt="Card image Big Mom" />
                    <CardBody>
                        <CardTitle>Charlotte Linlin</CardTitle>
                        <CardSubtitle>14 Avril 1969</CardSubtitle>
                        <CardText>Prime : ?</CardText>
                        <Button outline>Changer style</Button>
                    </CardBody>
                </Card>
           </div>
        );
    }
}

export default Profil_Carte;