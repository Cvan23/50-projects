// Objective: As the password gets longer the background image should become clearer

// Step 1: Bring in dynamic elements we need, we'll use the ID's
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


const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
  const input = e.target.value 
  // console.log(input)
  const length = input.length
  // console.log(length)
  const blurVal = 20 - length * 2
  background.style.filter = `blur(${blurVal}px)`
});