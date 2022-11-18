//Aviso

function aviso() {
  alert('Esse site foi feito junto á uma API que eu mesmo fiz, ela está no meu GitHub, caso queira testar essa página com o API basta baixar e rodar o server')
}

function msg() {
  alert('Está página funciona! Caso queira me dar um feedback, digite um email válido e me mande uma mensagem 😉')
}

function msg2() {
  alert('Essa página funciona com e sem a API, caso não queira testar com a API bastar digitar: "Email: admin@admin" e qualquer senha!')
}

// Perguntas frequentes

let acc = document.getElementsByClassName("accordion-question");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let accordionanswear = this.nextElementSibling;
    if (accordionanswear.style.display === "block") {
      accordionanswear.style.display = "none";
    } else {
      accordionanswear.style.display = "block";
    }
  });
}

function home() {
  location.href = 'index.html'
}


//Guarda as informações do cadastro
function cadastro() {
  let email = document.getElementById('email')
  let password = document.getElementById('password')
  let planos = document.getElementById('planos')
  let myForm = document.getElementById('myForm')
  let pagamento = document.querySelector("input[name=formPagamento]:checked")
  myForm.addEventListener('submit', (e) => {
    e.preventDefault()
  })

  const user = {
    email: email.value,
    senha: password.value,
    plano: planos.value,
    pagamento: pagamento.value
  };


  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(user),
  };
  console.log(user)
  fetch('http://localhost:3000/signIn', options)
    .then(res => {
      if (res.status === 200) {
        alert('Cadastrado realizado com sucesso')
      } else {
        console.log(res)
      }
    })
}

//Home function
function entrar() {
  let user = document.getElementById('email')
  let password = document.getElementById('password')
  if(user.value == 'admin@admin'){
    location.href ='profile.html'
  }

  const userLogin = {
    email: user.value,
    senha: password.value,
  };

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',

    },
    body: JSON.stringify(userLogin),
  };
  console.log(userLogin)
  fetch('http://localhost:3000/login', options)
    .then(res => {
      if (res.status === 200) {
        location.href = 'profile.html'
      }

      if (res.status === 404 || res.status === 422) {
        alert('Email ou senha inválidos')
      }

      res.json();
    }
    )
    .then(data => {
      localStorage.setItem('user', JSON.stringify(data.token))
      location.href = 'profile.html'
    })

}