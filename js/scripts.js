var factorial = function(fact1) {
  return ((fact1) * 1 * 2 * 3 * 4);
};

$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var fact1 = parseInt($("input#fact1").val());
    var result = factorial(fact1);
    $("#result").text(result);
  });
});
