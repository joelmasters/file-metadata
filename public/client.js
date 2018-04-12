// client-side js

$(function() {
  console.log('hello world :o')
  
  

})

$(document).onLoa(function() {
  console.log('loaded');
  $.get('/', function (res) {
    $('#info').text(res);
  });
  
});
