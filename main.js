$(document).ready(function() {

  $(function(){
    $("#datepicker").datepicker();
  });

  $("#rich").on('click', function(){
    $(this).val('感謝')

  });

  let images = ['header.JPG', 'header2.JPG', 'header3.JPG'];

  $('#randamImg').click(function(){
    var images_index = Math.floor(Math.random()*3);
    let selectedImg = images[images_index];
    $(this).attr('src',selectedImg);
  })

});
