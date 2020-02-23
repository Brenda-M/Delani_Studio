$(document).ready (function(){

  //hover effect on portfolio section

  $('.col-md-3').hover(function(){
    $('.companyTitle',this).slideToggle('slow');
 }, function(){
    $('.companyTitle',this).slideToggle('slow');
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





