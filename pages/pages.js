import { logOut } from '../user.js'
import { auth } from '../firebase.js'

const logOutLink = document.querySelector('a[href="#logout"]')
const userLink = document.querySelector('.nav-item__social-link.user')

window.onload = () => {
  const userLocation = document.querySelector('.nav-item__city')
  if (ymaps) {
    userLocation.style = 'display: flex'
    userLocation.append(ymaps.geolocation.city)
  } else {
    userLocation.append('Россия')
  }


  auth.onAuthStateChanged(user => {
    if (user) {
      userLink.href = '/pages/profile/provider/info/'
    } else {
      userLink.removeAttribute('href')
      if (location.toString().includes('/profile/')) {
        location = '/'
      }
    }
  })
}

if (logOutLink) {
  logOutLink.addEventListener('click', () => {
    logOut()
  })
}

