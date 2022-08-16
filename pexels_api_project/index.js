window.onload=function(){
    var searchForm = document.getElementById(`search-form`)
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const obj = JSON.parse(xhttp.responseText);
                document.querySelector(`.search-result-container`).innerHTML = " ";
                for(let photo of obj.photos) {
                    $(`.search-result-container`).append(`<div class="search-result-item"><img src=${photo.src.landscape}><h4>${photo.photographer}</h4></div>`);
                };
            }
        };

        $("#search-bar").keyup(function() {
            const value = $(this).val();
            // const resName = document.querySelector(`#results-name`);
            document.querySelector(`#results-name`).innerHTML = " ";
            
            xhttp.open("GET", `https://api.pexels.com/v1/search/?page=1&per_page=12&query=${value}`, true);
            xhttp.setRequestHeader('Authorization', '563492ad6f91700001000001a7ba1db44ff44af29744cadd59a69656');
            xhttp.send();
            $(`#results-name`).append(`<h2>${value[0].toUpperCase().concat(value.slice(1))} Images</h2>`)
        });
    });
};

