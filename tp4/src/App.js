import React from 'react';
import './App.css';
import NavBar from './Composants/NavBar/NavBar';
import Profil from './Composants/Profil/Profil';

function App() {
  /*const profils = [
    {
      nom: bigMom
    },
    {
      nom: kaido
    },
    {
      nom: luffy
    }
  ];
*/
  return (
    <div>
      <NavBar/>
      <Profil />
      
    </div>
    
  );
}

export default App;
