var beepBoop = function (lowNumber, highNumber, name, direction) {
  var ranges = [];

  if (!name || !lowNumber || !highNumber || (lowNumber >= highNumber)) {
    alert("Please follow the directions. They are very simple.");
  } else if (direction === "lowFirst" || !direction) {
    for (index = lowNumber; index <= highNumber; index++) {
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
    for (index = highNumber; index >= lowNumber; index--) {
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
  }
  return ranges;
}



$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var lowNumber = parseInt($("#lowNumber").val());
    var highNumber = parseInt($("#highNumber").val());
    var userName = $("#userName").val();
    var direction = $("input:radio[name=direction]:checked").val();
    var results = beepBoop(lowNumber, highNumber, userName, direction);
    results.forEach(function(result) {
      $("#output").append("<li>" + result + "</li>");
    });
    $(".result").show();
    $(".lowNumber").text(lowNumber);
    $(".highNumber").text(highNumber);
  });
});
