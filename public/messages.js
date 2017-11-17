$(document).ready(function(){
  $("#sendMessage").click(function(){
      var myobj = {From:$("#fromNumber").val(),To:$("#toNumber").val(),Message:$("#messageToSend").val()};
      jobj = JSON.stringify(myobj);
      console.log(jobj);
      $("#json").text(jobj);
var url = "message";
$.ajax({
url:url,
type: "POST",
data: jobj,
contentType: "application/json; charset=utf-8",
success: function(data,textStatus) {
    $("#done").html(textStatus);
    getMessages();
}
})
  });

getMessages = function(){
    $.getJSON('message', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var message in data) {
        com = data[message];
        everything += "<li> From: " + com.From + " -- Message: " + com.Message + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })

};

$("#getMessages").click(function() {
  getMessages();
});


$('#deleteMessages').click(function() {
  $.ajax({
    url: 'message',
    type: 'delete',
    success: function(result) {
        // Do something with the result
        $("#messages").html('');
    }
  });
});

});

