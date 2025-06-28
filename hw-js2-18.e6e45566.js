function getStudents(){return fetch("http://localhost:3000/students").then(t=>t.json()).then(t=>{document.querySelector("tbody").innerHTML=renderStudents(t).join("")})}function renderStudents(t){return t.map(t=>{let u=t.skills.join(", ");return`
      <tr>
        <td>${t.id}</td>
        <td>${t.name}</td>
        <td>${t.age}</td>
        <td>${t.course}</td>
        <td>${u}</td>
        <td>${t.email}</td>
        <td>${t.isEnrolled}</td>
        <td><button type="button" class="delete-btn">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button></td>
        <td><button type="button" class="update-btn">\u{41E}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{438}</button></td>
      </tr>
    `})}function addStudent(t){}function updateStudent(t){}function deleteStudent(t){}getStudents();
//# sourceMappingURL=hw-js2-18.e6e45566.js.map
