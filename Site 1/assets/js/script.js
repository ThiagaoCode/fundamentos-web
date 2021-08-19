

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
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector("#mapa")

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
        let nomeOK = true
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
        let emailOK = true
    }
}


function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = '<h1>Texto é muito grnde, digite no máximmo 100 caracteres</h1>'
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"

    } 
    else{
        txtAssunto.style.display = "none"
        let assuntoOK = true


        //txtAssunto.innerHTML = '<h1>Texto Válido</h1>'
        //txtAssunto.style.color = "Green"

    }
}

function enviar(){
    if (nomeOK == true && emailOK == true && assuntoOK == true){
        alert("formulário enviado com sucesso!")
    }
    else{
        alert("preencha o formulário corretamente")
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = "600px"

}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "150px"

}

