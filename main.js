$(document).ready(() => {
    $('#form').submit((e) => {
      e.preventDefault();
      var tarefa = $('#tarefa').val();      
      $('#lista-tarefa').append('<div> <li> <p>' + tarefa + '</p></li></div');
      $('#tarefa').val('');
    });

    $('#lista-tarefa').on('click', 'p', function (){
      $(this).toggleClass('checktarefa');
    });


});