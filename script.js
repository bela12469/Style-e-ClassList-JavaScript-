//cria variavel para os elementos
const title = document.getElementsByClassName("title")
const error_text = document.getElementsByClassName("error-text")
const username_input = document.getElementById("login-usuario")
const password_input = document.getElementById("login-senha")
const sucess_message = document.getElementsByClassName('sucess_message')


//mudar estilo(cor) do titulo
title[0].style.color = "violet"
//console.log(title)





//função para validar o formulario

function validateUsernameInput() {
    if (username_input.value != 'isabelacirino') {
        error_text[0].classList.add('visible')
    } else {
        error_text[0].classList.remove('visible')
    }
} 

function validatePasswordInput(){
    if (password_input.value != '2244') {
        error_text[1].classList.add('visible')
    } else {
        error_text[1].classList.remove('visible')
    }
}

function showSucessMessage() {
    sucess_message[0].classList.add('flex')
}


// ** onchange="validateforms()**  Chamando a função direto no html no INPUT 
// * onclick="validateforms()* Chamando a função direto no html no button 

