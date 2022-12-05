function sair () {
    sessionStorage.clear();
}

function verificar() {
    var usuario = sessionStorage.ID_USUARIO;

    if(usuario != null) {
        login.style.display = 'none'
        cadastro.style.display = 'none'
        sai.style.display = 'block'
    } else {
        login.style.display = 'block'
        cadastro.style.display = 'block'
        sai.style.display = 'none'
    }
}

verificar()