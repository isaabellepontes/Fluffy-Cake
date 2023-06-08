//o getElementById pega o que foi informado no campo nome e é atribuido a variavel nome
function validaNome() {
    var nome = document.getElementById("cNome").value;
    //valida se o campo esta vazio
    if (nome.length == 0) {
        alert("Preencha o Nome");
        return;
    }
}

function validaEmail() {
    var email = document.getElementById("cEmail").value;
    //valida se está vazio, se possui o @ e se possui o .
    if (email.length == 0 || email.indexOf("@") < 1 || email.indexOf(".") < 1) {
        alert("Preencha o E-mail corretamente")
        return;
    }
}

function validaMensagem() {
    var mensagem = document.getElementById("cMensagem").value;
    //valida se tem mais de 5 caracteres
    if (mensagem.length < 5) {
        alert("Digite sua mensagem")
        return;
    }
}
function validaContato() {
    // Chama as funções de validação para cada campo
    validaNome();
    validaEmail();
    validaMensagem();

    var nome = document.getElementById("cNome").value;
    var email = document.getElementById("cEmail").value;
    var mensagem = document.getElementById("cMensagem").value;

    if (nome.length > 0 && email.length > 0 && email.indexOf("@") >= 1 && email.indexOf(".") >= 1 && mensagem.length >= 5) {
        alert("Formulário preenchido com sucesso!");
    }
}