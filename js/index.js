import {color} from '../test.js'

const handlerSubmit = (evt) => {
  evt.preventDefault();
  for (let i=0; i<= color.length;i++){
    if (color[i] == getComputedStyle(background, []).backgroundColor) {
      if (evt.target.value =="next") {
        i < color.length-1 ? background.style.backgroundColor= color[i+1] : background.style.backgroundColor= color[0]
        break
        }
      if (evt.target.value =="before") {
        i > 0 ? background.style.backgroundColor= color[i-1] :background.style.backgroundColor= color[color.length-1]
        console.log(i,)
        break
      }
    }
  }
}
const form = document.querySelector('.form')
const background = document.querySelector('.background')
form.addEventListener('click', handlerSubmit)

