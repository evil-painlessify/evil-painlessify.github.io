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
searchItem("Louis Vuitton ml");

let container = document.getElementById("lv-container");

function displayData(json) {


    for (i = 0; i < json.Product.length; i++) {
        console.log(json.Product[i].Title);

        let item_name = json.Product[i].Title;
        let item_image = json.Product[i].StockPhotoURL;

        let div = document.createElement("div");

        if (json.Product[i].Title == "Liz Claiborne Curve Crush CUCMCS42X Men's Eau De Cologne Spray Tester - 4.2 oz"){
            continue;
        }
        if (json.Product[i].Title == "Halston Z-14 Men's Eau de Cologne 8oz."){
            continue;
        }
        if (json.Product[i].Title == "Tommy Bahama Island Life 3.4oz Men's Eau de Cologne"){
            continue;
        }

        if(json.Product[i].DisplayStockPhotos == true){
            
            let link = json.Product[i].DetailsURL;
            
            let img = document.createElement("img");
            img.src = item_image;
            div.appendChild(img);

            let p = document.createElement("a");
            p.setAttribute('href', link);
            p.setAttribute('target', "_blank");
            p.innerText = item_name;
            div.appendChild(p);
            
            container.appendChild(div);
        }
    }
}
