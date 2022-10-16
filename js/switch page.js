let pages = ["index.html","about.html"]
let i = null


function backward() {
    /* gets current page*/
    let path = window.location.pathname;
    let html = path.split("/").pop()
    let page;

    for (i in pages) {
        page = pages[i]

        if (page === html) {
            /*checks that you not on the farthest site*/
            if (parseInt(i) === 0) {
                alert('you are already at the furthest page. Try using the forward button')
            }
            /*if your not on the furthest site move to the next site*/
            else{
                console.log("a")
                let next_page_i = parseInt(i) - 1
                window.location = pages[next_page_i]

            }
        }
    }
}
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