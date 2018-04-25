// client-side js

$(function() {
  console.log('hello world :o')
  
  $('#image-file').on('change', function() {
    console.log($('input').files);
  });
  
  
 $('#submit-button').on('click', function() {
   console.log('image file: ' + $('#image-file').files);
   
   $.post('/upload/image', $('#image-file').files, function(data, status){
          
          alert("Data: " + data + "\nStatus: " + status);
      });
  });
})
