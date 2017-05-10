"use strict";

// show inline code
$('.content script').each(function() {
  var code = $.trim( $(this).text() );
  code = $('<div/>').text(code).html();
  $(this).after('<pre><code class="language-javascript">'+code+'</code></pre>')
})

// add pagination
var numPages = 9;
var path = location.pathname.substr(1);
var currentPage = string.split('/').pop()[0];
console.log(location.pathname);
var pagination = '<nav><ul class="pagination">\n';
pagination += '  <li><a href="./">1</a></li>\n';

for (var i = 2; i <= numPages; i++) {
  pagination += '  <li><a href="./'+i+'.html">'+i+'</a></li>\n';
};

pagination += '</ul></nav>';
var $pagination = $(pagination)
$pagination.find('li').eq(currentPage-1).addClass('active');
$('.content').prepend($pagination).append($pagination.clone())

function byCreatedAt (a, b) {
  return a.createdAt > b.createdAt ? -1 : 1;
}
