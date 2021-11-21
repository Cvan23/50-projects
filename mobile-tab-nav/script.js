// Step 1: Bring in all content (images, nav and ul) *need to add event listener on each list item*
// *NOTE* We need to add the class of "active" to whatever icon is clicked, also adding the class of "show" to the corresponding image
// Step 2: Use FOREACH to loop through list items (passing in item & index to param)
// Step 3: Inside FOREACH: add event listener to item, listening for 'click'
// Step 3a: Pass in ARROW function as second param
// Step 4: Remove all the classes of "show" & "active" (2 functions)
// Step 4a: Call above functions inside item.addEventListener
// Step 5: OUTSIDE of first FOREACH, create fucntion to hide contents
// Step 5a: Inside this function, we need to loop through the classList and remove the class of "show" (FOREACH method)
// Step 5b: Create similar function to remove class of "active"
// Step 6: Now we need to add the classes of "active" & "show", using classList.add (Right below callbacks for outer functions)
// Step 6a: For CONTENTS, it is node list, so we need to pass in idx value (this will ensure correct image is called)

    // Step 1 ↓
const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

    // Step 2 ↓
listItems.forEach((item, idx) => {
    // Step 3↓            // Step 3a ↓
  item.addEventListener('click', () => {
    hideAllContents() // Step 4a
    hideAllItems()  // Step 4a

    item.classList.add('active') // Step 6
    contents[idx].classList.add('show') // Step 6a
  })
})

// Step 5
function hideAllContents() {  // Step 5a
  contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {  // Step 5b
  listItems.forEach(item => item.classList.remove('active'))
}