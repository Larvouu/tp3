import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Profil_Publication.css'

class Profil_Publication extends Component {

    constructor(props){
        super(props);
        this.state = {
            text : this.props.text,
            like : this.props.like,
            likeBigMom : 0,
            likeKaido : 0,
            likeLuffy : 0
        }
        this.augmenterLikeBigMom = this.augmenterLikeBigMom.bind(this);
        this.augmenterLikeKaido = this.augmenterLikeKaido.bind(this);
        this.augmenterLikeLuffy = this.augmenterLikeLuffy.bind(this);
    }

    augmenterLikeBigMom(){
        const cpt = this.state.likeBigMom
        this.setState(state => ({
            likeBigMom : cpt+1
          }));
    }
    augmenterLikeKaido(){
        const cpt = this.state.likeKaido
        this.setState(state => ({
            likeKaido : cpt+1
          }));
    }
    augmenterLikeLuffy(){
        const cpt = this.state.likeLuffy
        this.setState(state => ({
            likeLuffy : cpt+1
          }));
    }

    render() {

        const profil_publication = this.props.profil_publication;
        //Le cas like big mom
        if(this.props.quelLike == 0){
            return (
                <div>
                    {/*this.props.onSend*/}
                    <Card body className="text-center">
                        <CardText id="card_text">{profil_publication.text}</CardText>
                        <Container>
                            <Row>
                                <Col sm={{size:5, offset:1}}>
                                    <Button onClick={this.augmenterLikeBigMom}>C'est super !</Button>
                                </Col>
                                <Col>
                                    Likes : {this.state.likeBigMom}
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </div>
            );
        }  //Fin cas like big mom 
        else if(this.props.quelLike == 1){
            return (
                <div>
                    {/*this.props.onSend*/}
                    <Card body className="text-center">
                        <CardText id="card_text">{profil_publication.text}</CardText>
                        <Container>
                            <Row>
                                <Col sm={{size:5, offset:1}}>
                                    <Button onClick={this.augmenterLikeKaido}>C'est super !</Button>
                                </Col>
                                <Col>
                                    Likes : {this.state.likeKaido}
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </div>
            );
        }  //Fin cas like Kaido
        else if(this.props.quelLike == 2){
            return (
                <div>
                    {/*this.props.onSend*/}
                    <Card body className="text-center">
                        <CardText id="card_text">{profil_publication.text}</CardText>
                        <Container>
                            <Row>
                                <Col sm={{size:5, offset:1}}>
                                    <Button onClick={this.augmenterLikeLuffy}>C'est super !</Button>
                                </Col>
                                <Col>
                                    Likes : {this.state.likeLuffy}
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </div>
            );
        }  //Fin cas like Luffy
        else {
            alert('erreur : état du profil non reconnu dans Profil_Publication, l\'état est : ' + this.props.quelLike)
            return(
                null
            );
        }
    }
}

export default Profil_Publication;