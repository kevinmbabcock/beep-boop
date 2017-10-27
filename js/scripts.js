var beepBoop = function (number) {
  var ranges = [];
  for (index = 0; index <= number; index++) {
    if (index % 100 === 10) {
      ranges.push("Boop-Beep!");
    } else if (index % 3 === 0 && index !== 0) {
      ranges.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (index === 0 || index % 10 === 0) {
      ranges.push("Beep!");
    } else if (index === 1 || index % 10 === 1 || (index > 10 && index < 20)) {
      ranges.push("Boop!");
    } else {
      ranges.push(index);
    }
  }
  return ranges;
}



$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#userNumber").val());
    var results = beepBoop(userNumber);
    results.forEach(function(item) {
      $("#output").append("<li>" + item + "</li>");
    });
    $(".result").show();
    // $("#output").text(results);
  });
});
