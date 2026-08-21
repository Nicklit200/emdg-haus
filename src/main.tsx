import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../app/page";
import "../app/globals.css";
import "../app/headline-adjustments.css";

const whatsappNumber = "491747825045";

document.addEventListener(
  "click",
  (event) => {
    const clickedElement = event.target as HTMLElement | null;
    const consultationButton = clickedElement?.closest(".contact .button.orange");

    if (!(consultationButton instanceof HTMLButtonElement)) return;

    event.preventDefault();
    event.stopPropagation();

    const isRussian = document.querySelector('main[lang="ru"]') !== null;
    const message = isRussian
      ? "Здравствуйте! Меня интересует проект EMDG Haus. Я хотела бы получить персональную консультацию."
      : "Hallo! Ich interessiere mich für das Projekt EMDG Haus und möchte eine persönliche Beratung.";

    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  },
  true,
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
