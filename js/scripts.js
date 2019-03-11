var divisable = function(number1) {
  return (result);
};



$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#number1").val());
    var result = divisable(number1);

    if (number1 / 3) {
      var result = "PING"
    }

    if (number1 / 5) {
      var result = "PONG"
    }

    if (number / 15) {
      var result = "PING PONG!"
    };

    $("#result").text(result);
  });
});
