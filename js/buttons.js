var pages = ["index.html","about.html"]
function forward() {
    let file = $('html').html();
    /* gets current page*/
    let path = document.location.pathname;
    let html = path.split("/").pop()
    let page;

    for (i in pages) {
        page = pages[i]


        if (page === html) {
            /*checks that you not on the farthest site*/
            let total = pages.length - 1;
            if (parseInt(i) === total) {
                alert('you are already at the furthest page. Try using the back button')
            }
            /*if your not on the furthest site move to the next site*/
            else{
                console.log("apple")
                let next_page_i = parseInt(i) + 1
                document.location = pages[next_page_i]

            }
        }
    }
}


function backward() {
    console.log("apple")
    /* gets current page*/
    let path = document.location.pathname;
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
                let next_page_i = parseInt(i) - 1
                document.location = pages[next_page_i]

            }
        }
    }
}

