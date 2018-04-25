// client-side js

$(function() {
  console.log('hello world :o')
  var input = document.querySelector('input');
  
  $('#image-file').on('change', function() {
    
    console.log(input.files);
  });
  
  
 $('#submit-button').on('click', function() {
   
   $.post('/upload/image', input.file, function(data, status){
          
          alert("Data: " + data + "\nStatus: " + status);
      });
  });
})
