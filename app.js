const input = $('#registrar-input');

$('#registrar').submit(function (e) {
  e.preventDefault();
  const text = input.val();
  const ul = $('#invitedList');
  const li = $('<li></li>');
  li.text(text);
  ul.append(li);
  input.val('');
});
