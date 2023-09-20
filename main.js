
const input = document.querySelector('input')
const buttone = document.querySelector('form button')
const ul = document.querySelector('ul')

buttone.addEventListener('click', evento => {

  evento.preventDefault()

 if(input.value)
 {
   const liElement = document.createElement('li')
   liElement.innerHTML =  input.value
   liElement.style.listStyle = 'none'
   
   const btnRemover = document.createElement('button')
   btnRemover.innerHTML = 'Remover'


   btnRemover.addEventListener('click', () => {

     ul.removeChild(liElement)
     ul.removeChild(btnRemover)

   })
   
 
   ul.appendChild(liElement)
   ul.appendChild(btnRemover)

   input.value = ''

 

 }

})