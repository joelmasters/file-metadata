// client-side js

$(function() {
  console.log('hello world :o')
  
 $('form').on('submit', function() {
   console.log('image file: ' + $('#image-file').file);
   
   $.post('upload/image', $('#image-file').file, function(data, status){
          
          alert("Data: " + data + "\nStatus: " + status);
      });
  });
})
