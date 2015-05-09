$(function(){

  var stack = [];
  var operation, entry, top, bottom, result;

  $('.ops').on('click', function(){
    entry = $('#entry').val();

    if(entry){
      stack.push(entry);
      $('#entry').val('');
    }

    if(stack.length === 2 && operation){
      try {
        calc(stack, operation);
      } catch (err) {
        $('#error').text('Sorry, your input was bad. Try again');
        $('#entry').val('ERR');
      }
      stack = [];
    }

    operation = $(this).text().trim();
  });

  $('#clear').on('click', function(){
    stack = [];
    operation = undefined;
  });

  function calc(nums, op){
    top = getNums(nums[0]);
    bottom = getNums(nums[1]);
    result = eval(top[0] + op + bottom[0]) + '+' + eval(top[1] + op + bottom[1]) + 'i';
    $('#entry').val(result);
  }

  function getNums(str){
    str = str.split('+');
    str[0] = parseFloat(str[0]);
    str[1] = parseFloat(str[1].substr(0, str[1].length-1));
    return str;
  }

});