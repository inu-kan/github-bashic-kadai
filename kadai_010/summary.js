const text = $('#target');

$(function () {
  $('#change-color').on('click', function () {
    $(text).css('color', 'red');
  });
  $('#change-text').on('click', function () {
    $(text).text('Hello!');
  });
  $('#fade-out').on('click', function () {
    $(text).fadeOut();
  });
  $('#fade-in').on('click', function () {
    $(text).fadeIn();
  });
});
