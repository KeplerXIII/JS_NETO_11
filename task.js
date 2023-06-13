const progress = document.getElementById('progress')
const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const request = new XMLHttpRequest()
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    request.upload.addEventListener('progress', e => {
        const percent = e.loaded / e.total
        progress.value = percent
    })

    // Вывод ответа сервера
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4)
        console.log(`Ответ сервера: ${request.responseText}`)
    })

    // Проверка статускода
    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            let code = request.status
            if (code === 201) {
                console.log(`Файл успешно загружен. Код ответа - ${code}`)
            } else {
                console.error(`Ошибка при загрузке файла. Код ответа - ${code}`)
            }
        }
    }

    request.send(formData)
})