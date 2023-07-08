const burgerMenu = () => {
  const burger = document.querySelector('.burger')
  const mobile = document.querySelector('.mobile')
  const body = document.querySelector('body')
  const elements = [burger, mobile, body]

  const toggleActiveClass = () =>
    elements.forEach(element => element.classList.toggle('active'))

  burger.addEventListener('click', toggleActiveClass)

  window.addEventListener('resize', () => {
    const { innerWidth } = window
    if (innerWidth > 991.98) {
      elements.forEach(element => element.classList.remove('active'))
    }
  })
}

burgerMenu()
