"use client";
import { useState } from "react";

const homes=[["01","99,27 m²","172,9 m²","469.000 €"],["02","99,24 m²","144,4 m²","463.000 €"],["03","89,45 m²","140,25 m²","439.000 €"],["04","89,73 m²","249,4 m²","449.000 €"]];
const copy={
de:{nav:["Projekt","Einheiten","Lage"],cta:"Exposé anfragen",eye:"NEUBAUPROJEKT · FÜRSTENZELL",h1:"Heute investieren.",h2:"Morgen einziehen.",lead:"Vier hochwertige Neubau-Doppelhaushälften. Flexibel vermieten, später selbst bewohnen.",houses:"Verfügbare Häuser",stats:["Wohneinheiten","m² Wohnfläche","Tsd. Euro"],ie:"EINE IMMOBILIE. VIELE MÖGLICHKEITEN.",i1:"Ihr 10-Jahres-Plan",i2:"beginnt heute",ip1:"Heute kaufen Sie ein modernes Neubauhaus. In den nächsten Jahren wird es vermietet – die Mieteinnahmen unterstützen Ihre Finanzierung.",ip2:"Und wenn sich Ihr Leben verändert? Dann ziehen Sie einfach selbst ein.",is:"Heute Kapitalanlage. Morgen Ihr Zuhause.",green:"LEBEN IM GRÜNEN",gt:"Ruhig wohnen. Flexibel bleiben.",future:"NEUBAU MIT ZUKUNFT",quality:"Qualität, die",remain:"bleibt.",qp:"Modern, energieeffizient und bis ins Detail durchdacht.",features:["KfW-55-Effizienzhaus","Luft-Wasser-Wärmepumpe","Fußbodenheizung","3-fach verglaste Fenster","Terrasse & eigener Garten","Schlüsselfertige Übergabe"],project:"DAS PROJEKT",four:"Vier Häuser.",decision:"Eine Entscheidung.",house:"HAUS",rooms:"4 Zimmer",garden:"Garten",details:"Details anfragen",bonus:"EXKLUSIVER VORTEIL",kitchen:"Design-Einbauküche",worth:"im Wert von 13.000 €",bp:"Der erste Käufer erhält eine hochwertige Einbauküche mit Kochinsel – ohne Aufpreis.",example:"BEISPIELRECHNUNG",invest:"Investition mit",perspective:"Perspektive.",fp:"Ein mögliches Szenario bei einem Kaufpreis von 459.000 €. Alle Angaben sind unverbindlich und ersetzen keine Finanz- oder Steuerberatung.",capital:"Eigenkapital",monthly:"Monatsrate",rent:"Mieteinnahmen",cash:"Cashflow",pm:"pro Monat, möbliert*",py:"pro Jahr vor Bewirtschaftungskosten*",interest:"3,93 % Zins · 2 % Tilgung",approx:"ca.",place:"DIE LAGE",quiet:"Mehr Ruhe.",short:"Kurze Wege.",pp:"Fürstenzell verbindet niederbayerische Lebensqualität mit der schnellen Erreichbarkeit von Passau, Österreich und dem Bayerischen Thermenland.",dist:[["5 Min.","Kindergarten & Grundschule"],["20 Min.","Passau"],["20 Min.","Bad Füssing"],["ca. 15 km","Österreich"]],standard:"PERSÖNLICHER ANSPRUCH",quote:"„Ich baue keine Häuser, die ich selbst nicht kaufen würde.“",bio:"Seit über 15 Jahren investiere ich in Immobilien. Seit 2021 realisiere ich als Projektentwicklerin Wohnbauprojekte in Deutschland – mit hochwertiger Bauqualität, effizienter Technik und Grundrissen, die langfristig funktionieren.",years:"Jahre Erfahrung",since:"Seit 2021",dev:"Projektentwicklung in Deutschland",next:"IHR NÄCHSTER SCHRITT",request:"Fordern Sie jetzt",expose:"Ihr Exposé an.",cp:"Erhalten Sie Grundrisse, detaillierte Preisinformationen und eine persönliche Beratung.",consult:"Persönliche Beratung",slogan:"Neubau. Werte. Zuhause."},
ru:{nav:["Проект","Объекты","Расположение"],cta:"Получить экспозе",eye:"НОВОСТРОЙКА · ФЮРСТЕНЦЕЛЛЬ",h1:"Инвестируйте сегодня.",h2:"Живите завтра.",lead:"Четыре качественных новых дома. Сдавайте сейчас — переезжайте сами позже.",houses:"Доступные дома",stats:["Жилых объекта","м² жилая площадь","тыс. евро"],ie:"ОДНА НЕДВИЖИМОСТЬ. МНОЖЕСТВО ВОЗМОЖНОСТЕЙ.",i1:"Ваш план на 10 лет",i2:"начинается сегодня.",ip1:"Сегодня вы покупаете современный новый дом. В ближайшие годы он сдаётся в аренду, а доход помогает финансировать покупку.",ip2:"А если ваши планы изменятся? Вы сможете переехать в него сами.",is:"Сегодня инвестиция. Завтра ваш дом.",green:"ЖИЗНЬ СРЕДИ ЗЕЛЕНИ",gt:"Тихая жизнь. Свобода выбора.",future:"НОВОСТРОЙКА С БУДУЩИМ",quality:"Качество, которое",remain:"остаётся.",qp:"Современный, энергоэффективный и продуманный до мелочей проект.",features:["Энергоэффективность KfW-55","Воздушно-водяной тепловой насос","Тёплые полы","Окна с тройным стеклопакетом","Терраса и собственный сад","Сдача под ключ"],project:"О ПРОЕКТЕ",four:"Четыре дома.",decision:"Одно решение.",house:"ДОМ",rooms:"4 комнаты",garden:"сад",details:"Запросить детали",bonus:"ЭКСКЛЮЗИВНОЕ ПРЕИМУЩЕСТВО",kitchen:"Дизайнерская кухня",worth:"стоимостью 13 000 €",bp:"Первый покупатель получает качественную встроенную кухню с островом без дополнительной платы.",example:"ПРИМЕР РАСЧЁТА",invest:"Инвестиция с",perspective:"перспективой.",fp:"Примерный сценарий при стоимости покупки 459 000 €. Все данные ориентировочные и не заменяют финансовую или налоговую консультацию.",capital:"Собственный капитал",monthly:"Ежемесячный платёж",rent:"Доход от аренды",cash:"Денежный поток",pm:"в месяц, с мебелью*",py:"в год до эксплуатационных расходов*",interest:"3,93 % ставка · 2 % погашение",approx:"около",place:"РАСПОЛОЖЕНИЕ",quiet:"Больше тишины.",short:"Всё рядом.",pp:"Фюрстенцелль сочетает спокойную жизнь в Нижней Баварии с быстрым доступом к Пассау, Австрии и термальному региону Баварии.",dist:[["5 мин.","Детский сад и школа"],["20 мин.","Пассау"],["20 мин.","Бад-Фюссинг"],["около 15 км","Австрия"]],standard:"ЛИЧНЫЙ ПРИНЦИП",quote:"«Я не строю дома, которые не купила бы сама».",bio:"Более 15 лет я инвестирую в недвижимость. С 2021 года реализую жилые проекты в Германии — с высоким качеством строительства, эффективной инженерией и планировками, рассчитанными на долгие годы.",years:"лет опыта",since:"С 2021 года",dev:"Девелопмент в Германии",next:"ВАШ СЛЕДУЮЩИЙ ШАГ",request:"Получите сейчас",expose:"полное экспозе.",cp:"Получите планировки, подробные цены и персональную консультацию.",consult:"Персональная консультация",slogan:"Новостройки. Ценности. Дом."}};

