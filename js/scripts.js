var beepBoop = function (number) {
  var range = [];
  for (index = 0; index <= number; index++) {
    if (index % 100 === 10) {
      range.push("Boop-Beep!");
    } else if (index % 3 === 0 && index !== 0) {
      range.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (index === 0 || index % 10 === 0) {
      range.push("Beep!");
    } else if (index === 1 || index % 10 === 1 || (index > 10 && index < 20)) {
      range.push("Boop!");
    } else {
      range.push(index);
    }
  }
  return range;
}



$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = $("#userNumber").val();
    var result = beepBoop(userNumber);
    $(".result").show();
    $("#output").text(result);
  });
});
