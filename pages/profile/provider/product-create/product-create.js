import '../../../pages.js'
import { auth, db, endpoint } from '../../../../firebase.js'
import 'https://unpkg.com/imask'

const createProductForm = document.querySelector('.create-product-form')

if (createProductForm) {
    createProductForm.addEventListener('submit', e => {
        e.preventDefault();
        auth.onAuthStateChanged(async user => {
            if (user) {
                let productIds = []
                axios.get(endpoint + 'users/' + user.uid)
                .then(async response => {
                    const recieveData = response.data.fields
                    await recieveData.product.arrayValue.values.forEach(prodId => {
                        productIds.push(prodId.stringValue || prodId)
                    })
                })
                db.collection('products').add({
                    name: createProductForm['product-label'].value.trim(),
                    shortDesc: createProductForm['short-desc'].value.trim(),
                    fullDesc: createProductForm['full-desc'].value.trim(),
                    count: createProductForm['count'].value.trim(),
                    price: createProductForm['price'].value.trim(),
                    // photo: createProductForm['photo'].files[0].name,
                    photo: `https://picsum.photos/290/310?a=${createProductForm['product-label'].value}`
                    //video
                }).then(async (prod) => {
                    productIds.push(prod.id);
                    console.log('Product added to collection')
                    db.collection('users').doc(user.uid).set({
                        product: productIds
                        }, { merge: true }).then(() => {
                            console.log('Product added to user')
                            createProductForm.reset()
                        }).catch(() => console.log('Something bad!'))
                }).catch((error) => {
                    console.log(error, 'failure')
                    // An error occurred
                    // ...
                })
            }
        })
    })
} else console.log('form not found');
  

let priceMask = IMask(createProductForm['price'], {
    mask: Number,
    scale: 2,
    thousandsSeparator: ' ',
    normalizeZeros: true,
    padFractionalZeros: true,
  });
  priceMask.updateValue()
