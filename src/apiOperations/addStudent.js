export const addStudent = async (obj) => {
  const options = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    return await fetch("https://687bab4eb4bc7cfbda86bede.mockapi.io/students", options).then((res) =>
      res.json()
    );
      } catch (error) {
    console.log(error);
  }
  
  
}