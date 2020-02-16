// DOM Elements
const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tabcontent')
const darkModeSwitch = document.querySelector('#dark-mode-switch')

// Functions
const activateTab = tabnum => {
  //remove active class from tabs
  tabs.forEach( tab => {
    tab.classList.remove('active')
  })
  tabContents.forEach( tabContent => {
      tabContent.classList.remove('active')
  })

  //add 'active' tab class to the apropiate tab and tabContent, store it to LS
  document.querySelector('#tab' + tabnum).classList.add('active')
  document.querySelector('#tabcontent' + tabnum).classList.add('active')
  localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))
}

//Event Listeners for dark mode
darkModeSwitch.addEventListener('change', () => {
  document.querySelector('body').classList.toggle('darkmode')
  localStorage.setItem('jstabs-darkmode', JSON.stringify(!darkmode))
})


// Event Listeners for tabs
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
      activateTab(tab.dataset.tab)
  })
})

// Retrieve stored data
const darkmode = JSON.parse(localStorage.getItem('jstabs-darkmode')) || false
const opentab =  JSON.parse(localStorage.getItem('jstabs-opentab')) || '3'

// and..... Action!
if (darkmode) {
  document.querySelector('body').classList.add('darkmode')
  document.querySelector('#dark-mode-switch').checked = 'checked'
}

activateTab(opentab)