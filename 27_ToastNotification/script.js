const toasts = document.getElementById('toasts')
const button = document.getElementById('button')

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four'
]

const types = [
  'info',
  'success',
  'error'
]

button.addEventListener('click', () => createNotification())

// button.addEventListener('click', () => createNotification('This is an error.', 'error'))

// button.addEventListener('click', () => createNotification('This is a success.', 'success'))

// button.addEventListener('click', () => createNotification('This is an info'))

function createNotification(msg = null, type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())

  notif.innerText = msg ? msg : getRandomMessage()
  toasts.appendChild(notif)

  setTimeout(() => {
    // toasts.removeChild(notif)
    notif.remove()
  }, 2500);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random()*messages.length)]

}

function getRandomType() {
  return types[Math.floor(Math.random()*types.length)]
}