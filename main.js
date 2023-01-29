$(document).ready(() => {
    $('#form').submit((e) => {
      e.preventDefault();
      var tarefa = $('#tarefa').val();      
      $('#lista-tarefa').append('<li>' + tarefa + '</li>');
      $('#tarefa').val('');
    });

    $('#lista-tarefa').on('click', 'li', function (){
      $(this).toggleClass('checktarefa');
    });
});