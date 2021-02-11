const buttons = document.querySelectorAll('.ripple');
// const body = document.body;

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
    getImage()
  });
});

function getImage() {
  const randomImage = new Array();

  randomImage[0] = "https://images.unsplash.com/photo-1484244233201-29892afe6a2c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  randomImage[1] = "https://images.unsplash.com/photo-1570446336483-01251b074478?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1957&q=80";
  randomImage[2] = "https://images.unsplash.com/photo-1593035910165-2e3e99a153a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";
  randomImage[3] = "https://images.unsplash.com/photo-1554024602-f082a8c3dc30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";
  randomImage[4] = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1927&q=80";
  randomImage[5] = "https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  randomImage[6] = "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  randomImage[7] = "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  randomImage[8] = "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  randomImage[9] = "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1101&q=80";

  const number = Math.floor(Math.random()*randomImage.length);

  return document.getElementById('container').innerHTML = '<img src="'+ randomImage[number]+'" />';
};



// function setBgToBody() {
//   body.style.backgroundImage = getImage();
// };