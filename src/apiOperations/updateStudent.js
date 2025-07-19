export const updateStudent = async (id, student) => {
  const options = {
    method: "PUT",

    body: JSON.stringify(student),

    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
    try {
    return await fetch(
      `https://687bab4eb4bc7cfbda86bede.mockapi.io/students/${id}`,
      options
    ).then((response) => response.json());
    } catch (error) {
    console.log(error);
  }

 }