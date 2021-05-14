import { img, notation } from './consts'

export default function ShowNotation() {
   img.onmouseenter = () => {
      notation.style.display = 'block'
      notation.onmouseleave = () => {
         notation.style.display = 'none'
      }
   }
}