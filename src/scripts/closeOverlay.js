import { backgroundOverlay, overlay } from './consts'

export default function CloseOverlay() {
   backgroundOverlay.onmouseenter = () => {
      backgroundOverlay.onclick = () => {
         overlay.classList.add('invisible')
      }
   }
}