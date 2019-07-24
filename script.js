  let titulo = document.querySelector('.titulo')
  let cliente = document.querySelector('.cliente-id')
  let conteudo = document.querySelector('.body')
  let buttom = document.querySelector('.puxar')
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => titulo.textContent = json.title)

  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => cliente.textContent = json.userId)

  buttom.onclick = function () {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json))
          


  }