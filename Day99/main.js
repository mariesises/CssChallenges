const stripes = document.querySelector('.stripes')

for (let i = 1; i <= 20; i++) {
    stripes.innerHTML += `<div class="stripe stripe-${i}"></div>`
}


for (let i = 1; i <= 20; i++) {
    const stripe = document.querySelector(`.stripe-${i}`)
    stripe.style.transform = `rotate(${i * 20}deg) translateY(-120px)`
}


const label = document.querySelector('.label')
label.addEventListener('click', () => {
    document.querySelector('.frame').classList.toggle('checked')
})