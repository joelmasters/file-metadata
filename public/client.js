// client-side js

$(function() {
  console.log('hello world :o')
  
  $.get('/t', function(info) {
    var code = 'Your IP address is: ' + info["ip address"] + '<br>' + 
               'Your language is: ' + info["language"] + '<br>' + 
               'Your operating system is: ' + info["operating system"];
    $('#info').html(code);
    console.log(info);
  });
})
