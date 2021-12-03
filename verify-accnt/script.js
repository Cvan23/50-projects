// Objective: To create functionality where only ONE digit can be input in each code box in the UI

// Step 1: Bring in INPUT elements (use '.code' class selector to put into node list)
// Step 2: Initially we want to focus on first box (index) using .focus() method
// Step 3: Loop through CODES using FOREACH
// Step 3a: Pass in code, idx (inputs) as function using arrow function
// Step 4: Create event listener, listening for 'keydown' event
// Step 4a: When event happens, we are going to run function w/ event (e) object
// Step 5: Using IF statement, check to see if input(e.key) is greater than or equal to 0
// Step 5a: AND (&&) less than or equal to 9
// Step 6: If conditions are true: we want to go through node list, check index (idx) and add 1 (will move to next input)
// Step 6a: Wrap step 6 in a setTimeout function passing in 10 milsec
// Step 7: Using an ELSE IF statement: create function that will enable user to use backspace key to go back through inputs and delete each one
// Step 8: Check to see if key event is equal to 'Backspace' key
// Step 9: Repeat steps 6-6a but instead of adding one, subtract one
// Step 10: To insure only one value is added or subtracted: set current index value to an empty string inside of IF statement
// *NOTE* This will prevent multiple chars being input if user holds key down

const codes = document.querySelectorAll('.code')  // *1

codes[0].focus()  // *2

// *3 ↓         *3a ↓
codes.forEach((code, idx) => {
//    *4 ↓                *4a ↓
  code.addEventListener('keydown', (e) => { 
//    *5-5a ↓
    if(e.key >= 0 && e.key <= 9) {
      codes[idx].value = '' // *10
      setTimeout(() => codes[idx + 1].focus(), 10)  // *6-6a
//    *7 ↓      *8 ↓
    } else if(e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10)  // *9
    }
  })
})