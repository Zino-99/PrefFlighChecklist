import React, { useState } from "react";
import styled from "styled-components";
import Menu from './Menu';
import axios from 'axios'; // Importation d'Axios


// Styled components 

const FormContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 100px;
  background-color: #26547C;
  border-radius: 8px;
  box-shadow: 0 4px 8px;
  color: #26547C;
  & button {
    padding: 10px 20px;
    background-color: #FFD166;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    &:hover {
      background-color: #45a049;
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  color: #ffffff;
  font-size: 20px;
  margin-top: 30px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #26547C;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  &:hover {
    background-color: #45a049;
  }
`;

const TaskList = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const NoTasks = styled.p`
  font-size: 18px;
  color: #777;
  text-align: center;
  margin-top: 20px;
  font-style: italic;
`;

const TaskItem = styled.div`
  background-color: #fff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #f1f1f1;
    transform: translateY(-2px);
  }
`;




const Form = ({ addChecklist }) => {

   // State pour la checklist (titre, description, état, tâches)

  const [checklist, setChecklist] = useState({
    title: "",
    description: "",
    state: 0,
    tasks: [],
  });

  // State pour une tâche  (titre, description, statut)


  const [task, setTask] = useState({
    title: "",
    description: "",
    status: 0,
  });

 

  // Ajouter une tâche à la checklist
  const addTask = () => {

     // Vérification que le titre de la tâche n'est pas vide

    if (task.title.trim() === "") {
      // Si vide, afficher un message
      alert("Le titre de la tâche est obligatoire!");
      return;
    }
    setChecklist((lastValue) => ({
      ...lastValue,
      tasks: [...lastValue.tasks, task],
    }));
    setTask({ title: "", description: "", status: 0 });
  };


  const url = "https://greenvelvet.alwaysdata.net/pfc";
 


  // Fonction pour enregistrer la checklist en envoyant une requête POST via Axios
  const handleSaveChecklist = async () => {
    const baseUrl = "https://greenvelvet.alwaysdata.net/pfc";
  
    // Pas dans la vraie vie, juste pour cet exemple
     const token = "753e7163aad55fdf38139c82e319ab86b9e21568";
  
    const body = {
      title: "check1",
      description: "first checklist",
      todo: [
        { title: "task 1", description: "task 1" },
        { title: "task 2", description: "task 2" }
      ]
    };
    addChecklist(checklist);  // Ajoute la checklist au parent

    // Réinitialise la checklist et les tâches après l'ajout
    setChecklist({ title: "", description: "", state: 0, tasks: [] });
    setTask({ title: "", description: "", status: 0 });
  
    try {
      // Axios POST request
      const response = await axios.post(baseUrl + "/checklist/add", body, {
        headers: {
          token: token,
        }
      });
  
      // En cas de succès
      console.log("Réponse de l'API :", response.data);
      alert("Checklist enregistrée avec succès !");  // Si la requête est réussie, afficher une alerte de succès
    } catch (error) {

      // En cas d'erreur

      console.error("Erreur lors de l'enregistrement de la checklist :", error);
      alert(
        "Erreur lors de l'enregistrement de la checklist : " +
        (error.response?.data?.error || "Une erreur inattendue s'est produite.")
      );
    }
  };
  
  
  return (
    <FormContainer>
      <Menu /> {/* Composant Menu pour la navigation */}
      <Title>Create a Checklist</Title>
      {/* Titre et description de la checklist */}
      <Label>
      Checklist Title :
        <Input
          type="text"
          value={checklist.title}
          onChange={(e) =>
            setChecklist((lastValue) => ({ ...lastValue, title: e.target.value }))
          }
        />
      </Label>
      <Label>
      Description of the checklist :
        <TextArea
          value={checklist.description}
          onChange={(e) =>
            setChecklist((lastValue) => ({
              ...lastValue,
              description: e.target.value,
            }))
          }
        />
      </Label>
      <Label>
        État :
        <Select
          value={checklist.state}
          onChange={(e) =>
            setChecklist((lastValue) => ({
              ...lastValue,
              state: parseInt(e.target.value),
            }))
          }
        >
          <option value={0}>Blank</option>
          <option value={1}>In progress</option>
          <option value={2}>Completed</option>
        </Select>
      </Label>

      {/* Ajout d'une tâche */}

      <SectionTitle>Add a Task</SectionTitle>
      <Label>
      Task Title :
        <Input
          type="text"
          value={task.title}
          onChange={(e) =>
            setTask((lastValue) => ({ ...lastValue, title: e.target.value }))
          }
        />
      </Label>
      <Label>
      Task Description :
        <TextArea
          value={task.description}
          onChange={(e) =>
            setTask((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </Label>
      <Label>
        Statut :
        <Select
          value={task.status}
          onChange={(e) =>
            setTask((prev) => ({ ...prev, status: parseInt(e.target.value) }))
          }
        >
          <option value={0}>No done</option>
          <option value={1}>Done</option>
        </Select>
      </Label>
      <Button onClick={addTask}>Add Task</Button>

        {/* Affichage des tâches ajoutées */}

        <SectionTitle>Added tasks :</SectionTitle>
      <TaskList>
        {checklist.tasks.length === 0 ? (
          <NoTasks>No tasks added.</NoTasks>
        ) : (
          checklist.tasks.map((task, index) => (
            <TaskItem key={index}>
              <strong>{task.title}</strong> -{" "}
              {task.status === 0 ? "Non fait" : "Fait"}
              <p>{task.description}</p>
            </TaskItem>
          ))
        )}
      </TaskList>

      {/* Enregistrer la checklist */}
      <Button onClick={handleSaveChecklist}>SAVE</Button>
    </FormContainer>
  );
};

export default Form;
