import { addStudent } from "./ApiOperations/addStudent";
import { deleteStudent } from "./ApiOperations/deleteStudents";
import { getStudents } from "./ApiOperations/getStudentsObject";
import { updateStudent } from "./ApiOperations/updateStudent";

document.querySelector("#get-students-btn").addEventListener("click", async () => {
return await getStudents(); 
})



const form =  document.querySelector("#add-student-form")
 
const collectInfo = (form) => {
  form.addEventListener("submit", async (e) => {
  e.preventDefault()
      const name = e.target.elements.nameCollect.value;
      const age = e.target.elements.ageCollect.value;
      const course = e.target.elements.courseCollect.value;
      const skills = e.target.elements.skillsCollect.value.split(", ");
      const email = e.target.elements.emailCollect.value;
      let isEnrolled;
      if(e.target.elements.isEnrolledCollect.value === "on"){
 isEnrolled = true;
      } else {
 isEnrolled = false;
      }
      
  const student = {
        name : name,
        age : age,
        course : course,
        skills : skills,
        email : email,
        isEnrolled : isEnrolled
  }
  try{
  await addStudent(student)
  } catch (error) {
        console.error(error);
      }

 })
  }

 console.log(collectInfo(form))



// Функція для оновлення студента 

document.querySelector("tbody").addEventListener("click", async (e) => {
  if (e.target.textContent === "Оновити") {
    const buttonSection = e.target.parentElement;
    const item = buttonSection.parentElement;
    console.log(item.id);
    document.querySelector(`.backdrop`).style.visibility = "visible";
    document.querySelector(`.backdrop`).style.display = "flex";
    document.querySelector("#update-student-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = e.target.elements.nameCollect.value;
      const age = e.target.elements.ageCollect.value;
      const course = e.target.elements.courseCollect.value;
      const skills = e.target.elements.skillsCollect.value.split(", ");
      const email = e.target.elements.emailCollect.value;
      const isEnrolled = e.target.elements.isEnrolledCollect.checked;
      const student = {
        name: name,
        age: age,
        course: course,
        skills: skills,
        email: email,
        isEnrolled: isEnrolled
      };
      document.querySelector(`.backdrop`).style.visibility = "hidden";
      document.querySelector(`.backdrop`).style.display = "none";
      try {
        await updateStudent(item.id, student);
      } catch (error) {
        console.error(error);
      }
    });
  }
});


// Функція для видалення студента

document.querySelector("tbody").addEventListener("click", async (e) => {
  if (e.target.textContent === "Видалити") {
    const buttonSection = e.target.parentElement;
    const item = buttonSection.parentElement
    console.log(item.id);
    try{
    await deleteStudent(item.id);
    await getStudents();
    } catch (error){
      console.log(error)
    }
  } 
})

