window.addEventListener('load', event => {
  document.getElementById('js-mailing-form').addEventListener('submit', event => {
    event.preventDefault()

    alert(`${event.target.email.value} added to the mailing list!`)
    event.target.email.value = ''
  })
})
