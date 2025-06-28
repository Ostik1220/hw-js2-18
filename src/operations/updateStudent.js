export function updateStudent(id, student) {
  const options = {
    method: "PATCH",

    body: JSON.stringify(student),

    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
    {
    return fetch(
      `http://localhost:3000/students/${id}`,
      options
    ).then((response) => response.json());
  }

 }