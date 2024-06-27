import React, { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);

  const addStudent = (student) => {
    student.id = Date.now();
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const editStudent = (student) => {
    setCurrentStudent(student);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map((student) => (student.id === updatedStudent.id ? updatedStudent : student)));
    setCurrentStudent(null);
  };

  useEffect(() => {
    console.log('Students:', students);
  }, [students]);

  return (
    <div className="app">
      <h1>CRUD </h1>
      {/* Temporary element to check rendering */}
      <div></div>
      <StudentForm addStudent={addStudent} currentStudent={currentStudent} updateStudent={updateStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} editStudent={editStudent} />
    </div>
  );
};

export default App;
