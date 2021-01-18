document.getElementById(`responsive-menu`).addEventListener(`click`, (e) => {
document.getElementById(`nav`).classList.toggle(`active`)
document.querySelector(`body`).classList.toggle(`scroll-none`)
})

document.getElementById(`close-nav`).addEventListener(`click`, (e) => {
  document.getElementById(`nav`).classList.toggle(`active`)
  document.querySelector(`body`).classList.toggle(`scroll-none`)
  })