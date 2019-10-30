import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class Profil_Publication extends Component {
    render() {
        return (
            <div>
                <Card body className="text-center">
                    <CardTitle>Dernière publication</CardTitle>
                    <CardText>Salut</CardText>
                    <Button>C'est super !</Button>
                </Card>
            </div>
        );
    }
}

export default Profil_Publication;