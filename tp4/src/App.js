import './App.css';
import NavBar from './Composants/NavBar/NavBar';
import Profil from './Composants/Profil/Profil';
import BigMom from './Composants/Profil_Carte/BigMom.png';
import Kaido from './Composants/Profil_Carte/Kaido.png';
import Luffy from './Composants/Profil_Carte/Luffy.png';
import { Button } from 'reactstrap';
import React, { Component } from 'react';


class App extends Component {
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
          text : "Je gouterai tous les gâteaux du monde !"
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
        <NavBar />
        <Profil profilData={profils[1]}/>
        
        
      </div>
      
    );
  }
}

export default App;
