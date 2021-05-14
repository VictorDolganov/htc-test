import { userName, userNameInput } from './consts'

export default function ChangeUserName() {
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
}