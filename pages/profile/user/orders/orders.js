document.querySelector('.search-orders').oninput = function() {
    const val = this.value.trim()
    const $orderItems = document.querySelectorAll('.order-item')
    const $orderNumbers = document.querySelectorAll('.order-number')
    // console.dir($orderNumbers)
    if (val !== '') {
        $orderNumbers.forEach((order) => {
            if (!order.innerText.toLowerCase().includes(val.toLowerCase())) {
                order.parentElement.classList.add('hide')
            } else {
                order.parentElement.classList.remove('hide')
            }
        })
    } else {
        $orderItems.forEach((item) => {
            item.classList.remove('hide')
        })
    }
}