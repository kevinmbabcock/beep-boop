var beepBoop = function (number) {
  var range = [];
  for (index = 0; index <= number; index++) {
    if (index === 0 || index % 10 === 0) {
      range.push("Beep!");
      console.log(range);
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
