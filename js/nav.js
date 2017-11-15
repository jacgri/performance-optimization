window.addEventListener('load', event => {
  document.querySelector('.hamburger').addEventListener('click', event => {
    const menu = document.getElementById('menu')
    menu.style.visibility = 'visible'
  })

  document.querySelector('.cross').addEventListener('click', event => {
    const menu = document.getElementById('menu')
    menu.style.visibility = 'hidden'
  })
})
