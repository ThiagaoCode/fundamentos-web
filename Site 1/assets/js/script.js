

/*
case Sensitive = reconhece letras maiusculas e minusculas

acessando functions

por tag: getElementByTagName()
por Id: getElementById()
por nome: getElemenntsByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') // precisa da # para funcionar -- utima atualizacao como chamada de function
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = "red"
        //alert("nome invalido") - aparece o alert até escrever correto
    } 
    else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = "green"
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".com") == -1 ){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = "red"
        
    } 
    else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = "green"
    }
}


