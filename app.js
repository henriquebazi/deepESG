const form = document.querySelector('form')
const containerForm = document.querySelector('.form-container')
const result = document.createElement('p')

function reverse(word) {
  let reversedWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const inputValue = event.target.word.value
  const inputRevesed = reverse(inputValue)

  containerForm.appendChild(result)

  if(inputValue === "") {
    result.innerText = 'preencha o campo'
    return
  }

  if(inputRevesed === inputValue) {
    result.innerText = `${inputRevesed} é um Palíndromo`
    return
  }

  result.innerText = `${inputValue} não é um Palíndromo`
})