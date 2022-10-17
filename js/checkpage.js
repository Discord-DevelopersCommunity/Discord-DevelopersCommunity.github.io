/* gets current page*/
let path = document.location.pathname;
let html = path.split("/").pop()
let page;
for (i in pages) {
    page = pages[i]
    if (page === html) {
        document.getElementById("holding-num").innerText = `< ${parseInt(i) + 1} / ${pages.length}`
    }
}