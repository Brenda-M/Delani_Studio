$(document).ready(function () {
  // Hide the descriptions in the what we do section on initial load
  $("#designDescription").hide();
  $("#developmentDescription").hide();
  $("#productDescription").hide();

  // Crreating toggle functionality on what we do section
  $("#designImage").click(function () {
    $("#designImage").hide();
    $("#designDescription").show();
  });

  $("#designDescription").click(function () {
    $("#designDescription").hide();
    $("#designImage").show();
  });

  $("#developmentImage").click(function () {
    $("#developmentImage").hide();
    $("#developmentDescription").show();
  });

  $("#developmentDescription").click(function () {
    $("#developmentDescription").hide();
    $("#developmentImage").show();
  });

  $("#productImage").click(function () {
    $("#productImage").hide();
    $("#productDescription").show();
  });

  $("#productDescription").click(function () {
    $("#productDescription").hide();
    $("#productImage").show();
  });

  // Hover effect on portfolio section
  $('.hoverElement').hover(function () {
    $('.companyTitle', this).slideToggle('fast');
  }, function () {
    $('.companyTitle', this).slideToggle('fast');
  });

  // Form Validation
  $(form).submit(function () {
    event.preventDefault();

    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();
<<<<<<< HEAD

=======
    if($("input#name").val() === ''&& $("input#email").val()==='') {
      document.getElementById('display').innerText = "Name and email must be filled";
      return;
    }
    if ($("input#name").val() !== '') {
      document.getElementById('display').innerText = "Thank you for contacting us" + name + "One of our representatives will get back to you as soon as possible."
    }
>>>>>>> 1ecc445fc7d85db94cd639f9a7d58d6393f49066
  });
});
