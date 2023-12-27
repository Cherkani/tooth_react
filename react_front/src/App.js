import React from "react";
import Student from "./components/professor_task/Student";
import Professor from "./components/admin_task/Professor";
import Groupe from "./components/admin_task/Groupe";
import Groupe_student from "./components/professor_task/Groupe_student";

import Tooth from "./components/professor_task/Tooth";
import Statistiques from "./components/professor_task/StudentByGroupe";
import Pw from "./components/professor_task/Pw";
import Studentpws from "./components/professor_task/Studentpws";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Sidebar />} />
            <Route path="/groupe" element={<Groupe />} />

            <Route path="/professor" element={<Professor />} />
            <Route path="/student" element={<Student />} />
            <Route path="/tooths" element={<Tooth />} />

            <Route path="/groupestudent" element={<Groupe_student />} />
            <Route path="/statistics" element={<Statistiques />} />
            <Route path="/pws" element={<Pw />} />
            <Route path="/studentspws" element={<Studentpws />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
