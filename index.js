const btnDark = document.querySelector('.div_buttons__btn-dark')
const btnLight = document.querySelector('.div_buttons__btn-light')

const body = document.querySelector('.body')
const title = document.querySelector('.title')
const div_buttons = document.querySelector('.div_buttons')

btnDark.addEventListener('click', () => {
    body.classList.add('body--dark')
    title.classList.add('title--dark')
    div_buttons.classList.add('div_buttons--dark')
})

btnLight.addEventListener('click', () => {
    body.classList.remove('body--dark')
    title.classList.remove('title--dark')
    div_buttons.classList.remove('div_buttons--dark')
})