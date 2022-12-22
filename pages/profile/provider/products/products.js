import '../../../pages.js'
// show active link
// const currentLocation = location.href
// const userLinks = document.querySelectorAll('.navigate-link')
// const productList = document.querySelector('.content-list')

// function setActive(linkArray) {
//     linkArray.forEach(link => {
//         if (currentLocation.toLowerCase().includes(link.href.toLowerCase().split('/').slice(-2)[0])) {
//             link.style.fontWeight = 'bold'
//         }
//         else return false
//     });
// }
// setActive(userLinks)

const productBox = document.querySelector('.content-list')

const cardTamplate = (image, title, price, rating) => { return `
<div class='product-item'>
<div class='product-image'><img src="${image}"/></div>
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
    const userCart = await fetchCart()
    if (userCart) {
        console.log(userCart);
    }

})

function fetchCart() {
    fetch('https://fakestoreapi.com/carts/user/2')
        .then((res) => { return res.json()})
        .then((data) => {
           data[0].products.forEach(prod => {
                fetchProduct(`https://fakestoreapi.com/products/${prod.productId}`)
           })
        })
}

function fetchProduct(prodUrl) {
    fetch(prodUrl)
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