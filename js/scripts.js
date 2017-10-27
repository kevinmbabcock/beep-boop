



$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = $("#userNumber").val();
    var result = beepBoop(userNumber);
    $(".result").show();
    $("#output").text(result);
  });
});
