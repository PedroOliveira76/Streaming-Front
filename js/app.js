let fotoUser = document.querySelectorAll('.profileImg')
//Guarda no localStorage a img selecionada
fotoUser.forEach((e, i) => {
  e.addEventListener('click', () => {
    location.href = 'home.html'
  })
})

$(window).scroll(function () {
  let inputCheck = document.getElementById('check')
  let ul = document.getElementById('ul')
  if (inputCheck.checked == true) {
    ul.style.left = '-100%'
    if ($(window).scrollTop() == 0) {
      ul.style.left = '0'
    }
  }
});

$(check).click(() => {
  let inputCheck = document.getElementById('check')
  if (inputCheck.checked == true) {
    ul.style.left = '0'
  }
  if (inputCheck.checked == false) {
    ul.style.left = '-100%'
  }
})


