// Objective: To add the fucntionality of moving progress bar between elements

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if(currentActive > circles.length) {
      currentActive = circles.length
  }

    update()
})

prev.addEventListener('click', () => {
  currentActive--

  if(currentActive < 1) {
      currentActive = 1
  }

  update()
})

function update() {
  circles.forEach((circle, idx) => {
      if(idx < currentActive) {
        circle.classList.add('active')
      } else {
        circle.classList.remove('active')
      }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'

  if(currentActive === 1) {
    prev.disabled = true
  } else if(currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}

// Step 1: Bring in needed elements(getElById) and classes(querySelAll)
// Step 2: Create var using LET, to set the index
// Step 3: Create functionality for NEXT button
// Step 3a: Add event listener on NEXT element, listening for 'click', pass in arrow function
// Step 3b: Inside function use Increment OP to iterate currentActive by 1 each pass
// Step 3c: We need to make sure it doesn't iterate past 4
// Using IF statement, check to see if currentActive is greater than the length of the CIRCLES node list
// Step 3d: IF condition is met, set currentActive to length of CIRCLES node list
// Steps 4-4d: Create fucntionality for PREV button, following similar steps for NEXT button
// While doing this make sure to decrement instead of increment
// Step 5: Call update() function within NEXT and PREV code blocks
// Step 6: Create update() function
// Step 6a: Loop through CIRCLES node list using .forEach(passing in CIRCLE and IDX as arguments)
// Step 6b: Using IF statement, check if idx is less than currentActive
// Step 6c: IF so, add class of 'active' to circle
// Step 6d: Using ELSE statement: if condition is not met, remove 'active' class from circle

// So far, the code has added the functionality of highlighting the circles 1-4 via button presses to the DOM
// Now we need to add functionality of progress bar between circles 1-4

// Step 7: Still within the update() function, but OUTSIDE of forEach loop, create ACTIVES var using const
// Step 7a: use querySelAll to grab all classes of '.active'
// Step 7b: See line 41, which adds progress bar to DOM
// Step 8: See lines 43-50, which is code to finish functionality of PREV button

