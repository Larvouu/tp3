import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Navbar_bouton.css';
import Profil from '../Profil/Profil';

class Navbar_bouton extends Component {
    constructor(props){
        super(props);
        this.state = {
            //etat : "bm", // pour que le profil affiché d'office soit celui de Big Mom
            id : this.props.id,
            text : this.props.text
        }
    }
    render(props) {
        return (
            <Button 
                id={this.state.id} 
                outline color="secondary" 
                /*onClick={() => Profil.setEtat(this.props.etat)
                /*Profil.setState({etat : this.props.etat}, alert(this.props.etat))}*/
            >
                {this.state.text}
            </Button>
        );
    }
}

export default Navbar_bouton;