import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style.css'

window.onload = () => {
    document.documentElement.className = 'light' 
}
//functions to switch between light and dark mode
const darkTheme = () => {
    document.documentElement.className = 'dark'
    document.querySelector('#dark-light-icon').setAttribute('class', 'bi-sun-fill text-secondary')
}

const lightTheme = () => {
    document.documentElement.className = 'light'
    document.querySelector('#dark-light-icon').setAttribute('class', 'bi bi-moon-fill text-secondary')
}

document.querySelector('#dark-light').addEventListener('click', () => {
    document.documentElement.className === "light"?
    darkTheme() : lightTheme()
})
