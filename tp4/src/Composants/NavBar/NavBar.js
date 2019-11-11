import React, { Component } from 'react';

import Navbar_bouton from '../Navbar_bouton/Navbar_bouton';

import './NavBar.css';

class NavBar extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            bouton : this.props.bouton
        }

    }

    renderButton(id_fct, text_fct, etat_fct) {
        return <Navbar_bouton id={id_fct} text={text_fct} etat={etat_fct}/>
    }

    render() {
        return (
            <div id="nav">
                {this.renderButton("big_mom_button","Big Mom", "bm")}
                {this.renderButton("kaido_btn", "Kaido", "k")}
                {this.renderButton("luffy_btn", "Luffy", "l")}
                {/*<Navbar_bouton id="big_mom_button" text="Big Mom" etat="bm"/>
                <Navbar_bouton id="kaido_btn" text="Kaido" etat="k"/>
                <Navbar_bouton id="luffy_btn" text="Luffy" etat="l"/>*/}
            </div>
        );
    }
}



export default NavBar;