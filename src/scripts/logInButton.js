import { logIn, userName, userNameInput, overlay } from './consts'

export default function ClickOnLogInButton() {
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
}