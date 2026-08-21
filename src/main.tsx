import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../app/page";
import "../app/globals.css";
import "../app/headline-adjustments.css";

const whatsappNumber = "491747825045";

const openWhatsApp = () => {
  const isRussian = document.querySelector('main[lang="ru"]') !== null;
  const message = isRussian
    ? "Здравствуйте! Меня интересует проект EMDG Haus. Я хотела бы получить дополнительную информацию."
    : "Hallo! Ich interessiere mich für das Projekt EMDG Haus und möchte weitere Informationen erhalten.";

  window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const removeRussianIntroPeriod = () => {
  const russianMain = document.querySelector('main[lang="ru"]');
  const introAccent = russianMain?.querySelector('.intro h2 em');

  if (introAccent && introAccent.textContent?.endsWith('.')) {
    introAccent.textContent = introAccent.textContent.slice(0, -1);
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

const observer = new MutationObserver(removeRussianIntroPeriod);
observer.observe(rootElement, { childList: true, subtree: true });
removeRussianIntroPeriod();
