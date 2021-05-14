import { switchButtons, containers } from './consts'

export default function SwitchTabs() {
   for (let elem of switchButtons) {
      elem.onclick = () => {
         if (!elem.classList.contains('active')) {
            for (let elem of switchButtons) {
               elem.classList.toggle('active')
            }
            for (let elem of containers) {
               elem.classList.toggle('invisible')
               elem.classList.toggle('visible')
            }
         }
      };
   }
}