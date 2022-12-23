import '../../../pages.js'
import { auth, db, endpoint } from '../../../../firebase.js'

const userData = document.querySelector('.info-form')
const passwordChange = document.querySelector('.info-form_password-change')
const removeUser = document.querySelector('.info-form_account-remove')

auth.onAuthStateChanged(user => {
  if (user) {
    axios.get(endpoint + 'users/' + user.uid)
      .then(response => {
        const recieveData = response.data.fields
        if (recieveData) {  
          userData['name'].value = recieveData.name?.stringValue || '',
          userData['lastname'].value = recieveData.lastname?.stringValue || '',
          userData['surname'].value = recieveData.surname?.stringValue || '',
          userData['gender'].value = recieveData.gender?.stringValue || '',
          userData['birthdate'].value = recieveData.birthdate?.stringValue || '',
          userData['email'].value = recieveData.email?.stringValue || '',
          userData['phone'].value = recieveData.phone?.stringValue || '',
          userData['city'].value = recieveData.city?.stringValue || '',
          userData['address'].value = recieveData.address?.stringValue || '',
          userData['passportID'].value = recieveData.passportID?.stringValue || ''

          // userData['photoURL'].value = recieveData.photoURL?.stringValue || ''
        }
      })
      .catch(error => {
        console.log(error);
      })


    userData.addEventListener('change', () => {
      db.collection('users').doc(user.uid).set({
        name: userData['name'].value.trim(),
        lastname: userData['lastname'].value.trim(),
        surname: userData['surname'].value.trim(),
        gender: userData['gender'].value.trim(),
        birthdate: userData['birthdate'].value.trim(),
        email: userData['email'].value.trim(),
        phone: userData['phone'].value.trim(),
        city: userData['city'].value.trim(),
        address: userData['address'].value.trim(),
        passportID: userData['passportID'].value.trim(),

        // photoURL: userData['photoURL'].value
      }, { merge: true }).then(() => {
        console.log('success');
        // Update successful
        // ...
      }).catch((error) => {
        console.log(error, 'failure');
        // An error occurred
        // ...
      })
    })

    passwordChange.onclick = () => {
      // const confirm = confirm('Are you sure, you want to change your password?', false) // Need to fix
      if (confirm) {
        const newPassword = prompt('Enter your new password: ').trim();
        if (newPassword) {
          db.collection('users').doc(user.uid).set({
            password: newPassword,
          }, { merge: true }).then(() => {
            alert('Password changed! Your new password will be ' + newPassword)
            // Update successful
            // ...
          }).catch((error) => {
            console.log(error, 'failure');

            // An error occurred
            // ...
          })
        }
        else return null
      }
    }

    removeUser.onclick = () => {
      // const confirm = confirm(`Are you sure you want to remove your account?`, false)
      if (confirm) {
        db.collection('users').doc(user.uid).delete()
          .then(() => {
            alert("Accaunt successfully deleted!")
            auth.signOut(auth)
            location = ('/')
          }).catch((error) => {
            console.error("Error removing document: ", error)
          });
      } else return null
    }

  } else {
    location = '/'
  }
})