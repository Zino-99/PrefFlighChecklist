import styled from 'styled-components';
import logo from './assets/Blue.png';
import { Link } from "react-router-dom";

// Composants de style
const StyledDiv = styled.div`
  max-width: 800px;
  margin-left: 220px; /* Espace pour le menu latéral */
  padding: 100px;
  font-family: Arial, sans-serif;


  & h3 {
    color: #555;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const StyledP = styled.p`
  text-align: center;
  color: #888;
  font-size: 1.2rem;
  padding: 20px;
  border: 1px dashed #aaa;
  border-radius: 8px;
`;

// Style pour la barre de navigation latérale
const StyledBar = styled.div`
  position: fixed; /* Fixe le menu sur le côté gauche */
  top: 0;
  left: 0;
  width: 200px; /* Largeur du menu */
  height: 100vh; /* Hauteur de l'écran */
  background-color: #FFFFFF;
  overflow: hidden;
  //box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Ombre pour séparer le menu du contenu */
  display: flex;
  flex-direction: column; /* Disposer les éléments verticalement */

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-top: 30px; /* Espace après le logo */
  }

  & li {
    width: 100%;
    padding-top: 0px;
  }

  & li a {
    display: block;
    color: Black;
    text-align: left;
    padding: 14px 20px;
    text-decoration: none;
    //border-bottom: 1px solid #ddd;
  }

  & li a:hover {
    background-color: #447cad;
    color: black;
  }

  & li a.active {
    background-color: #26547C;
    color: white;
  }
  
`;


const Menu = () => {
  return (

    <>

      {/* Barre de navigation latérale */}
      <StyledBar>
      <img src={logo} alt="Logo" />
        <ul>  
        
        <li><Link to="/" className="active">Dashboard</Link></li>
        <li><Link to="/Checklist">Checklist</Link></li>
        <li><Link to="/form">Formulaire</Link></li>
        <li><Link to="/help">Help</Link></li>
        </ul>
      </StyledBar>

     
    </>
  );
};

export default Menu;
