const continueButton = document.querySelector(
  '.index-continue-button'
) as HTMLDivElement

continueButton.addEventListener('click', e => {
  e.preventDefault()
  Continue()
})

function Continue() {
  console.log('Hello World!')
}
