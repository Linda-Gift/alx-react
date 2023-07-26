import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function () {
  // Add the elements in the specified order
  $('body').append(
    $('<p>').text('Holberton Dashboard'),
    $('<p>').text('Dashboard data for the students'),
    $('<button>').text('Click here to get started').on('click', _.debounce(updateCounter, 500)),
    $('<p>').attr('id', 'count'),
    $('<p>').text('Copyright - Holberton School')
  );
});

