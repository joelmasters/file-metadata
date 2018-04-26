// client-side js

$(function() {
  console.log('hello world :o')
  var input = document.querySelector('input');
  
  $('#image-file').on('change', function() {
    
    console.log(input.files);
  });
  
  $('form').submit(function() { 
    $.post('/upload', function(data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    }); 
  });
})
