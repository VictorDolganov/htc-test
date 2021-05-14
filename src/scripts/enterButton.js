import { enter, loginName, password, overlay, userName, logIn, userNameInput } from './consts'

export default function ClickOnEnterButton() {
   enter.onclick = () => {
      if (loginName.value && password.value) {
         overlay.classList.add('invisible')
         userName.classList.remove('invisible')
         userName.textContent = loginName.value
         logIn.textContent = 'Выйти'
         logIn.classList.remove('log-in')
         logIn.classList.add('log-in-autorisation')
         userNameInput.value = loginName.value
         if (document.getElementById('remember').checked) {
            localStorage.setItem('userName', `${loginName.value}`)
         }
         userNameInput.setAttribute('size', `${loginName.value.length}`)
      } else {
         alert('Введите логин и пароль')
      }
   }
}