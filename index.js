function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`,
    }),
  })
  .then(response => response.json())
  .then((data) => {
    let info = document.querySelector("div");
    info.id = data.id;
  })
  .catch(function (error) {
    let info = document.querySelector("div");
    info.id = error.message;
  });
}