import { signUp, signIn, resetPassword} from '../user.js'
import styles from './styles.css' assert { type: "css" }
    document.adoptedStyleSheets = [styles];


const userIcon = document.querySelector('.user')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
const signUpForm = document.querySelector('.sign-up-container form')
const signInForm = document.querySelector('.sign-in-container form')
const passwordReset = document.querySelector('.password-reset')

const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'))

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'))

userIcon.addEventListener('click', () => {
    if (!userIcon.href) {
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }
})

close.addEventListener('click', () => {
    onClose()
})

passwordReset.addEventListener('click', () => {
    resetPassword()
})

function onClose() {
    document.body.style.overflow = 'auto'
    modal.style.display = 'none'
}



    // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
    var forms = document.querySelectorAll('.needs-validation')
  
    // Зацикливайтесь на них и предотвращайте отправку
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('input', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })

signIn(signInForm)
signUp(signUpForm)

