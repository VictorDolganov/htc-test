import './scss/style.scss'

const logIn = document.querySelector('.log-in')
const overlay = document.querySelector('.overlay')
const backgroundOverlay = document.querySelector('.background-overlay')
const enter = document.querySelector('.enter')
const userName = document.querySelector('.user-name')
const userNameInput = document.getElementById('user-name-input')
const switchButton = document.querySelectorAll('.button')
const container = document.querySelectorAll('.container')

if (localStorage.getItem('userName')) {
   userName.classList.remove('invisible')
   logIn.textContent = 'Выйти'
   logIn.classList.remove('log-in')
   logIn.classList.add('log-in-autorisation')
   userName.textContent = localStorage.getItem('userName')
   userNameInput.value = localStorage.getItem('userName')
}

for (let elem of switchButton) {
   elem.onclick = () => {
      if (!elem.classList.contains('active')) {
         for (let elem of switchButton) {
            elem.classList.toggle('active')
         }
         for (let elem of container) {
            elem.classList.toggle('invisible')
            elem.classList.toggle('visible')
         }
      }
   };
}

logIn.onclick = () => {
   if (logIn.classList.contains('log-in-autorisation')) {
      logIn.textContent = 'Войти'
      logIn.classList.remove('log-in-autorisation')
      logIn.classList.add('log-in')
      userName.textContent = ''
      userNameInput.value = ''
      userName.classList.add('invisible')
      localStorage.removeItem('userName')
   } else {
      overlay.classList.remove('invisible')
   }
}

backgroundOverlay.onmouseenter = () => {
   backgroundOverlay.onclick = () => {
      overlay.classList.add('invisible')
   }
}

enter.onclick = () => {
   const loginName = document.getElementById('login').value
   const password = document.getElementById('password').value
   if (loginName && password) {
      overlay.classList.add('invisible')
      userName.classList.remove('invisible')
      userName.textContent = loginName
      logIn.textContent = 'Выйти'
      logIn.classList.remove('log-in')
      logIn.classList.add('log-in-autorisation')
      userNameInput.value = loginName
      localStorage.setItem('userName', `${loginName}`)
      userNameInput.setAttribute('size', `${loginName.length}`)
   } else {
      alert('Введите логин и пароль')
   }
}

userName.onclick = () => {
   userNameInput.classList.remove('invisible')
   userName.classList.add('invisible')
   userNameInput.setAttribute('size', `${userNameInput.value.length}`)
   userNameInput.focus()
   userNameInput.onkeydown = () => {
      userNameInput.setAttribute('size', `${userNameInput.value.length}`)
   }
   userNameInput.onblur = () => {
      userNameInput.classList.add('invisible')
      userName.classList.remove('invisible')
      userName.textContent = userNameInput.value
      localStorage.setItem('userName', `${userName.textContent}`)
   }
}