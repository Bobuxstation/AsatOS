var span = document.getElementById('span');
var span2 = document.getElementById('span2');

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var day = getDayName(Date.now(), "en-US");
  span.textContent =
    (day.slice(0, 3) + " " + d.getDate() + ", ") + ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
  span2.textContent =
    (" ") + ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
};

setInterval(time)