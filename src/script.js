


// Функція для отримання всіх студентів

function getStudents() {
return fetch("http://localhost:3000/students")
  .then((res) => res.json()).then(data => renderStudents(data))
 }
console.log(getStudents())



// Функція для відображення студентів у таблиці
function renderStudents(students) {
return students.map((object) => {
    const skillsArr = object.skills
    const skillsStr = skillsArr.toString()
      const newObject = `
          <tr>
            <th>${object.id}/th>
            <th${object.name}</th>
            <th>${object.age}</th>
            <th>${object.cours}</th>
            <th>${skillsStr}</th>
            <th>${object.email}</th>
            <th>${object.isEnrolled}</th>
            <th><button type="button" id="delete">Видалити</button></th>
            <th><button type="button" id="update">Оновити</button></th>
          </tr>
      
        `;
      return newObject;
    }).join("");
}




// Функція для додавання нового студента
function addStudent(e) {
 // твій код

}



// Функція для оновлення студента
function updateStudent(id) {
 // твій код

 }


// Функція для видалення студента
function deleteStudent(id) {
    // твій код
}