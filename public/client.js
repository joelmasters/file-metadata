// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o')
  
  $('body').append('Hello');
  
  $.get('/hello', function(test) {
    $('<li></li>').text(test).appendTo('ul#tests');
  })

})
