import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Navbar_bouton.css';
import Profil from '../Profil/Profil';
import App from '../../App';

class Navbar_bouton extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.id,
            text : this.props.text
        }
    }
    render(props) {
        return (
            <Button 
                id={this.state.id} 
                outline color="secondary" 
                onClick={this.props.etat}
            >
                {this.state.text}
            </Button>
        );
    }
}

export default Navbar_bouton;