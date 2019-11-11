import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class Profil_Publication extends Component {

    constructor(props){
        super(props);
        this.state = {
            text : this.props.text
        }
    }
    render() {
        return (
            <div>
                {/*this.props.onSend*/}
                <Card body className="text-center">
                    <CardTitle>Dernière publication :</CardTitle>
                    <CardText>{this.props.text}</CardText>
                    <Button>C'est super !</Button>
                </Card>
{/*
                <Card body className="text-center">
                    <CardTitle>Dernière publication :</CardTitle>
                    <CardText>Je créerai la plus grande armée du monde !</CardText>
                    <Button>C'est super !</Button>
                </Card>

                <Card body className="text-center">
                    <CardTitle>Dernière publication :</CardTitle>
                    <CardText>Je deviendrai le roi des pirates !</CardText>
                    <Button>C'est super !</Button>
                </Card>
*/}
            </div>
        );
    }
}

export default Profil_Publication;