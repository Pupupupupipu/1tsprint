window.onload = () => {
    const location = document.querySelector('.nav-item__city')
    if (ymaps) {
        location.style = 'display: flex'
        location.append(ymaps.geolocation.city)
      } else {
        location.append('Россия')
      }
}