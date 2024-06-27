import React from 'react';
import './StudentList.css';

const StudentList = ({ students, deleteStudent, editStudent }) => {
  return (
    <ul className="student-list">
      {/* Temporary element to check rendering */}
      <div>StudentList is rendering...</div>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} ({student.age})
          <button onClick={() => editStudent(student)}>Edit</button>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
