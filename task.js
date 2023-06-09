const xhr = new XMLHttpRequest()
const loader = document.getElementById('loader')
const item = document.querySelector('.item')

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
        loader.classList.remove('loader_active')
        const response = JSON.parse(xhr.responseText)['response']['Valute']
        for (let key in response) {
            newItem = document.createElement('div')
            newItem.classList.add('item')
            document.getElementById('items').appendChild(newItem)
            newItem.innerHTML = `<div class="item__code">${response[key]['CharCode']}</div>\
                                 <div class="item__value">${response[key]['Value']}</div>\
                                 <div class="item__currency">руб.</div>`
          }}})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()