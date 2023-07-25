import $ from 'jquery';
$(document).ready(function () {
  // Create three different paragraphs
  const paragraph1 = $('<p>').text('Holberton Dashboard');
  const paragraph2 = $('<p>').text('Dashboard data for the students');
  const paragraph3 = $('<p>').text('Copyright - Holberton School');

  // Append the paragraphs to the page body
  $('body').append(paragraph1, paragraph2, paragraph3);
});
