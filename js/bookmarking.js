bookmarks = document.getElementById("bookmarks");
markpage = document.getElementById("markpage");
currentpage = document.location.pathname;

markpage.addEventListener("click", mark);




function mark() {
    marks = JSON.parse(localStorage.getItem("bookmarks"));
    var mark = {pagelink: currentpage, pagetitle: document.title}
    
    if (marks) {


        if (marks.includes(JSON.stringify(mark))) {
            var marks = removeItemOnce(marks, JSON.stringify(mark))
            localStorage.setItem("bookmarks", JSON.stringify(marks))
            var linktoremove = document.getElementById("current")
            linktoremove.remove()

        } else {
            var mark = {pagelink: currentpage, pagetitle: document.title}
            marks.push(JSON.stringify(mark))
            localStorage.setItem("bookmarks", JSON.stringify(marks))
            var link = document.createElement("a")
            link.href = mark.pagelink
            link.innerText = mark.pagetitle
            link.id = "current"
            bookmarks.append(link)
        }
    } else {
        var mark = {pagelink: currentpage, pagetitle: document.title}
        var marks = [JSON.stringify(mark)]
        localStorage.setItem("bookmarks", JSON.stringify(marks))
    }
}


function addlinks() {
    var marks = JSON.parse(localStorage.getItem("bookmarks"));
    if (marks != null || marks != ""){
        for (var bookmark in marks) {
            var object = JSON.parse(marks[bookmark])
            var link = document.createElement("a")
            link.href = object.pagelink
            link.innerText = object.pagetitle
            bookmarks.append(link)
           
        }
    }
    
}


function setid() {
    for (var link of bookmarks.children) {
        if (link.innerText == document.title) {
            link.setAttribute("id", "current");
        }
       
    }
}

addlinks()

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }


setid()