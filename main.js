$(document).ready(() => {
    $('#form').submit((e) => {
    e.preventDefault();
      $('#campo').removeClass('invalido');

      try {
        var tarefa = $('#tarefa').val();  
        if ($('#tarefa').val() == '') {
          throw (error);
        } else {
          $('#lista-tarefa').append('<div> <li> <p>' + tarefa + '</p></li></div');
          $('#tarefa').val('');
        }
      } catch {
        $('#campo').toggleClass('invalido');
     }
    });

    $('#lista-tarefa').on('click', 'p', function (){
      $(this).toggleClass('checktarefa');
    });


});