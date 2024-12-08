import React from "react";
import styled from "styled-components";
import Menu from './Menu'; // Assurez-vous que Menu.jsx est bien importé

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



const Checklist = ({ checklists, setChecklists }) => {
  // Supprimer une checklist
 

  // Éditer une checklist
  const handleEdit = (idx) => {
   
  };

  if (!checklists || checklists.length === 0) {
    return (
      <>
        <Menu />
        <ChecklistContainer>
          <NoChecklists>No checklists have been created yet.</NoChecklists>
        </ChecklistContainer>
      </>
    );
  }

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
                  <h2>{task.description}</h2>
                </TaskItem>
              ))}
            </TaskList>
            
          </ChecklistItem>
        ))}
      </ChecklistContainer>
    </>
  );
};

export default Checklist;
