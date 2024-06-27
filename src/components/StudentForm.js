import React, { useState, useEffect } from 'react';
import './StudentForm.css';

const StudentForm = ({ addStudent, currentStudent, updateStudent }) => {
  const [student, setStudent] = useState({ id: null, name: '', age: '' });

  useEffect(() => {
    if (currentStudent) {
      setStudent(currentStudent);
    }
  }, [currentStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.name.trim() && student.age.trim()) {
      if (student.id) {
        updateStudent(student);
      } else {
        addStudent(student);
      }
      setStudent({ id: null, name: '', age: '' });
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      {/* Temporary element to check rendering */}
      <div>StudentForm.</div>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Enter student name"
      />
      <input
        type="text"
        name="age"
        value={student.age}
        onChange={handleChange}
        placeholder="Enter student age"
      />
      <button type="submit">{student.id ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default StudentForm;