const distanceCopy={
 de:{title:"Entfernungen im Überblick",items:[
  ["nur 5 Minuten zu Fuß entfernt","Kindergarten und Grundschule in Engertsham"],
  ["ca. 10 Autominuten","Maristengymnasium Fürstenzell"],
  ["ca. 5–10 Autominuten","Zentrum Fürstenzell mit Einkaufsmöglichkeiten und Dienstleistungen"],
  ["ca. 12–16 km · rund 20 Autominuten","Passau"],
  ["rund 15–20 Autominuten","Bad Griesbach mit Wohlfühl-Therme"],
  ["20 Autominuten","Bad Füssing mit seinen bekannten Thermen"],
  ["ca. 15 km","Österreichische Grenze"],
  ["über Passau-Mitte und Passau-Süd","Autobahn A3 — gut erreichbar"]
 ]},
 ru:{title:"Расстояния",items:[
  ["всего 5 минут пешком","Детский сад и начальная школа в Энгертсхаме"],
  ["около 10 минут на автомобиле","Гимназия Maristengymnasium Fürstenzell"],
  ["около 5–10 минут на автомобиле","Центр Фюрстенцелля: магазины и услуги"],
  ["около 12–16 км · примерно 20 минут","Пассау"],
  ["около 15–20 минут на автомобиле","Бад-Грисбах и термальный комплекс Wohlfühl-Therme"],
  ["20 минут на автомобиле","Бад-Фюссинг и его знаменитые термы"],
  ["около 15 км","Граница с Австрией"],
  ["через Passau-Mitte и Passau-Süd","Автомагистраль A3 — удобный выезд"]
 ]}
};

const aboutCopy={
 de:{
  eyebrow:"WARUM ICH GENAU DIESE HÄUSER BAUE",
  name:"Mein Name ist Anna Hippius (Anastasiia Strizhkova).",
  paragraphs:[
   "Seit über 15 Jahren investiere ich in Immobilien und begleite Menschen dabei, langfristig Vermögen durch Immobilien aufzubauen.",
   "In dieser Zeit habe ich selbst in Immobilien in mehreren Ländern investiert und ein eigenes internationales Immobilienportfolio aufgebaut. Dadurch kenne ich den gesamten Weg eines Investors – aus eigener Erfahrung.",
   "Seit 2021 realisiere ich als Projektentwicklerin Wohnbauprojekte in Deutschland.",
   "Für mich ist Bauen weit mehr als ein Geschäftsmodell. Es bedeutet, moderne, energieeffiziente und nachhaltige Wohnhäuser zu schaffen, in denen Menschen sich langfristig wohlfühlen können.",
   "Ich bin überzeugt, dass eine Immobilie nicht nur eine sichere Kapitalanlage sein sollte, sondern gleichzeitig ein Zuhause mit hoher Lebensqualität.",
   "Deshalb entstehen alle Projekte der EMDG Haus GmbH mit einem klaren Anspruch: hochwertige Bauqualität, energieeffiziente Technik, durchdachte Grundrisse und dauerhaft niedrige Betriebskosten.",
   "Mein Ziel ist es, dass unsere Käufer ihre Entscheidung nicht nur am Tag des Kaufs, sondern auch noch viele Jahre später als richtig empfinden."
  ],
  overview:"Auf einen Blick",
  facts:["Über 15 Jahre Erfahrung im Bereich Immobilieninvestitionen","Eigenes internationales Immobilienportfolio","Projektentwicklerin in Deutschland seit 2021","Gründerin der Anna Hippius Academy","Expertin für Immobilieninvestitionen und Immobilienfinanzierungen in Deutschland","Persönliche Begleitung während des gesamten Kaufprozesses"],
  claim:"Mein persönlicher Anspruch",quote:"Ich baue keine Häuser, die ich selbst nicht kaufen würde."
 },
 ru:{
  eyebrow:"ПОЧЕМУ Я СТРОЮ ИМЕННО ТАКИЕ ДОМА",
  name:"Меня зовут Анна Хиппиус (Анастасия Стрижкова).",
  paragraphs:[
   "Более 15 лет я инвестирую в недвижимость и помогаю людям создавать долгосрочный капитал с её помощью.",
   "За это время я инвестировала в недвижимость в нескольких странах и сформировала собственный международный портфель. Поэтому весь путь инвестора я знаю на личном опыте.",
   "С 2021 года я реализую жилые проекты в Германии как девелопер.",
   "Для меня строительство — гораздо больше, чем бизнес-модель. Это создание современных, энергоэффективных и экологичных домов, в которых людям будет комфортно долгие годы.",
   "Я убеждена: недвижимость должна быть не только надёжной инвестицией, но и домом с высоким качеством жизни.",
   "Поэтому каждый проект EMDG Haus GmbH создаётся по чётким принципам: высокое качество строительства, энергоэффективная инженерия, продуманные планировки и стабильно низкие эксплуатационные расходы.",
   "Моя цель — чтобы покупатели считали своё решение правильным не только в день покупки, но и много лет спустя."
  ],
  overview:"Коротко обо мне",
  facts:["Более 15 лет опыта инвестирования в недвижимость","Собственный международный портфель недвижимости","Девелопер жилых проектов в Германии с 2021 года","Основательница Anna Hippius Academy","Эксперт по инвестициям и финансированию недвижимости в Германии","Личное сопровождение на всех этапах покупки"],
  claim:"Мой личный принцип",quote:"Я не строю дома, которые не купила бы сама."
 }
};

