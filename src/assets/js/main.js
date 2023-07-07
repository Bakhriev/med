const tabButtons = document.querySelectorAll('.products-tab__button')
const tabContents = document.querySelectorAll('.products-tab__items-wrapper')

tabButtons.forEach(tabBtn => {
  tabBtn.addEventListener('click', () => {
    tabButtons.forEach(btn => {
      btn.classList.remove('active')
    })
    tabBtn.classList.add('active')
    activeTabContent(tabBtn.dataset.tab)
  })
})

function activeTabContent(index) {
  tabContents.forEach(t => {
    t.classList.remove('active')
  })
  tabContents[Number(index) - 1].classList.add('active')
}

const faqBtns = document.querySelectorAll('.faq__toggle')

faqBtns.forEach((faqBtn, index) => {
  if (index === 0) {
    const subMenu = faqBtn.nextElementSibling
    subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
    subMenu.classList.add('active')
  }

  faqBtn.addEventListener('click', () => {
    faqBtn.classList.toggle('active')
    const subMenu = faqBtn.nextElementSibling
    if (subMenu.classList.contains('active')) {
      subMenu.style.maxHeight = 0 + 'px'
      subMenu.classList.remove('active')
    } else {
      dropFaqs()
      faqBtn.classList.add('active')
      subMenu.classList.add('active')
      subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
      console.log('no')
    }
  })
})

function dropFaqs() {
  const subMenus = document.querySelectorAll('.faq__submenu')
  subMenus.forEach(s => {
    s.classList.remove('active')
    s.style.maxHeight = 0 + 'px'
  })
  faqBtns.forEach(b => {
    b.classList.remove('active')
  })
}
