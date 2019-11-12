import './App.css';
import NavBar from './Composants/NavBar/NavBar';
import Profil from './Composants/Profil/Profil';
import BigMom from './Composants/Profil_Carte/BigMom.png';
import Kaido from './Composants/Profil_Carte/Kaido.png';
import Luffy from './Composants/Profil_Carte/Luffy.png';
import { Button } from 'reactstrap';
import React, { Component } from 'react';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      etat_page : 0, //Test de variable pour que chaque profil ait son propre nombre de like
      like_big_mom : 0
    }
    this.changerEtat_page = this.changerEtat_page.bind(this);
  }

  changerEtat_page(value) {
    this.setState(state => ({
        etat_page : value
      }));
  } 

  augmenterLikeBigMom(){
    let cpt = this.state.like_big_mom;
    this.setState(state => ({
      like_big_mom : cpt +1
    }));
  }

  render(){
    {/* Les données des différents profils, stockés dans un objet js*/}

    const profils = [
      {
        profil_carte:{
          background_color : "#ffffff",
          img : BigMom,
          alt : "Img Big Mom",
          prenom : "Charlotte",
          nom : "Linlin",
          date : "14 Avril 1951",

        },
        profil_publication:{
          text : "Je gouterai tous les gâteaux du monde !",
          like : this.state.like_big_mom
        }
      },
      {
        profil_carte:{
          background_color : "#ffffff",
          img : Kaido,
          alt : "Img Kaido",
          prenom : "Kaido",
          nom : "?",
          date : "11 Novembre 1949",

        },
        profil_publication:{
          text : "J'aurai la plus grande armée du monde !"
        }
      },
      {
        profil_carte:{
          background_color : "#ffffff",
          img : Luffy,
          alt : "Img Luffy",
          prenom : "Luffy",
          nom : "Monkey D.",
          date : "22 juillet 1997",

        },
        profil_publication:{
          text : "Je deviendrai le roi des pirates !"
        }
      }
    ];
    
    return (
      <div>
        {/*<div>etat : {this.state.etat_page}</div>*/}
        
        <NavBar 
          etat_zero={() => this.changerEtat_page(0)} 
          etat_un={() => this.changerEtat_page(1)}
          etat_deux={() => this.changerEtat_page(2)}/>
        <Profil profilData={profils[this.state.etat_page]} publication_like={this.state.etat_page}/>
      </div>
      
    );
  }
}

export default App;
