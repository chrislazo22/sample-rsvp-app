var rsvp = rsvp || {};

$(document).ready(function() {
  rsvp.addPerson();
  rsvp.removePerson();
  rsvp.createListItem();
  rsvp.toggleResponded();
});

rsvp.addPerson = function() {
  const input = $('#registrar-input');
  const ul = $('#invitedList');
  $('#registrar').submit(function (e) {
    e.preventDefault();
    const text = input.val();

    var li = rsvp.createListItem(text);

    ul.append(li);
    input.val('');
  });
};

rsvp.createListItem = function(text) {
  const li = $('<li></li>');
  li.text(text);

  const label = $('<label>');
  label.text('Confirmed');
  const checkbox = $('<input type="checkbox"/>');
  label.append(checkbox);
  li.append(label);

  const button = $('<button>');
  button.text('remove');
  li.append(button);

  return li;
};

rsvp.removePerson = function() {
  const ul = $('#invitedList');
  ul.on('click', function (e) {
    if(e.target.tagName == 'BUTTON') {
      const li = e.target.parentNode;
      const ul = li.parentNode;
      ul.removeChild(li);
    }
  })
};

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
