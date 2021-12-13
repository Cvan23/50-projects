// Objective: To change class to 'active' when a panel is clicked on

// *1 ↓
const panels = document.querySelectorAll('.panel')
//console.log(panels) *will give us a node list of all the panels*

// *2 ↓         *2a ↓
panels.forEach((panel) => {
//                    *3 ↓
  panel.addEventListener('click', () => {
    removeActiveClasses() // *3b
    panel.classList.add('active') // *3a
  })
})
//  *4 ↓
function removeActiveClasses() {
//  *5 ↓
  panels.forEach(panel => {
    panel.classList.remove('active')  // *6
  })
}

// Step 1: Bring in PANELS, using qSA, to put '.panel' class into a node list
// Step 2: Loop through node list using FOREACH and arrow function
// Step 2a: Pass in PANEL as iteration function
// Step 3: We need to have an event listener on each panel, listening for 'click'
// Step 3a: Add a class of 'active' to each panel using .classList
// Step 3b: Pass in function to remove 'active' classes(), so we are only seeing the clicked on panel at full size
// Step 4: Create removeActiveClasses() function
// Step 5: Use FOREACH to loop through node list again
// Step 6: Remove 'active' class from panel using .classList