// client-side js

$(function() {
  console.log('hello world :o')
  
  var homeLink = "https://wise-wrench.glitch.me/";
  
  $('#show-list').on('click', function() {
    $.get('/list', function(list) {
      console.log(list);
      list.forEach(function(item) {
         $('#info').append('<li>' + item.long + ': ' + item.short + '</li>'); 
      });
    });
  });
  
  $('#add-button').on('click', function() {
    $.get('/' + $('#input').val(), function(data) {
      console.log(data);
      data = JSON.parse(data);
      console.log(typeof data);
      var code = 'long: <a href="' + data.long + '" target="_blank">' + data.long + '</a><br>short: ' + homeLink + data.short;
        $('#info').html(code);
    });
  });

})
