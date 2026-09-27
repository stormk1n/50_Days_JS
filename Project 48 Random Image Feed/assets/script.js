const container = document.querySelector('.container')
const picsumUrl = 'https://picsum.photos'
const picsumDevUrl = 'https://picsum.dev'
const rows = 5


for(let i = 0; i < rows*3; i++){
    const img = document.createElement('img')
    img.src = `${picsumUrl}/${getRandomSize()}`

    container.appendChild(img)
}

function getRandomSize(){
    return `${getRandomNr()}/${getRandomNr()}`
}

function getRandomNr(){
    return Math.floor(Math.random() * 10) + 300
}