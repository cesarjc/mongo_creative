$(document).ready(function(){
  $("#sendMessage").click(function(){
      var myobj = {from:$("#fromNumber").val(),to:$("#toNumber").val(),message:$("#messageToSend").val()};
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
    $("#done").html("Message Sent!");
    getMessages();
}
})
  });

getMessages = function(){
	var geturl = 'message?from='+$("#fromNumber").val()+'&to='+$('#toNumber').val();
    $.getJSON(geturl, function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var message in data) {
        com = data[message];
	console.log("here:");
console.log(com);
        everything += "<li> From: " + com.from + " -- Message: " + com.message + "</li>";
      }
      everything += "</ul>";
      $("#messages").html(everything);
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

