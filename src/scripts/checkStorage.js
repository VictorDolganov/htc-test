import { userName, logIn, userNameInput } from './consts'

export default function CheckStorage() {
   if (localStorage.getItem('userName')) {
      userName.classList.remove('invisible')
      logIn.textContent = 'Выйти'
      logIn.classList.remove('log-in')
      logIn.classList.add('log-in-autorisation')
      userName.textContent = localStorage.getItem('userName')
      userNameInput.value = localStorage.getItem('userName')
   }
}