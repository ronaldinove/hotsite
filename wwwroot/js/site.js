// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function Cadastrar()
{
    //obtendo dados do formulario e armazenando em um objeto "parametros"
    let parametros={
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensagem: $("#mensagem").val()
    }
    //faz uma requisição por post para o endereço /Home/Cadastrar com os parametros
    $.post('/Home/Cadastrar', parametros)

       
    //retorno = done(houve comunicação) fail(nada comunicou)
    .done(
        function(data){

            if(data.status=="OK"){
                $("#frm").after("<h3>Dados cadastrados com sucesso!</h3>");
                $("#frm").hide();
            }else{
                $("#frm").after("<h3>"+data.mensagem+"</h3>");
            }
        }
    )
    
    .fail(
        function(){
            alert("Ocorreu algo errado!");
        }
    );
}

//função que lê documentos no html
$(document).ready(
    function(){
        $("#frmCadastro").submit(
            function(e){
                e.preventDefault();
                Cadastrar();
            }
        );
    }
); 
