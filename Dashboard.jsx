import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Menu from './Menu.jsx'
import axios from 'axios'; // Importation d'Axios


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

  & button {
    background-color: #26547C;
    color: white;
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

const StyledTitle = styled.h1`

  position: fixed;
  top: 50;
  left: 250px; /* Ajustement pour être à droite de la barre latérale */

`;






const ChecklistContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(38, 84, 124, 0.2); /* Ombre plus subtile */
  font-family: 'Arial', sans-serif; /* Typographie plus professionnelle */
 
`;

const ChecklistItem = styled.div`
  padding: 20px;
  width: 100%; /* Utilisation complète de la largeur */
  margin-bottom: 20px;
  background-color: #26547C;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out; /* Animation sur survol */

  &:hover {
    transform: translateY(-5px); /* Effet de survol */
    box-shadow: 0 8px 16px rgba(38, 84, 124, 0.2); /* Ombre sur survol */
  }

  & h3 {
    margin: 0 0 10px 0;
    color: #ffffff;
    font-size: 1.5em;
  }

  & p {
    margin: 0;
    color: #f8f9fa;
  }
`;

const TaskList = styled.ul`
  padding: 0;
  list-style-type: none;
  margin-top: 10px;
`;

const TaskItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 8px;
  border-left: 4px solid #26547C; /* Marqueur de bordure */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e2e2e2; /* Changement de couleur au survol */
  }
`;

const NoChecklists = styled.p`
  text-align: center;
  color: #888;
  font-size: 1.2em;
  font-style: italic;
  margin-top: 20px;
  font-family: 'Arial', sans-serif; /* Typographie plus professionnelle */
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #FFD166;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #FFD166;
  }
`;

const EditButton = styled(Button)`
  background-color:  #FFD166;

  &:hover {
    background-color: #21867A;
  }
`;

const ButtonNew = styled.button`
  background-color: #26547C;
  color: white;
`;
const StyledLink = styled(Link)`
  background-color: #26547C;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #FFD166;
    color: white;
  }
`;





const Dashboard = ({ checklists, setChecklists }) => {
  const baseUrl = "https://greenvelvet.alwaysdata.net/pfc"; // URL de base
  const token = "753e7163aad55fdf38139c82e319ab86b9e21568"; // Token d'authentification

    // Fonction pour supprimer une checklist
    const handleDelete = async (idx) => {
      const checklistToDelete = checklists[idx];
      const checklistId = checklistToDelete.id; // Assurez-vous d'avoir un ID valide
    
      try {
        // Envoi de la requête DELETE via Axios
        const response = await axios.delete(`${baseUrl}/checklist/delete/${checklistId}`, {
          headers: {
            token: token, // Passez le token dans les headers
          },
        });
    
        console.log("Réponse de la suppression:", response.data);
        
        // Mettre à jour l'état local pour supprimer la checklist de l'interface
        setChecklists(prevChecklists => prevChecklists.filter((_, index) => index !== idx));
        alert("Checklist supprimée avec succès !");
      } catch (error) {
        console.error("Erreur lors de la suppression de la checklist :", error);
        alert("Erreur lors de la suppression de la checklist.");
      }
    };
    // Fonction pour éditer une checklist (exemple simple)
    const handleEdit = (index) => {
      // Logique d'édition
      alert(`Édition de la checklist n°${index}`);
    };

  
  if (!checklists || checklists.length === 0) {
  return (

    <>
    <Menu />
    <StyledTitle>Dashboard</StyledTitle>
       
      {/* Barre de navigation latérale */}
     

      {/* Contenu principal */}
      <StyledDiv>
      
        
        <h2>Welcome  !</h2> 
        <h3>to your dashboard. View and manage your checklists below.</h3>

        <StyledP>
          No checklists have been created yet. <br/>
          Start by adding a new checklist!
          <br/>
          <br />
          
          <Link to="/form">
            <button>New</button>
          </Link>
         
        </StyledP>
      </StyledDiv>
      
    </> 
  );
}

// Si des checklists existent, on les affiche

return (
  <>
    <Menu /> {/* Ajout du Menu */}
    <ChecklistContainer>
      {checklists.map((checklist, idx) => (
        <ChecklistItem key={idx}>
          <h3>Title : {checklist.title}</h3>
          <h3>Description : {checklist.description}</h3>
          <h3>
            <strong>État :</strong> {["Vierge", "En cours", "Terminée"][checklist.state]}
          </h3>
          <TaskList>
            <h3>Task :</h3>
            {checklist.tasks.map((task, taskIdx) => (
              <TaskItem key={taskIdx}>
                <strong>{task.title}</strong> - {task.status === 0 ? "Non fait" : "Fait"}
                <p>{task.description}</p>
              </TaskItem>
            ))}
          </TaskList>
          <ButtonContainer>
            <EditButton onClick={() => handleEdit(idx)}>Edit</EditButton>
            <Button onClick={() => handleDelete(idx)}>Delete</Button>
          </ButtonContainer>
        </ChecklistItem>
      ))}
      
    </ChecklistContainer>
    <StyledLink to="/form">New</StyledLink>
  </>
);
};

export default Dashboard;
