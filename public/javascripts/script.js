// $(document).ready(function(){
//     $(".nav").hide();
//     $(".btn").click(function(){
//         $(".nav").hide();
//     });
//     console.log("Hello");
// });

$(document).ready(function () {
  $("#registration-form").on("submit", function (event) {
    event.preventDefault();

    let name = $("#first_name").val() + " " + $("#last_name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    $.ajax({
      url: "/contact",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        name,
        email,
        message,
      }),
      success: function (res) {
        // Redirect to contact page after successful submission
        if (res.success) {
          // Show a success message (optional)
          alert("Data sent successfully!");

          // Optionally clear the form fields
          $("#registration-form")[0].reset();
        } else {
          // Show an error message (optional)
          alert("Error saving data: " + res.message);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        // Handle AJAX errors (optional)
        console.error("AJAX error:", jqXHR, textStatus, errorThrown);
        alert("An error occurred. Please try again later.");
      },
    });
  });
});
