var beepBoop = function (number, name, direction) {
  var ranges = [];

  if (!name || !number) {
    alert("Please follow the directions. They are very simple");
  } else if (direction === "lowFirst" || !direction) {
    for (index = 0; index <= number; index++) {
      if (index % 100 === 10) {
        ranges.push("Boop-Beep!");
      } else if (index % 3 === 0 && index !== 0) {
        ranges.push("I'm sorry, " + name + ". I'm afraid I can't do that.");
      } else if (index === 0 || index % 10 === 0) {
        ranges.push("Beep!");
      } else if (index === 1 || index % 10 === 1 || (index > 10 && index < 20)) {
        ranges.push("Boop!");
      } else {
        ranges.push(index);
      }
    }
  } else if (direction === "highFirst") {
    for (index = number; index >= 0; index--) {
      if (index % 100 === 10) {
        ranges.push("Boop-Beep!");
        //console.log(ranges);
      } else if (index % 3 === 0 && index !== 0) {
        ranges.push("I'm sorry, " + name + ". I'm afraid I can't do that.");
      } else if (index === 0 || index % 10 === 0) {
        ranges.push("Beep!");
      } else if (index === 1 || index % 10 === 1 || (index > 10 && index < 20)) {
        ranges.push("Boop!");
      } else {
        ranges.push(index);
      }
    }
  }
  return ranges;
}



$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#userNumber").val());
    var userName = $("#userName").val();
    var direction = $("input:radio[name=direction]:checked").val();
    console.log(direction);
    var results = beepBoop(userNumber, userName, direction);
    results.forEach(function(result) {
      $("#output").append("<li>" + result + "</li>");
    });
    $(".result").show();
    $(".number").text(userNumber);
  });
});
