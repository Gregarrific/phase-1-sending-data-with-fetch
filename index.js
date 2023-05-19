// document.addEventListener('DOMContentLoaded', e => {
//     document.addEventListener('submit', submitData(e));
// };

function submitData(name, email) {
    const postObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: `${name}`,
          email: `${email}`,
        }),
      };
    // console.log(postObject);
    return fetch('http://localhost:3000/users', postObject)
    .then(response => response.json());
}

function fetchData(resource) {
    
    return fetch(`http://localhost:3000/dogs`)
    .then(resp => resp.json())
    .then(json => renderData(json))
  }

  function renderData(data) {
    // console.log(data);
    const main = document.querySelector('div');
    data.forEach(item => {
      const h2 = document.createElement('h2');
      h2.innerHTML = item.dogName;
      main.appendChild(h2);
    });
  }