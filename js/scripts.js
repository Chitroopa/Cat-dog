$(document).ready(function(){
  $("img#meow").click(function(){
    $("ul.cat").append("<li>Meow Meow Meow!</li>");
    $("ul.dog").append("<li>Bark Bark Woof!</li>");
  });
  $("img#bark").click(function(){
    $("ul.dog").append("<li>Bark Bark Woof!</li>");
    $("ul.cat").append("<li>Meow Meow Meow!</li>");
  });
  $("p#birdtext").click(function(){
    $("p#bird").before('<img src="img/bird.jpg" alt="Bird" />');
  });
  $(".clr").on('click',function(){
    $(this).remove();
  });
});
