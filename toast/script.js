const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'My Cat Rules',
  'I Welcome Our Feline Overlords',
  'All Cats Are Beautiful',
  'Feline Too Phat',
  'Give Cat Treat',
  'This Cat Is C H O N K Y',
  'This Cat Is G R O M P Y',
  'And Now This Interstellar Feline Ascends',
]

button.addEventListener('click', () => createNotification());

function createNotification() {
  const notif = document.createElement('div')
  notif.classList.add('toast')

  notif.innerText = getRandomMessage()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 9000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}