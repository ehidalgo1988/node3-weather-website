


// fetch(url).then((response)=>{
//   response.json().then((data)=>{
//     console.log(data)
//   })
// })



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
let messageOne = document.querySelector('#message-1')
let messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'from javaScript'

weatherForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  const location = search.value

  messageOne.textContent = 'loading ..'
  messageTwo.textContent = ''

  let url = `http://localhost:3000/weather?address=${location}`
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
         messageOne.textContent = data.error
      } else {
        messageOne.textContent = `${data.forecast}`
        messageTwo.textContent = `${data.location}`
      }

    })
  })
})