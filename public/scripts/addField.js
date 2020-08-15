//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)
//Executar uma acão
function cloneField(){
    //cloneNode -> Node elementos do HTML
    //Duplicar os campos. Que campos?
   const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean: true ou false
   
   //Pegar os campos. Que campos?
   const fields = newfieldContainer.querySelectorAll('input')

   //para cada compo, limpar
   fields.forEach(function(field) {
       //pega o field do momento e limpa ele
       field.value = ""
       
   });



   //Colocar na página. Onde?
   document.querySelector('#schedule-items').appendChild(newfieldContainer)
}

    