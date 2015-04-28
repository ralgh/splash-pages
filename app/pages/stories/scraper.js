

var company_name = $('.page-hero h1').text().trim();
var tagline = $('.site-container.u-padding-Vxxl:first h2').text().trim();

var tips = $('.grid:first p').map(function(){ return $(this).text().trim(); }).toArray();
var quotes = $('.grid.u-padding-Vxl').map(function() {
  var $t = $(this);
  var tag = $t.find('h2').text().trim();
  var quote = $t.find('p').map(function() {
    return $(this).text().trim() }).toArray(); return {quote: quote, tag: tag }; }).toArray();

var bigquoteel = $('div[class^=story-hero');
var bigquote = {text: bigquoteel.find('p').text().trim()};
if (bigquoteel.find('img').length) {
  bigquote.img = bigquoteel.find('img').attr('src');
}
bigquote.person = bigquoteel.find('.u-text-m').text().trim();
bigquote.position = bigquoteel.find('.u-text-xs').text().trim();

var out = {
  name: company_name,
  tagline: tagline,
  tips: tips,
  quotes: quotes,
  bigquote: bigquote
};

console.log(JSON.stringify(out));
