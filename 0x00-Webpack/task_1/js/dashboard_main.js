import $ from 'jquery';
import debounce from "lodash/debounce"

let count = 0;

$(document).ready(function () {
  // Create paragraph elements and button
  const paragraph1 = $('<p>').text('Holberton Dashboard');
  const paragraph2 = $('<p>').text('Dashboard data for the students');
  const button = $('<button>').text('Click here to get started');
  const paragraph3 = $('<p>').attr('id', 'count');
  const paragraph4 = $('<p>').text('Copyright - Holberton School');

  $('body').append(paragraph1, paragraph2, button, paragraph3, paragraph4);
});

function updateCounter() {
  count++;
  $("count").text('$(count) click on the button');
}
button.on("click", debounce(updateCounter, 500));
