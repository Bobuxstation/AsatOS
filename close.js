function Closetestwindow() {
  var x = document.getElementById("window");
  if (x.style.display === "none") {
    document.getElementById("minimizedfiles").style.display = "none";
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function Closetestwindow2() {
  var x = document.getElementById("window2");
  if (x.style.display === "none") {
    document.getElementById("minimizedmeme").style.display = "none";
    x.style.display = "block";
    var mememaker = document.getElementById("mememaker"); mememaker.src = ("https://bobuxstation.github.io/KaOS-Store/apps/MEMEMAKER.html");
  } else {
    x.style.display = "none";
    var mememaker = document.getElementById("mememaker"); mememaker.src = ("");
  }
}
function Closetestwindow3() {
  var x = document.getElementById("window3");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizednotes").style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function Closetestwindow4() {
  var x = document.getElementById("window4");
  if (x.style.display === "none") {
    x.style.display = "block";
    var medias = document.getElementById("media"); media.src = ("MEDIA.html");
    document.getElementById("minimizedmedia").style.display = "none";
  } else {
    x.style.display = "none";
    var medias = document.getElementById("media"); media.src = ("");
  }
}
function Closetestwindow5() {
  var x = document.getElementById("window5");
  if (x.style.display === "none") {
    x.style.display = "block";
    var store = document.getElementById("store"); store.src = ("https://bobuxstation.github.io/KaOS-Store/");
    document.getElementById("minimizedstore").style.display = "none";
  } else {
    x.style.display = "none";
    var store = document.getElementById("store"); store.src = ("");
  }
}
function Closetestwindow6() {
  var x = document.getElementById("window6");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizedabout").style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function Closetestwindow7() {
  var x = document.getElementById("window7");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizedgtk").style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function ToggleMenu() {
  var x = document.getElementById('appMenu');
  if (x.style.display === "none") {
    x.style.display = "flex";
  }
  else {
    x.style.display = "none";
  }
}