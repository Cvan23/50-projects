// Objective: As the password gets longer the background image should become clearer

// Step 1: Bring in dynamic elements we need, we'll use the IDs
// Step 2: Create event listener on the password to check for number of characters
// Step 2a: We are listening for 'input'
// Step 2b: Add EVENT OBJECT (e) function (use arrow function) as the second param *NOTE: this will get the value of the event*
// Step 3: Create INPUT var, set the target's value
// Optional Step 3a: console log INPUT to test function
// Step 4: Create LENGTH var to check input for length
// Optional Step 4a: console log LENGTH to test function
// Step 5: Create blurVal var (start w/default value of blur(20) & subtract from LENGTH times 2)(We want to decrement by 2, not 1)
// Step 6: We need to dynamically filter the background image
// Step 6a: Set this to a TEMPLATE LITERAL, passing in blurVal var

// *1 ↓
const background = document.getElementById('background');
const password = document.getElementById('password');

// *2 ↓                 *2a ↓    *2b ↓
password.addEventListener('input', (e) => {
  const input = e.target.value // *3
  // console.log(input) // *3a
  const length = input.length // *4
  // console.log(length)  // *4a
  const blurVal = 20 - length * 2 // *5
  background.style.filter = `blur(${blurVal}px)`  // *6-6a
});

// *NOTE* I will come back to this project later and refactor code to check for nums,symbols,upper & lowercase chars