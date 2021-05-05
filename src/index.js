const filmButton = document.querySelector('.film-button')
const tvButton = document.querySelector('.tv-button')
const films = document.querySelector('.films')
const tv = document.querySelector('.tv')
const logIn = document.querySelector('.log-in')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const backgroundOverlay = document.querySelector('.background-overlay')
const enter = document.querySelector('.enter')
const userName = document.querySelector('.user-name')
const userNameInput = document.getElementById('user-name')
const tvList = document.querySelector('.tv-list')

userName.textContent = localStorage.getItem('userName')
userNameInput.value = localStorage.getItem('userName')

if (localStorage.getItem('userName')) {
   logIn.textContent = 'Выйти'
   logIn.classList.remove('log-in')
   logIn.classList.add('log-in-autorisation')
}

filmButton.addEventListener('click', () => {
   if (!filmButton.classList.contains('active')) {
      filmButton.classList.toggle('active')
      tvButton.classList.toggle('active')
      films.classList.toggle('visible')
      tv.classList.toggle('invisible')
      films.classList.toggle('invisible')
      tv.classList.toggle('visible')
   }
})

tvButton.addEventListener('click', () => {
   if (!tvButton.classList.contains('active')) {
      tvButton.classList.toggle('active')
      filmButton.classList.toggle('active')
      films.classList.toggle('visible')
      tv.classList.toggle('invisible')
      films.classList.toggle('invisible')
      tv.classList.toggle('visible')
   }
})

logIn.addEventListener('click', () => {
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
})

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
   }
}

userName.addEventListener('click', () => {
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
})

// tvList.onmouseenter = () => {
//    const loger = () => {
//       console.log('1')
//       tvList.style.left = parseInt(tvList.style.left) + 10
//    }
//    document.addEventListener('scroll', loger)
//    tvList.onmouseleave = () => {
//       document.removeEventListener('scroll', loger)
//    }
// }