// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o')
  
  $.get('/t', function(info) {
    $('#info').text(JSON.stringify(info, null, 2));
    console.log(info);
  });

})
