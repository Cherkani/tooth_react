import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    students: [],
    pws: [],
    selectedStudent: "",
    selectedPw: "",
    isSaving: false,
  });

  useEffect(() => {
    // Fetch students and pws from the server
    axios
      .get("http://localhost:8080/api/v1/students")
      .then((response) =>
        setFormData((prev) => ({ ...prev, students: response.data }))
      );

    axios
      .get("http://localhost:8080/api/v1/pws")
      .then((response) =>
        setFormData((prev) => ({ ...prev, pws: response.data }))
      );
  }, []);

  const handleStudentChange = (event) => {
    setFormData((prev) => ({ ...prev, selectedStudent: event.target.value }));
  };

  const handlePwChange = (event) => {
    setFormData((prev) => ({ ...prev, selectedPw: event.target.value }));
  };

  const handleSave = () => {
    const { selectedStudent, selectedPw, isSaving } = formData;

    if (!selectedStudent || !selectedPw || isSaving) {
      // Ajoutez une logique pour gérer le cas où les champs ne sont pas sélectionnés
      return;
    }

    setFormData((prev) => ({ ...prev, isSaving: true }));

    const data = {
      student_id: parseInt(selectedStudent),
      pw_id: parseInt(selectedPw),
    };

    axios
      .post("http://localhost:8080/api/v1/studentpws", data)
      .then((response) => {
        // Gérez le succès si nécessaire
        console.log(response.data);
      })
      .catch((error) => {
        // Gérez l'erreur si nécessaire
        console.error(error);
      })
      .finally(() => {
        setFormData((prev) => ({ ...prev, isSaving: false }));
      });
  };

  const { students, pws, selectedStudent, selectedPw, isSaving } = formData;

  return (
    <div className="flex flex-col min-h-screen items-center font-body w-full bg-indigo-100">
      <div className="flex flex-col items-center w-5/6 ml-[90px]">
        <p className="m-12 text-4xl font-bold bg-white w-full py-4 pl-12 rounded-xl text-indigo-500 shadow-xl border border-indigo-300">
          <span>
            <FontAwesomeIcon className="mr-4" icon={faUserGraduate} />
          </span>
          Student Form
        </p>
        <div className="flex w-1/2 m-4 bg-white p-5 rounded-xl justify-center border border-indigo-300 shadow-xl">
          <label className="mr-4">Select Student:</label>
          <select
            className="text-gray-700 outline-none border-gray-300 border py-1 pl-4 rounded-xl focus:ring-1 w-1/2"
            onChange={handleStudentChange}
            value={selectedStudent}
          >
            <option value="">Select Student</option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.firstName} {student.lastName}
              </option>
            ))}
          </select>

          <label className="ml-4">Select PW:</label>
          <select
            className="text-gray-700 outline-none border-gray-300 border py-1 pl-4 rounded-xl focus:ring-1 w-1/2"
            onChange={handlePwChange}
            value={selectedPw}
          >
            <option value="">Select PW</option>
            {pws.map((pw) => (
              <option key={pw.id} value={pw.id}>
                {pw.title}
              </option>
            ))}
          </select>

          <button
            className={`w-1/4 ml-10 ${
              isSaving ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSave}
            disabled={isSaving}
          >
            <div className="flex items-center justify-center py-2 px-8 rounded-xl text-white bg-indigo-500 hover:bg-indigo-600">
              <FontAwesomeIcon icon={faSave} className="mr-4" />
              <p className="text-lg font-semibold">Save</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
