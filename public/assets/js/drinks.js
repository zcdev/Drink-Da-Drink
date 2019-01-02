// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".drink-up").on("click", function(event) {
    var id = $(this).data("id");
    var drinkUp = $(this).data("newdrink");

    var newDrinkState = {
      drink_up: drinkUp
    };

    // Send the PUT request.
    $.ajax("/api/drinks/" + id, {
      type: "PUT",
      data: newDrinkState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newDrink = {
      drink_name: $("#drink").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/drinks", {
      type: "POST",
      data: newDrink
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-drink").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/drinks/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
