const userData = document.querySelector('.info-form') 

auth.onAuthStateChanged(user => {
    if (user) {
        user.updateProfile({
            name: userData['name'].value,
            lastname: userData['lastname'].value,
            surname: userData['surname'].value,
            gender: userData['gender'].value,
            birthdate: userData['birthdate'].value,
            email: userData['email'].value,
            phone: userData['phone'].value,
            city: userData['city'].value,
            address: userData['address'].value,
            
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Update successful
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });  
    } else {

    }
}