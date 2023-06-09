const progress = document.getElementById('progress')
const sendBtn = document.getElementById('send')


sendBtn.addEventListener('click', () => {
    const form = document.getElementById('form')
    const formData = new FormData(form)
    const request = new XMLHttpRequest()
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    request.send(formData)
    request.upload.addEventListener('progress', e => {
        const percent = e.loaded / e.total
        progress.value = percent
    })
})

