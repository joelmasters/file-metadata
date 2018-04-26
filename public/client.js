// client-side js

$(function() {
  console.log('hello world :o')
  var input = document.querySelector('input');
  
  $('#image-file').on('change', function() {
    
    console.log(input.files);
  });
  
  $('#submit-button').on('click', function() {
    var formData = new FormData();
    formData.append('image', $('#image-file')[0].files[0]);

    $.ajax({
           url : '/upload',
           type : 'POST',
           data : formData,
           processData: false,  // tell jQuery not to process the data
           contentType: false,  // tell jQuery not to set contentType
           success : function(data) {
               console.log(data);
               alert('File Size: ' + data + ' bytes');
           }
    });
  });
  
  
})
