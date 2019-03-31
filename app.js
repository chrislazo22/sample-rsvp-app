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
  const span = document.createElement('span');
  span.textContent = text
  li.append(span);

  const label = $('<label>');
  label.text('Confirmed');
  const checkbox = $('<input type="checkbox"/>');
  label.append(checkbox);
  li.append(label);

  const editButton = $('<button>');
  editButton.text('edit');
  li.append(editButton);

  const removeButton = $('<button>');
  removeButton.text('remove');
  li.append(removeButton);

  return li;
};

rsvp.removePerson = function() {
  const ul = $('#invitedList');
  ul.on('click', function (e) {
    if (e.target.tagName == 'BUTTON') {
      const button = e.target;
      const li = e.target.parentNode;
      const ul = li.parentNode;
      if (button.textContent == 'remove') {
        ul.removeChild(li);
      } else if (button.textContent === 'edit') {
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span)
        li.removeChild(span);
        button.textContent = 'save';
      }
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
