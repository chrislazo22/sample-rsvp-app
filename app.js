var rsvp = rsvp || {};

$(document).ready(function() {
  rsvp.toggleResponded();
  rsvp.addPerson();
});

rsvp.addPerson = function() {
const input = $('#registrar-input');
const ul = $('#invitedList');
  $('#registrar').submit(function (e) {
    e.preventDefault();
    const text = input.val();
    const li = $('<li></li>');
    li.text(text);

    const label = $('<label>');
    label.text('Confirmed');
    const checkbox = $('<input type="checkbox"/>');
    label.append(checkbox);
    li.append(label);
    ul.append(li);
    input.val('');
  });

}

rsvp.toggleResponded = function() {
const ul = $('#invitedList');
  ul.on('change', function (e) {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;

    if (checked) {
      listItem.className = 'responded';
    } else {
      listItem.className = '';
    };
  });
}
