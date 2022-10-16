let pages = ["index.html","about.html"]
let i = null


/*set the current page number*/
let path = window.location.pathname;
let html = path.split("/").pop()
let page;

for (i in pages) {
    page = pages[i]
    let page_number = parseInt(i) + 1
    if (page === html) {
        document.getElementById('holding-num').innerText = `< ${page_number} / ${pages.length}`;

    }
}