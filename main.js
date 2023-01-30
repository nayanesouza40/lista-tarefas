$(document).ready(() => {
  var arr = []
  var mensagem
  $('#form').submit((e) => {
    e.preventDefault();
    $('#campo').removeClass('invalido');

    try {
      if ($('#tarefa').val() == '') {
        mensagem = `Digite uma tarefa`
        throw (error);
      } else {
        var tarefa = $('#tarefa').val();  
        if (arr.includes(tarefa)) {
          mensagem = `Tarefa já adicionada`
          throw (error);
        } else {
          arr.push(tarefa)
          $('#lista-tarefa').append('<div> <li> <p>' + tarefa + '</p></li></div');
          $('#tarefa').val('');
        }
      }
    } catch {
      $('#campo').toggleClass('invalido');
      console.log(mensagem)
    }
    });

    $('#lista-tarefa').on('click', 'p', function (){
      $(this).toggleClass('checktarefa');
    });
});