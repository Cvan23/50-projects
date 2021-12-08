// Objective: To display dynamic numerical value in the input box, and to have the input box follow slider back and forth across the row in the DOM

// Step 1: Bring in elements we need
// Step 2: Add event listener on RANGE element, listening for input event
// Step 3: Set VALUE to event target value, using (+) to convert to number
// Step 4: Set LABEL to nextElementSibling
// Step 5: Set the LABEL's HTML to VALUE
// *NOTE* The first 5 steps are only to display value in the input box

const range = document.getElementById('range')

range.addEventListener('input', (e) => {
  const value = +e.target.value
  const label = e.target.nextElementSibling
  label.innerHTML = value
})