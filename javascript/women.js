function searchItem(search) {
    search = encodeURIComponent(search);

    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let appID = 'KennethM-Scenti-PRD-3c8eaa0db-1c03fd2e';
    let url = proxy + `https://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=${appID}&siteid=0&QueryKeywords=${search}&version=1157&MaxEntries=45`;

    let result;
    fetch(url)
        .then(function (response) {
            return response.json();

        })
        .then(function (json) {
            console.log(json);
            displayData(json);

        })
}
searchItem("womens perfume");

let container = document.getElementById("womens-container");

function displayData(json) {

    for (i = 0; i < json.Product.length; i++) {
        console.log(json.Product[i].Title);

        let item_name = json.Product[i].Title;
        let item_image = json.Product[i].StockPhotoURL;

        let div = document.createElement("div");

        if(json.Product[i].Title == "ESCADA Magnetism 2.5oz Women's Eau De Perfume Spray"
            || json.Product[i].Title == "Gillette Venus & Olay Razor Blade Refills, Women's, Sugarberry Scent, 4 Count"
            || json.Product[i].Title == "Escada Island Kiss 3.4oz  Women's Perfume"
            || json.Product[i].Title == "Burberry Touch 3.4oz Women's Eau De Perfume Tester"){
            continue;
        }

        if(json.Product[i].DisplayStockPhotos == true){
            let img = document.createElement("img");
            img.src = item_image;
            div.appendChild(img);

            let link = json.Product[i].DetailsURL;
            
            let p = document.createElement("a");
            p.setAttribute('href', link);
            p.setAttribute('target', "_blank")
            p.innerText = item_name;
            div.appendChild(p);
            

            container.appendChild(div);
        }
    }
}
