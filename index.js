const lightBtn = document.querySelector('.menu-btn')
const light = document.querySelector('.light')
const activeMode = document.querySelector('.active-mode')

const toggleLight = () => {
   light.classList.toggle('activelight')
   lightBtn.classList.toggle('activebtn')
   activeMode.classList.toggle('activeModeOn')
}

lightBtn.addEventListener('click', toggleLight)