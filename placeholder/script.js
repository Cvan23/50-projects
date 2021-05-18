const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1550414485-9f22b971dbf0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNpbGx5JTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>'
  title.innerHTML = 'My Cat Rules!'
  excerpt.innerHTML = 'An article about how rad my cat is'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/84.jpg" />'
  name.innerHTML = 'Randy Johnson'
  date.innerHTML = 'May 17, 2021'

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}