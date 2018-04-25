// client-side js

$(function() {
  console.log('hello world :o')
  
 $.post("/upload/image", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
})
