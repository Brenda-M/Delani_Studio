$(document).ready(function(){
    $(".btn1").click(function(){
      $("p").hide();
    });
    $(".btn2").click(function(){
      $("p").show();
    });
  });

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 