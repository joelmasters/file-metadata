// client-side js

$(function() {
  console.log('hello world :o')
  
 $('form').on('submit', function() {           
   $.post('/upload/image', function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
      });
  });
})
