var beepBoop = function (number) {
  var range = [];
  for (index = 0; index <= number; index++) {
    if (index === 0 || index % 10 === 0) {
      range.push("Beep!");
    } else if (index === 1 || index % 10 === 1) {
      range.push("Boop!");
    } else if (index % 3 === 0) {
      range.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else {
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
    console.log(result);
    $(".result").show();
    $("#output").text(result);
  });
});
