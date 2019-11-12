import React, { Component } from 'react';
import Profil_Carte from '../Profil_Carte/Profil_Carte';
import Profil_Publication from '../Profil_Publication/Profil_Publication';
import { Container, Row, Col } from 'reactstrap';

class Profil extends Component {

    render() {

        const {profil_carte, profil_publication} = this.props.profilData;
        
        return (
            
            <Container>
                {/*<div>etat dans profil : {this.props.publication_like}</div>*/}
                <Row>
                    <Col 
                        sm="12" 
                        md={{ size: 6, offset: 3 }}
                    >
                        <Profil_Carte profil_carte={profil_carte} quelProfil={this.props.publication_like}/>
                    </Col>
                </Row>
                <Row>
                    <Col 
                        sm="12" 
                        md={{ size: 6, offset: 3 }}
                    >
                        <Profil_Publication profil_publication={profil_publication} quelLike={this.props.publication_like}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profil;