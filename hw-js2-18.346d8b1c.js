function getStudents(){return fetch("http://localhost:3000/students").then(t=>t.json()).then(t=>renderStudents(t))}function renderStudents(t){return t.map(t=>{let u=t.skills.toString();return`
          <tr>
            <th>${t.id}/th>
            <th${t.name}</th>
            <th>${t.age}</th>
            <th>${t.cours}</th>
            <th>${u}</th>
            <th>${t.email}</th>
            <th>${t.isEnrolled}</th>
            <th><button type="button" id="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button></th>
            <th><button type="button" id="update">\u{41E}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{438}</button></th>
          </tr>
      
        `}).join("")}function addStudent(t){}function updateStudent(t){}function deleteStudent(t){}console.log(getStudents());
//# sourceMappingURL=hw-js2-18.346d8b1c.js.map
