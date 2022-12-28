import '../../../pages.js'
import { auth, db, endpoint } from '../../../../firebase.js'

const productBox = document.querySelector('.content-list')

axios.get(endpoint + 'products/')
    .then(async response => {
        const recieveProductData = response.data.documents
        await recieveProductData.forEach(prodId => {

        })
    })

const cardTamplate = (image, title, price, rating) => { return `
<div class='product-item'>
<div class='product-image'><img src="${image}" loading='lazy' /></div>
<div class="product-name">${title}</div>
<div class="product-price">${price} р.</div>
<div class="product-footer">
    <p class="ptoduct-count">осталось ${rating.count} шт.</p>
    <div class="product-actions">
        <button class="product-edit"></button>
        <button class="product-delete"></button>
    </div>
</div>
</div>`}

document.addEventListener('DOMContentLoaded', async () => {
    auth.onAuthStateChanged(async user => {
        if (user) {
            const userCart = await fetchCart()
            // if (userCart) {
            //     console.log(userCart);
            // }
        }
    })
})

async function fetchCart() {
    await fetch('https://fakestoreapi.com/carts/user/2')
        .then((res) => { return res.json()})
        .then((data) => {
           data[0].products.forEach(prod => {
                fetchProduct(`https://fakestoreapi.com/products/${prod.productId}`)
           })
        })
}

async function fetchProduct(prodUrl) {
    await fetch(prodUrl)
        .then(prodRes => {return prodRes.json()})
        .then(prod => displayProducts(prod))
}

function displayProducts(product) {
    const {image, title, price, rating} = product
    productBox.insertAdjacentHTML('beforeend', cardTamplate(image, title, price, rating))
}
// function displayProduct(cart) {
//     cart.map
// }