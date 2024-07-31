var menubutton = document.getElementById("menubtn");
var sidebar = document.getElementById("sidebar");
var links = document.getElementById("links");
var content = document.getElementById("content");
var bookmarks = document.getElementById("bookmarks")
var markpage = document.getElementById("markpage")




function menu() {
    if (sidebar.style.width == "0px") {
        sidebar.style.width = "200px";
        sidebar.style.borderWidth = "0 2px 0 0";
        menubutton.classList.add("activem");
        setTimeout(function(){
            links.style.opacity = "100";
        }, 200);
        
    } else {
        setTimeout(function(){
            sidebar.style.width = "0px"
            menubutton.classList.remove("activem");
            sidebar.style.borderWidth = "0 0 0 0";
        }, 200);
        links.style.opacity = "0";
    }
};

function loadpage() {
    setTimeout(function(){
        content.style.display = "block";
        setTimeout(function(){
            content.style.opacity = "100";
        }, 20);
        loader.style.display = "none";
        sidebar.style.display = "block";
        if (localStorage.getItem("bookmarking") == "true"){
          loadbookmark()
        }
    }, getRandomInt(500,3000));
}

function loadbookmark() {
  bookmarks.style.opacity = "100";
  bookmarks.style.height = "min-content";
  bookmarks.style.overflowX = "auto";
  markpage.style.display = "block";
}


window.onload = function() {
    loadpage();
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

/*
if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("You've tried to open context menu"); //here you draw your own menu
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("You've tried to open context menu");
      window.event.returnValue = false;
    });
  }
*/

/*
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    document.getElementById("mainheader").style.fontSize = "18px";
  } else {
    document.getElementById("mainheader").style.fontSize = "25px";
  }
} 
*/