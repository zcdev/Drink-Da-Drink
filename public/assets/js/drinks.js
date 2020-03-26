$(function() {

  var drinkClasses = ['drink1', 'drink2', 'drink3', 'drink4', 'drink5', 'drink6'];
  $(".glass").each(function(event){
      classIndex = Math.floor(Math.random() * drinkClasses.length);
      $(this).addClass(drinkClasses[classIndex]);
  })

  $(".drink-up").on("click", function(event) {
    var id = $(this).data("id");
    var drinkUp = $(this).data("newdrink");

    var newDrinkState = {
      drink_up: drinkUp
    };

    $(this).prev().find(".glass").next().addClass("drinkup");
        
    setTimeout(function() {
      $.ajax("/api/drinks/" + id, {
        type: "PUT",
        data: newDrinkState
      }).then(
        function() {
          location.reload();
        }
      );
    }, 5000);

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
