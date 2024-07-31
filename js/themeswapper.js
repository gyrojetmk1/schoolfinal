
var theme = localStorage.getItem("theme")
var maincolor = document.getElementById("maincolor")
var loadercolor = document.getElementById("loadercolor")
var switchcolor = document.getElementById("switchcolor")



if (theme == null || theme == "") {
    if (getCookie("theme")) {
        localStorage.setItem("theme", getCookie("theme"))
        var theme = localStorage.getItem("theme")
        maincolor.href = maincolor.href.replace(/dark/, theme)
        loadercolor.href = loadercolor.href.replace(/dark/, theme)
        switchcolor.href = switchcolor.href.replace(/dark/, theme)
    } else {
       /* do nothing */
    }
} else {
    maincolor.href = maincolor.href.replace(/dark/, theme)
    loadercolor.href = loadercolor.href.replace(/dark/, theme)
    switchcolor.href = switchcolor.href.replace(/dark/, theme)
}



function deleteAllCookies() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

deleteAllCookies()


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }