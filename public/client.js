// client-side js

$(function() {
  console.log('hello world :o')
  
  $('#show-list').on('click', function() {
    $.get('/list', function(list) {
      console.log(list);
      list.forEach(function(item) {
         $('#info').append('<li>' + item.long + ': ' + item.short + '</li>'); 
      });
    });
  });
  
  $('#add-button').on('click', function() {
    $.get($('#input').val(), function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
  });
  
  $.get('/', function(res) {
    console.log(res);
  });

})
