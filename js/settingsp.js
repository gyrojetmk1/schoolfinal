var lightswitch = document.getElementById("lightswitch");
var transswitch = document.getElementById("transswitch");
var maincolor = document.getElementById("maincolor")
var loadercolor = document.getElementById("loadercolor")
var switchcolor = document.getElementById("switchcolor")
var bookswitch = document.getElementById("bookswitch")

lightswitch.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      maincolor.href = "../css/light/main.css"
      loadercolor.href = "../css/light/loader.css"
      switchcolor.href = "../css/light/switch.css"
      transswitch.checked = false;
      document.cookie = "theme=light; path=/"
      localStorage.setItem("theme", "light")
    } else {
      maincolor.href = "../css/dark/main.css"
      loadercolor.href = "../css/dark/loader.css"
      switchcolor.href = "../css/dark/switch.css"
      document.cookie = "theme=dark; path=/"
      localStorage.setItem("theme", "dark")
    }
  })


  transswitch.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      maincolor.href = "../css/trans/main.css";
      loadercolor.href = "../css/trans/loader.css";
      switchcolor.href = "../css/trans/switch.css";
      lightswitch.checked = false;
      document.cookie = "theme=trans; path=/"
      localStorage.setItem("theme", "trans")
    } else {
      maincolor.href = "../css/dark/main.css";
      loadercolor.href = "../css/dark/loader.css";
      switchcolor.href = "../css/dark/switch.css";
      document.cookie = "theme=dark; path=/"
      localStorage.setItem("theme", "dark")
    }
  })

  if (localStorage.getItem("theme") == "light") {
    lightswitch.checked = true;
  } else if (localStorage.getItem("theme") == "trans"){
    transswitch.checked = true;
  } else {
    transswitch.checked = false;
    lightswitch.checked = false;
  }

  if (localStorage.getItem("bookmarking") == "true") {
    bookswitch.checked = true;
  } else {
    bookswitch.checked = false;
  }

  bookswitch.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      bookmarks.style.opacity = "100";
      bookmarks.style.height = "min-content";
      bookmarks.style.overflowX = "scroll";
      localStorage.setItem("bookmarking", "true")
    } else {
      bookmarks.style.opacity = "0";
      bookmarks.style.height = "0";
      bookmarks.style.overflowX = "hidden";
      localStorage.setItem("bookmarking", "false")
    }
  })

