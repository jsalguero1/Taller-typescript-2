import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="courses"
var seriesDiv = document.getElementById('promedio'); // Nodo div que tiene el id="coursesDiv"
var card = document.getElementById('card');
renderSeriesInTable(dataSeries);
renderMeaninDoc(dataSeries);
renderCard(dataSeries[0]);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th>".concat(c.num, "</th>\n                           <th><a href = \"#\">").concat(c.name, "</a></th>\n                           <th>").concat(c.channel, "</th>\n                           <th>").concat(c.seasons, "</t>");
        var linkElement = trElement.querySelector("a");
        linkElement.addEventListener("click", function () { renderCard(c); });
        seriesTbody.appendChild(trElement);
    });
}
function renderCard(series) {
    var cardTitle = card.querySelector(".card-body");
    var cardDescription = card.querySelector(".card-body");
    var cardLink = card.querySelector(".card-body");
    var cardImg = card.querySelector(".card-img-top");
    cardTitle.innerHTML = "";
    cardDescription.innerHTML = "";
    cardLink.innerHTML = "";
    cardImg.setAttribute("src", "");
    cardImg.setAttribute("src", series.imgLink);
    cardImg.setAttribute("alt", series.imgLink);
    var h3Element = document.createElement("h3");
    var pElement = document.createElement("p");
    var aElement = document.createElement("a");
    aElement.setAttribute("href", series.link);
    h3Element.innerHTML = series.name;
    pElement.innerHTML = series.description;
    aElement.innerHTML = series.link;
    cardTitle.appendChild(h3Element);
    cardDescription.appendChild(pElement);
    cardLink.appendChild(aElement);
}
function renderMeaninDoc(series) {
    var mean = 0;
    series.forEach(function (c) {
        mean += c.seasons;
    });
    mean = mean / series.length;
    var divElement = document.createElement("div");
    divElement.innerHTML = "<p>El promedio de temporadas es: ".concat(mean, "</p>");
    seriesDiv.appendChild(divElement);
}
