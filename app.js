$(document).ready(function(){
  var color = 'white';
  $('.box').on('click', function(){
    $(this).addClass('white');
  });
  $('.box').on('dblclick', function(){
    $(this).removeClass('white');
  });
  $('#reset').on('click', function(){
    $('.box').removeClass('white');
  });
  $('#red').on('click', function(){
    color = 'red';
  });
  $('#green').on('click', function(){
    color = 'green';
  });
  $('#blue').on('click', function(){
    color = 'blue';
  });
  $('#yellow').on('click', function(){
    color = 'yellow';
  });
  $('#white').on('click', function(){
    color = 'white';
  });
});
