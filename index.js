const lightBtn = document.querySelector('.menu-btn')
const light = document.querySelector('.light')

const toggleLight = () => {
   light.classList.toggle('activelight')
   lightBtn.classList.toggle('activebtn')
}

lightBtn.addEventListener('click', toggleLight)