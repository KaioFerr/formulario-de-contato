function alertar(){
    let vName = document.getElementById("name")
    let vEmail = document.getElementById("email")
    let vMensagem = document.getElementById("mensagem")
    let alerta1 = document.getElementById('alerta1')
    let alerta2 = document.getElementById('alerta2')
    let alerta3 = document.getElementById('alerta3')

    alerta3.style.color = "red"
    if (vName.value == ""){
        vName.style.border = "solid 2px red"
        alerta1.innerHTML = "Por favor, preencher o campo nome."
    }else{
        vName.style.border = ""
        alerta1.innerHTML = ""
    }

    if (vEmail.value == ""){
        vEmail.style.border = "solid 2px red"
        alerta2.innerHTML = "Por favor, preencher o campo e-mail."
    }else{
        vEmail.style.border = ""
        alerta2.innerHTML = ""
    }

    if (vMensagem.value == ""){
        vMensagem.style.border = "solid 2px red"
        alerta3.innerHTML = "Por favor, preencher campo mensagem."
    }else{
        vMensagem.style.border = ""
        alerta3.innerHTML = ""
    }


    if (vName.value != "" && vEmail.value != "" && vMensagem.value != ""){
        vName.value = ""
        vEmail.value = ""
        vMensagem.value = ""
        alerta3.style.color = "green"
        alerta3.innerHTML = "Formulário salvo"
        alert("Mensagem enviada com sucesso!")
        vName.focus()
    }
}