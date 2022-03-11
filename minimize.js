//files
function minimize() {
  var x = document.getElementById("window");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizedfiles").style.display = "none";
  } else {
    fileminimized()
    x.style.display = "none";
  }
}

function fileminimized() {
  if (document.getElementById("minimizedfiles").style.display === "none") {
    document.getElementById("minimizedfiles").style.display = "block";
  } else {
    document.getElementById("minimizedfiles").style.display = "none";
  }
}

//mememaker

function minimize2() {
  var x = document.getElementById("window2");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizedmeme").style.display = "none";
  } else {
    minimizedmeme()
    x.style.display = "none";
  }
}

function minimizedmeme() {
  if (document.getElementById("minimizedmeme").style.display === "none") {
    document.getElementById("minimizedmeme").style.display = "block";
  } else {
    document.getElementById("minimizedmeme").style.display = "none";
  }
}

//notes

function minimize3() {
  var x = document.getElementById("window3");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizednotes").style.display = "none";
  } else {
    minimizednotes()
    x.style.display = "none";
  }
}

function minimizednotes() {
  if (document.getElementById("minimizednotes").style.display === "none") {
    document.getElementById("minimizednotes").style.display = "block";
  } else {
    document.getElementById("minimizednotes").style.display = "none";
  }
}

//media

function minimize4() {
  var x = document.getElementById("window4");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizedmedia").style.display = "none";
  } else {
    minimizedmedia()
    x.style.display = "none";
  }
}

function minimizedmedia() {
  if (document.getElementById("minimizedmedia").style.display === "none") {
    document.getElementById("minimizedmedia").style.display = "block";
  } else {
    document.getElementById("minimizedmedia").style.display = "none";
  }
}

//store

function minimize5() {
  var x = document.getElementById("window5");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizedstore").style.display = "none";
  } else {
    minimizedstore()
    x.style.display = "none";
  }
}

function minimizedstore() {
  if (document.getElementById("minimizedstore").style.display === "none") {
    document.getElementById("minimizedstore").style.display = "block";
  } else {
    document.getElementById("minimizedstore").style.display = "none";
  }
}
function minimizedgtk() {
  if (document.getElementById("minimizedgtk").style.display === "none") {
    document.getElementById("minimizedgtk").style.display = "block";
  } else {
    document.getElementById("minimizedgtk").style.display = "none";
  }
}

//settings

function minimize7() {
  var x = document.getElementById("window6");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizedsettings").style.display = "none";
  } else {
    minimizedsettings()
    x.style.display = "none";
  }
}

function minimize8() {
  var x = document.getElementById("window7");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizedgtk").style.display = "none";
  } else {
    minimizedgtk()
    x.style.display = "none";
  }
}

function minimizedsettings() {
  if (document.getElementById("minimizedsettings").style.display === "none") {
    document.getElementById("minimizedsettings").style.display = "block";
  } else {
    document.getElementById("minimizedsettings").style.display = "none";
  }
}