import { auth, db } from './firebase.js'

export function signIn(logInForm) {
    logInForm.addEventListener('submit', e => {
        e.preventDefault()

        const email = logInForm['email'].value
        const password = logInForm['password'].value

        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            location = './pages/profile/provider/info'
        }).catch(error => console.log(error))
    })
}

export function signUp(logOnForm) {
    logOnForm.addEventListener('submit', e => {
        e.preventDefault()
        const name = logOnForm['name'].value.trim()
        const email = logOnForm['email'].value.trim()
        const password = logOnForm['password'].value.trim()
        console.log(email);
        auth.createUserWithEmailAndPassword(email, password)
            .then((cred) => {
                return db.collection('users').doc(cred.user.uid).set({
                    email, password, name
            }).then(() => {
                console.log('success')
                // logOnForm.reset()
                signIn(logOnForm)
                // location = './pages/profile/provider/info'
            })
            .catch((err) => {
                console.log(err.message)
            })
        })
    })
}


export const logOut = () => {
    const answer = confirm('Are you sure you want to log out?')
    if (answer) {
        auth.signOut(auth).then(() => {
            location = '/'
        }).catch((error) => {
            console.log(error, 'Что-то не так')
        });
    } else return null
    
    //localStorage.removeItem('user')
}