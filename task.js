const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText)['data']['answers'])
        document.getElementById('poll__title').innerText = JSON.parse(xhr.responseText)['data']['title']
        JSON.parse(xhr.responseText)['data']['answers'].forEach(element => {
            const varBtn = document.createElement('button')
            document.getElementById('poll__answers').appendChild(varBtn)
            varBtn.classList.add('poll__answer')
            varBtn.innerText = element
            varBtn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
            })})}})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()