export default function Home(){
 const[open,setOpen]=useState(false);const[lang,setLang]=useState<"de"|"ru">("de");const t=copy[lang];
 return <main lang={lang}>
 <header className="topbar"><a className="brand" href="#top"><span>EMDG</span><small>HAUS GMBH</small></a><nav><a href="#projekt">{t.nav[0]}</a><a href="#einheiten">{t.nav[1]}</a><a href="#lage">{t.nav[2]}</a></nav><div className="headerActions"><div className="langSwitch" role="group" aria-label="Language"><button className={lang==="de"?"active":""} onClick={()=>setLang("de")}>DE</button><span>/</span><button className={lang==="ru"?"active":""} onClick={()=>setLang("ru")}>RU</button></div><a className="navCta" href="#kontakt">{t.cta}<span>↗</span></a></div></header>
 <section className="hero" id="top"><img src="/images/drive/project-01.webp" alt="EMDG Haus Fürstenzell"/><div className="heroShade"/><div className="heroCopy"><p className="eyebrow light">{t.eye}</p><h1 className="heroTitle">{lang==="de"?<><span>Heute</span><span>Investieren</span><em><span>Morgen</span><span>Einziehen</span></em></>:<><span>Инвестируйте</span><span>сегодня</span><em><span>Живите</span><span>завтра</span></em></>}</h1><p className="lead">{t.lead}</p><a className="button orange" href="#einheiten">{t.houses}<span>↓</span></a></div><div className="heroStats"><div><b>4</b><span>{t.stats[0]}</span></div><div><b>89–99</b><span>{t.stats[1]}</span></div><div><b>{lang==="de"?"ab 439":"от 439"}</b><span>{t.stats[2]}</span></div></div></section>
 <section className="intro section" id="projekt"><div><p className="eyebrow">{t.ie}</p><h2>{t.i1}<br/><em>{t.i2}</em></h2></div><div className="introText"><p>{t.ip1}</p><p>{t.ip2}</p><strong>{t.is}</strong></div></section>
 <section className="imageBreak"><img src="/images/drive/project-09.webp" alt="Garten und Terrasse"/><div className="imageTag"><span>{t.green}</span><b>{t.gt}</b></div></section>
 <section className="features section"><div className="featuresTitle"><p className="eyebrow light">{t.future}</p><h2>{t.quality}<br/><em>{t.remain.replace(/\.$/,"")}</em></h2><p>{t.qp}</p></div><div className="featureGrid">{t.features.map((x,i)=><div className="feature" key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div></section>
 <section className="units section" id="einheiten"><div className="sectionHead"><div><p className="eyebrow">{t.project}</p><h2>{t.four.replace(/\.$/,"")}<br/><em>{t.decision.replace(/\.$/,"")}</em></h2></div><p>Schmiedbergstraße 7 und 7a<br/>94081 Fürstenzell</p></div><div className="unitGrid">{homes.map(h=><article className="unit" key={h[0]}><div className="unitNo">{t.house} {h[0]}</div><div className="unitInfo"><span>{t.rooms}</span><span>{h[1]}</span><span>{h[2]} {t.garden}</span></div><b>{h[3]}</b><a href="#kontakt">{t.details} ↗</a></article>)}</div><aside className="bonus"><span>{t.bonus}</span><h3>{t.kitchen}<br/><em>{t.worth}</em></h3><p>{t.bp}</p></aside></section>
 <section className="gallery" aria-label="Projektgalerie"><div className="galleryMain"><img src="/images/drive/project-03.webp" alt="Frontansicht der Doppelhäuser"/></div><div><img src="/images/drive/project-05.webp" alt="Seitenansicht des Projekts"/></div><div><img src="/images/drive/project-06.webp" alt="Garagen und Carports"/></div><div><img src="/images/drive/project-08.webp" alt="Terrasse und eigener Garten"/></div><div><img src="/images/drive/project-11.webp" alt="Heller Wohn- und Essbereich"/></div><div><img src="/images/drive/project-15.webp" alt="Modernes Badezimmer"/></div><div><img src="/images/drive/project-16.webp" alt="Schlafzimmer mit Gartenblick"/></div></section>
 <section className="finance section"><div className="financeCopy"><p className="eyebrow light">{t.example}</p><h2>{t.invest}<br/><em>{t.perspective.replace(/\.$/,"")}</em></h2><p>{t.fp}</p></div><div className="numbers"><div><span>{t.capital}</span><b>45.900 €</b><small>10 %</small></div><div><span>{t.monthly}</span><b>{t.approx} 2.041 €</b><small>{t.interest}</small></div><div><span>{t.rent}</span><b>{t.approx} 2.300 €</b><small>{t.pm}</small></div><div className="accent"><span>{t.cash}</span><b>{t.approx} +3.100 €</b><small>{t.py}</small></div></div></section>
 <section className="location section" id="lage"><div className="locationImage"><img src="/images/corner.jpeg" alt="Fürstenzell"/></div><div className="locationCopy"><p className="eyebrow">{t.place}</p><h2>{t.quiet.replace(/\.$/,"")}<br/><em>{t.short.replace(/\.$/,"")}</em></h2><p>{t.pp}</p><h3 className="distanceTitle">{distanceCopy[lang].title}</h3><ul>{distanceCopy[lang].items.map(d=><li key={d[1]}><b>{d[0]}</b><span>{d[1]}</span></li>)}</ul></div></section>
 <section className="aboutPerson"><div className="aboutPersonCopy"><p className="eyebrow light">{aboutCopy[lang].eyebrow}</p><h2>Anna Hippius<br/><em>{lang==="de"?"Immobilien mit Haltung":"Недвижимость с принципами"}</em></h2><p className="aboutName"><strong>{aboutCopy[lang].name}</strong></p><div className="aboutText">{aboutCopy[lang].paragraphs.map(p=><p key={p}>{p}</p>)}</div><h3 className="overviewTitle">{aboutCopy[lang].overview}</h3><ul className="aboutFacts">{aboutCopy[lang].facts.map(f=><li key={f}>{f}</li>)}</ul><p className="claimLabel">{aboutCopy[lang].claim}</p><blockquote>{aboutCopy[lang].quote}</blockquote><a className="button orange" href="#kontakt">{t.consult}<span>↗</span></a></div><div className="aboutPortrait"><img src="/images/anna-hippius.jpeg" alt="Anna Hippius — EMDG Haus GmbH"/><div className="portraitCaption"><strong>Anna Hippius</strong><span>Anastasiia Strizhkova</span></div></div></section>
 <section className="contact section" id="kontakt"><p className="eyebrow">{t.next}</p><h2>{t.request}<br/><em>{t.expose}</em></h2><p>{t.cp}</p><button className="button orange" onClick={()=>setOpen(!open)}>{t.consult}<span>↗</span></button>{open&&<div className="contactCard"><strong>EMDG Haus GmbH</strong><span>Tal 44, 80331 München</span><a href="tel:+491747825045">+49 174 7825045</a><span>Anna Hippius / Anastasiia Strizhkova<br/>Kristina Davydova</span></div>}</section>
 <footer><a className="brand" href="#top"><span>EMDG</span><small>HAUS GMBH</small></a><p>{t.slogan}</p><div><a href="#projekt">{t.nav[0]}</a><a href="#einheiten">{t.nav[1]}</a><a href="#lage">{t.nav[2]}</a></div><small>© 2026 EMDG Haus GmbH</small></footer>
 </main>
}
