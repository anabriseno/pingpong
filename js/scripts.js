$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#number1").val());


    if (number1 % 3 == 0) {
      var result = "PING"
    }

    if (number1 % 5 == 0) {
      var result = "PONG"
    }

    if (number1 % 15 == 0) {
      var result = "PING PONG!"
    };

    $("#result").text(result);
  });
});
