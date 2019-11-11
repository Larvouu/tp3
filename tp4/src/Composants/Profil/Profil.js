import React, { Component } from 'react';
import Profil_Carte from '../Profil_Carte/Profil_Carte';
import Profil_Publication from '../Profil_Publication/Profil_Publication';
import { Container, Row, Col } from 'reactstrap';
import BigMom from '../Profil_Carte/BigMom.png';
import Kaido from'../Profil_Carte/Kaido.png';
import Luffy from '../Profil_Carte/Luffy.png';

class Profil extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            cEstSuper : this.props.cEstSuper
        }
    }
    
    /*setEtat = (value) => {
        this.setState({etat : value})
    }
    */
    render() {
        return (
            <Container>
                <Row>
                    <Col 
                        sm="12" 
                        md={{ size: 6, offset: 3 }}
                    >
                        <Profil_Carte 
                            prenom="Charlotte"
                            nom="Linlin" 
                            date="14 Avril 1958" 
                            img={BigMom} 
                            alt="img Big Mom" 
                        />
                    </Col>
                </Row>
                <Row>
                    <Col 
                        sm="12" 
                        md={{ size: 6, offset: 3 }}
                    >
                        <Profil_Publication 
                            text="Je mangerai tous les gâteaux du monde !"
                            like={0}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profil;