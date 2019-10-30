import React, { Component } from 'react';
import BigMom from '../BigMom/BigMom';
import Kaido from '../Kaido/Kaido';
import Luffy from '../Luffy/Luffy';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div id="nav">
                <BigMom/>
                <Kaido/>
                <Luffy/>
            </div>
        );
    }
}

export default NavBar;