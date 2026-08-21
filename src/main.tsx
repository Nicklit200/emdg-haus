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

  const financeDescription = document.querySelector<HTMLElement>(".financeCopy > p:last-child");
  if (financeDescription) {
    const description = isRussian
      ? "Примерный сценарий при стоимости покупки 449 000 €. Все данные ориентировочные и не заменяют финансовую или налоговую консультацию."
      : "Ein mögliches Szenario bei einem Kaufpreis von 449.000 €. Alle Angaben sind unverbindlich und ersetzen keine Finanz- oder Steuerberatung.";
    if (financeDescription.textContent !== description) financeDescription.textContent = description;
  }

  const financeCards = document.querySelectorAll<HTMLElement>(".numbers > div");
  if (financeCards.length >= 4) {
    const capitalValue = financeCards[0].querySelector<HTMLElement>("b");
    const capitalSmall = financeCards[0].querySelector<HTMLElement>("small");
    const monthlyValue = financeCards[1].querySelector<HTMLElement>("b");
    const monthlySmall = financeCards[1].querySelector<HTMLElement>("small");
    const rentValue = financeCards[2].querySelector<HTMLElement>("b");
    const rentSmall = financeCards[2].querySelector<HTMLElement>("small");
    const cashValue = financeCards[3].querySelector<HTMLElement>("b");
    const cashSmall = financeCards[3].querySelector<HTMLElement>("small");

    if (capitalValue && capitalValue.textContent !== "44.900 €") capitalValue.textContent = "44.900 €";
    if (capitalSmall && capitalSmall.textContent !== "10 %") capitalSmall.textContent = "10 %";
    if (monthlyValue && monthlyValue.textContent !== "ca. 1.660 €") monthlyValue.textContent = "ca. 1.660 €";
    if (monthlySmall) {
      const monthlyInfo = isRussian ? "3,93 % ставка · 1 % погашение" : "3,93 % Zins · 1 % Tilgung";
      if (monthlySmall.textContent !== monthlyInfo) monthlySmall.textContent = monthlyInfo;
    }
    if (rentValue && rentValue.textContent !== "ca. 2.300 €") rentValue.textContent = "ca. 2.300 €";
    if (rentSmall) {
      const rentInfo = isRussian ? "в месяц, с мебелью*" : "pro Monat, möbliert*";
      if (rentSmall.textContent !== rentInfo) rentSmall.textContent = rentInfo;
    }
    if (cashValue && cashValue.textContent !== "ca. +7.678 €") cashValue.textContent = "ca. +7.678 €";
    if (cashSmall) {
      const cashInfo = isRussian ? "в год до эксплуатационных расходов*" : "pro Jahr vor Bewirtschaftungskosten*";
      if (cashSmall.textContent !== cashInfo) cashSmall.textContent = cashInfo;
    }
  }

  const aboutName = russianMain?.querySelector<HTMLElement>(".aboutName strong");
  if (aboutName) {
    const correctedName = "Меня зовут Анна Гиппиус (Анастасия Стрижкова).";
    if (aboutName.textContent !== correctedName) aboutName.textContent = correctedName;
  }
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

const rootElement = document.getElementById("root")!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);

const siteObserver = new MutationObserver(syncSiteFixes);
siteObserver.observe(rootElement, {
  childList: true,
  subtree: true,
  characterData: true,
});

window.setTimeout(syncSiteFixes, 50);
window.setTimeout(syncSiteFixes, 250);
window.setTimeout(syncSiteFixes, 1000);
