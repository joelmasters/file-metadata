// client-side js

$(function() {
  console.log('hello world :o')
  
 $('#submit-button').on('click', function() {
   console.log('image file: ' + $('input').files);
   
   $.post('upload/image', $('#image-file').files, function(data, status){
          
          alert("Data: " + data + "\nStatus: " + status);
      });
  });
})
