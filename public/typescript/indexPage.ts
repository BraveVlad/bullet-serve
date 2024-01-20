const continueButton = document.querySelector(
  '.index-continue-button'
) as HTMLDivElement

continueButton.addEventListener('click', e => {
  e.preventDefault()
  console.log('hello world!')
})
