import { endpoint } from '../firebase.js'
const options = document.querySelectorAll('.form-check')
const productList = document.querySelector('.content__products-list')

const cardTamplate = (prodId, photo, title, price) => { return `
<a href='./${prodId}' class='product-item'>
<div class='product-image'><img src="${photo}" loading='lazy' /></div>
<div class="product-name">${title}</div>
<div class="product-price">${price.replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')} р.</div>
<div class="product-footer">
<button class="product-buy">В корзину</button>
</div>
</a>`}

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', (e) => {
        e.stopPropagation()
        console.log(options[i].children[0].value.toString())
        console.log(options[i].children[0].checked )
    })   
}

(async function fetchProduct() {
    axios.get(endpoint + 'products')
    .then(async response => {
        const recieveProductData = response.data
        console.log(recieveProductData.documents[1]);
        for (let i = 0; i < recieveProductData.documents.length; i++) {
            displayProduct(recieveProductData.documents[i])
        }
    })
})()

function displayProduct(product) {
    console.log(product);
    const {photo, name, price, count} = product.fields
    productList.insertAdjacentHTML('beforeend', cardTamplate(product.name.split('/')[product.name.split('/').length-1], 
    photo.stringValue, name.stringValue, price.stringValue))
}