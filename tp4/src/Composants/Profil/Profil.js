import React, { Component } from 'react';
import Profil_Carte from '../Profil_Carte/Profil_Carte';
import Profil_Publication from '../Profil_Publication/Profil_Publication';
import { Container, Row, Col } from 'reactstrap';

class Profil extends Component {


    render() {

        const {profil_carte, profil_publication} = this.props.profilData;

        return (
            <Container>
                <Row>
                    <Col 
                        sm="12" 
                        md={{ size: 6, offset: 3 }}
                    >
                        <Profil_Carte profil_carte={profil_carte}/>
                    </Col>
                </Row>
                <Row>
                    <Col 
                        sm="12" 
                        md={{ size: 6, offset: 3 }}
                    >
                        <Profil_Publication profil_publication={profil_publication} like={0}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profil;