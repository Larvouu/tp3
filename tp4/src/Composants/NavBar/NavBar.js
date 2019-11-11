import React, { Component } from 'react';

import Navbar_bouton from '../Navbar_bouton/Navbar_bouton';

import './NavBar.css';

class NavBar extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            etat : this.props.etat
        }
        this.changerEtat = this.changerEtat.bind(this);
    }

    changerEtat = (value) => {
        this.setState(state => ({
            etat : value
          }));
        alert ('etat : '+ value);
    }

    render() {
        return (
            <div id="nav">
                <Navbar_bouton id="big_mom_button" text="Big Mom" etat={() => this.changerEtat(0)}/>
                <Navbar_bouton id="kaido_btn" text="Kaido" etat={() => this.changerEtat(1)}/>
                <Navbar_bouton id="luffy_btn" text="Luffy" etat={() => this.changerEtat(2)}/>
            </div>
        );
    }
}



export default NavBar;