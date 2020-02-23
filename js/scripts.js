$(document).ready (function(){

//creating toggle on what we do section
  $(".designIcon").click(function (){
    $("#hiddenDesign").hide();
    $(".designIconToggle").show();
  });

  $(".designIconToggle").click(function(){
    $(".designIconToggle").hide();
    ("#hiddenDesign").show();
  });
  

//hover effect on portfolio section

  $('.hoverElement').hover(function(){
    $('.companyTitle',this).slideToggle('fast');
 }, function(){
    $('.companyTitle',this).slideToggle('fast');
 });



//Form Validation
$("#blanks form").submit (function(event){

  let name = $("input#name").val();
  let email = $("input#email").val();
  let message = $("textarea#message").val();

  if ($("input#name").val() && $("input#email").val()){
      alert("Thank you for contacting us" + name + "One of our representatives will get back to you as soon as possible.");
  }
  else {
      alert("Name and email must be filled");
  }

  });

  event.preventDefault();

});





