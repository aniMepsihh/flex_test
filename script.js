const button = document.getElementById('toggleButton')
const container = document.querySelector('.container')
const justifyContentButton = document.getElementById('toggleJustifyContentButton')
const alignItemsButton = document.getElementById('toggleAlignItemsButton')


let isRow = true
let justifyIndex = 0
let alignIndex = 0

const justifyValues = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around']

const alignValues = ['flex-start', 'center', 'flex-end', 'stretch', 'baseline']


button.addEventListener('click', () => {
  if (isRow) {
    container.style.flexDirection = 'column' 
  } else {
    container.style.flexDirection = 'row' 
  }
  isRow = !isRow 
})

justifyContentButton.addEventListener('click', () => {
    container.style.justifyContent = justifyValues[justifyIndex]
    justifyIndex = (justifyIndex + 1) % justifyValues.length })

alignItemsButton.addEventListener('click', () => {
    container.style.alignItems = alignValues[alignIndex]
    alignIndex = (alignIndex + 1) % alignValues.length
})