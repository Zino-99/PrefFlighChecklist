import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form';
import Checklist from './Checklist';
import axios from 'axios';
import Dashboard from './Dashboard';

function App() {
  // L'état pour stocker toutes les checklists
  const [checklists, setChecklists] = useState([]);

  // Fonction pour ajouter une nouvelle checklist
  const addChecklist = (newChecklist) => {
    setChecklists((prevChecklists) => [...prevChecklists, newChecklist]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard checklists={checklists}/>} />
        <Route path="/form" element={<Form addChecklist={addChecklist} />} />
        <Route path="/checklist" element={<Checklist checklists={checklists} />} />
      </Routes>
    </Router>
  );
}

export default App;
