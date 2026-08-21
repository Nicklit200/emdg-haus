import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../app/page";
import "../app/globals.css";
import "../app/headline-adjustments.css";

const whatsappNumber = "491747825045";

const homeData = [
  { area: "89,45 m²", garden: "172,90 m²", price: "449.000 €" },
  { area: "89,73 m²", garden: "144,40 m²", price: "439.000 €" },
  { area: "99,27 m²", garden: "143,25 m²", price: "459.000 €" },
  { area: "99,24 m²", garden: "269,40 m²", price: "479.000 €" },
];

const openWhatsApp = () => {
  const isRussian = document.querySelector('main[lang="ru"]') !== null;
  const message = isRussian
    ? "Здравствуйте! Меня интересует проект EMDG Haus. Я хотела бы получить дополнительную информацию."
    : "Hallo! Ich interessiere mich für das Projekt EMDG Haus und möchte weitere Informationen erhalten.";

  window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const syncSiteFixes = () => {
  const russianMain = document.querySelector('main[lang="ru"]');
  const introAccent = russianMain?.querySelector('.intro h2 em');

  if (introAccent && introAccent.textContent?.endsWith('.')) {
    introAccent.textContent = introAccent.textContent.slice(0, -1);
  }

  const isRussian = russianMain !== null;
  const gardenLabel = isRussian ? "сад" : "Garten";
  const units = document.querySelectorAll<HTMLElement>(".unitGrid .unit");

  units.forEach((unit, index) => {
    const data = homeData[index];
    if (!data) return;

    const info = unit.querySelectorAll<HTMLElement>(".unitInfo span");
    const price = unit.querySelector<HTMLElement>(":scope > b");
    const gardenText = `${data.garden} ${gardenLabel}`;

    if (info[1] && info[1].textContent !== data.area) info[1].textContent = data.area;
    if (info[2] && info[2].textContent !== gardenText) info[2].textContent = gardenText;
    if (price && price.textContent !== data.price) price.textContent = data.price;
  });
};

document.addEventListener(
  "click",
  (event) => {
    const clickedElement = event.target as HTMLElement | null;
    const actionElement = clickedElement?.closest(
      ".button, .navCta, .unit a",
    );

    if (!(actionElement instanceof HTMLElement)) return;

    event.preventDefault();
    event.stopPropagation();
    openWhatsApp();
  },
  true,
);

document.addEventListener("click", (event) => {
  const clickedElement = event.target as HTMLElement | null;
  if (clickedElement?.closest(".langSwitch button")) {
    window.setTimeout(syncSiteFixes, 0);
  }
});

const rootElement = document.getElementById("root")!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);

window.setTimeout(syncSiteFixes, 0);
