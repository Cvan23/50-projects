const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key} 
    <small>event.key</small>
    </div>
    <div class="key">
      ${event.keyCode}
      <small>event.keyCode</small>
    </div>
    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>
  `
})

window.addEventListener('keydown', () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
})