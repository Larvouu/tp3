import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Profil_Publication.css'

class Profil_Publication extends Component {

    constructor(props){
        super(props);
        this.state = {
            text : this.props.text,
            like : this.props.like
        }
    }
    render() {

        const profil_publication = this.props.profil_publication;

        return (
            <div>
                {/*this.props.onSend*/}
                <Card body className="text-center">
                    <CardText id="card_text">{profil_publication.text}</CardText>
                    <Container>
                        <Row>
                            <Col sm={{size:5, offset:1}}>
                                <Button onClick={() => this.setState({like : this.state.like + 1})}>C'est super !</Button>
                            </Col>
                            <Col>
                                Likes : {this.state.like}
                            </Col>
                        </Row>
                    </Container>
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