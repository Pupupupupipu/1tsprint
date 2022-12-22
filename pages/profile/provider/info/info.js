import '../../../pages.js'
import { auth, db, endpoint } from '../../../../firebase.js'
// import 'https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js'

const userData = document.querySelector('.info-form')


auth.onAuthStateChanged(user => {
  if (user) {


    // async function getMarker() {
    //   const snapshot = await db.collection('events').get()
    //   return snapshot.docs.map(doc => doc.data());
    // }
    
    // const a = getMarker()
    // console.log(a, a.then(data => console.log(data)))

    // userData.addEventListener('click', () => {
    //   console.log('first');
    //   const snapshot = axios(db.collection('users').where('DocumentID', '==', user.uid))
    //   .then((res) => {
    //     console.log(res,'second');
    //     return res
    //   }).catch((error) => {
    //     console.log(error, 'failure');
    //     // An error occurred
    //     // ...
    //   })
    //   console.log(snapshot);
    // })
  
    axios.get(endpoint + 'users/' + user.uid)
    // console.log(getDBData('users', user.uid))
    .then(response => {
        const recieveData = response.data.fields
        userData['name'].value = "" || recieveData.name.stringValue,
        userData['lastname'].value = "" || recieveData.lastname.stringValue,
        userData['surname'].value = "" || recieveData.surname.stringValue,
        userData['gender'].value = "" || recieveData.gender.stringValue,
        userData['birthdate'].value = "" || recieveData.birthdate.stringValue,
        userData['email'].value = "" || recieveData.email.stringValue,
        userData['phone'].value = "" || recieveData.phone.stringValue,
        userData['city'].value = "" || recieveData.city.stringValue,
        userData['address'].value = "" || recieveData.address.stringValue,
        userData['passportID'].value = "" || recieveData.passportID.stringValue
    })
    .catch(error => {
        console.log(error);
    });

    


    userData.addEventListener('change', () => {
      
      console.log(userData['surname'].value);
      db.collection('users').doc(user.uid).set({
        name: userData['name'].value,
        lastname: userData['lastname'].value,
        surname: userData['surname'].value,
        gender: userData['gender'].value,
        birthdate: userData['birthdate'].value,
        email: userData['email'].value,
        phone: userData['phone'].value,
        city: userData['city'].value,
        address: userData['address'].value,
        passportID: userData['passportID'].value,

        photoURL: "https://example.com/jane-q-user/profile.jpg"
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
  } else {

  }
})

// userData['name'].value = "Grge" || user.name,
// userData['lastname'].value = "" || user.lastname,
// userData['surname'].value = user.surname,
// userData['gender'].value = user.gender,
// userData['birthdate'].value = user.birthdate,
// userData['email'].value = user.email,
// userData['phone'].value = user.phone,
// userData['city'].value = user.city,
// userData['address'].value = user.address,