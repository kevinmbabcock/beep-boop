var beepBoop = function (lowNumber, highNumber, name, direction) {
  var ranges = [];

  if (!name || (!lowNumber && lowNumber !== 0) || !highNumber || (lowNumber >= highNumber) || lowNumber < 0) {
    //send alert if no name or numbers are entered, or if numbers dont satisfy conditions
    alert("Please follow the directions. They are very simple.");
  } else if (direction === "highFirst") { //if user wants to display highest number first
    for (index = highNumber; index >= lowNumber; index--) {
      if (index % 100 === 10) { //add "Beep-Boop!" if both '1' and '0'
        ranges.push("Beep-Boop!");
      } else if (index % 3 === 0 && index !== 0) { //add text with user name if number is divisible by 3
        ranges.push("I'm sorry, " + name + ". I'm afraid I can't do that.");
      } else if (index === 0 || index % 10 === 0) { //add "Beep!" if number contains a '0'
        ranges.push("Beep!");
      } else if (index === 1 || index % 10 === 1 || (index > 10 && index < 20)) { //add "Boop!" if number contains a '1'
        ranges.push("Boop!");
      } else { //add original number if no conditions are satisfied
        ranges.push(index);
      }
    }
  } else { //assumes user wants to display lowest to highest if not specified
    for (index = lowNumber; index <= highNumber; index++) {
      if (index % 100 === 10) { //add "Beep-Boop!" if both '1' and '0'
        ranges.push("Beep-Boop!");
      } else if (index % 3 === 0 && index !== 0) { //add text if number is divisible by 3
        ranges.push("I'm sorry, " + name + ". I'm afraid I can't do that.");
      } else if (index === 0 || index % 10 === 0) { //add "Beep!" if number contains a '0'
        ranges.push("Beep!");
      } else if (index === 1 || index % 10 === 1 || (index > 10 && index < 20)) { //add "Boop!" if number contains a '1'
        ranges.push("Boop!");
      } else { //add original number if no conditions are satisfied
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
    $("#output").empty();
    for (index = 0; index < results.length; index++) {
      $("#output").append("<li>" + results[index] + "</li>");
      if (index % 10 === 0 && index !== 0) {
        $("#output").append("</li>**********</li>");
      }
    };
    if (!userName || (!lowNumber && lowNumber !== 0) || !highNumber || (lowNumber >= highNumber) || lowNumber < 0) {
      //if no name or numbers are entered, or if numbers dont satisfy conditions, keep 'result' class hidden
      $(".results").hide();
      $(".oops").show();
    } else {
      $(".lowNumber").text(lowNumber);
      $(".highNumber").text(highNumber);
      $(".result").show();
    }
  });
});
