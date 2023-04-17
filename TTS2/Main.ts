import {Serie} from './serie';
import {dataSeries} from './data.js';
let seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="courses"
let seriesDiv : HTMLElement = document.getElementById('promedio')!; // Nodo div que tiene el id="coursesDiv"
let card: HTMLElement = document.getElementById('card')!;
renderSeriesInTable(dataSeries);  
renderMeaninDoc(dataSeries); 
renderCard(dataSeries[0]);

function renderSeriesInTable(series:Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<th>${c.num}</th>
                           <th><a href = "#">${c.name}</a></th>
                           <th>${c.channel}</th>
                           <th>${c.seasons}</t>`;

    let linkElement = trElement.querySelector("a")!;
    linkElement.addEventListener("click", () => {renderCard(c);});
    seriesTbody.appendChild(trElement);
  });

}

function renderCard(series: Serie): void {
  let cardTitle = card.querySelector(".card-body")!;
  let cardDescription = card.querySelector(".card-body")!;
  let cardLink = card.querySelector(".card-body")!;
  let cardImg = card.querySelector(".card-img-top")!;

  cardTitle.innerHTML = "";
  cardDescription.innerHTML = "";
  cardLink.innerHTML = "";
  cardImg.setAttribute("src", "");
  cardImg.setAttribute("src", series.imgLink);
  cardImg.setAttribute("alt", series.imgLink);

  let h3Element = document.createElement("h3");
  let pElement = document.createElement("p");
  let aElement = document.createElement("a");

  aElement.setAttribute("href", series.link);
  
  h3Element.innerHTML = series.name;
  pElement.innerHTML = series.description;
  aElement.innerHTML = series.link;

  cardTitle.appendChild(h3Element);
  cardDescription.appendChild(pElement);
  cardLink.appendChild(aElement);

}

function renderMeaninDoc(series:Serie[]): void {
  let mean = 0;
  series.forEach(c => {
    mean += c.seasons;
  });
  mean = mean/series.length;
  let divElement = document.createElement("div");
  divElement.innerHTML = `<p>El promedio de temporadas es: ${mean}</p>`;
  seriesDiv.appendChild(divElement);
}

