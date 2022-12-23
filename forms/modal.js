import { signUp, signIn,} from '../user.js'
import styles from './styles.css' assert { type: "css" }
    document.adoptedStyleSheets = [styles];


const userIcon = document.querySelector('.user')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
const cancelbtn = document.querySelector('.cancelbtn')
const signUpForm = document.querySelector('.modal-content')
const signInForm = document.querySelector('.signin')

let isLogin = false

userIcon.addEventListener('click', () => {
    if (!modal || !close || !cancelbtn) {
        modal = document.querySelector('.modal')
        close = document.querySelector('.close')
        cancelbtn = document.querySelector('.cancelbtn')
    }
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
})

close.addEventListener('click', () => {
    onClose()
})

cancelbtn.addEventListener('click', () => {
    onClose()
})

function onClose() {
    document.body.style.overflow = 'auto'
    modal.style.display = 'none'
}

close.onclick = () => {return console.log(isLogin = !isLogin)}


isLogin ? signIn(signInForm) : signUp(signUpForm)
signIn(signInForm)
signUp(signUpForm)