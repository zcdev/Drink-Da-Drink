$(function() {
  $(".drink-up").on("click", function(event) {
    var id = $(this).data("id");
    var drinkUp = $(this).data("newdrink");

    var newDrinkState = {
      drink_up: drinkUp
    };

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
    event.preventDefault();

    var newDrink = {
      drink_name: $("#drink").val().trim()
    };

    $.ajax("/api/drinks", {
      type: "POST",
      data: newDrink
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".delete-drink").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/drinks/" + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
