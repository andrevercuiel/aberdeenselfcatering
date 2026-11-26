import type{Metadata}from "next";
import {pageMetadata} from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import {cafeSchema} from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import {cafePhotos,EMAIL} from "@/lib/content";
export const metadata=pageMetadata({title:"Checkmate Coffee Café in Aberdeen | Coffee & Breakfast",description:"Visit Checkmate Coffee Café in Aberdeen, Eastern Cape. Enjoy a relaxed Karoo coffee stop, browse café photos and contact us for the current menu.",path:"/checkmate-coffee-cafe",image:"/media/brand/checkmate-coffee-shop.jpeg"});
const menus = [
  {
    "title": "Breakfast",
    "note": "07h00–11h00",
    "items": [
      {
        "name": "Checkmate",
        "price": "R85",
        "description": "2 toast, 2 eggs, 2 rashers bacon, fried tomato. Filter coffee or 500ml Cappy juice."
      },
      {
        "name": "Bikers",
        "price": "R115",
        "description": "2 toast, 2 eggs, 2 rashers bacon, fried tomato, cheese Russian. Filter coffee or 500ml Cappy juice."
      },
      {
        "name": "Great Karoo",
        "price": "R145",
        "description": "2 toast, 2 eggs, 2 rashers bacon, fried tomato, cheese Russian, hash brown, onion rings or mushrooms. Filter coffee or 500ml Cappy juice."
      },
      {
        "name": "Extra chips (small / medium / large)",
        "price": "R25 / R35 / R45",
        "description": ""
      },
      {
        "name": "Cake of the day (breakfast menu)",
        "price": "R25",
        "description": ""
      }
    ]
  },
  {
    "title": "Coffee Time",
    "note": "Medium / Large where indicated",
    "items": [
      {
        "name": "Espresso",
        "price": "R20 / R30",
        "description": ""
      },
      {
        "name": "Espresso Macchiato",
        "price": "R20 / R30",
        "description": ""
      },
      {
        "name": "Filter coffee",
        "price": "R15 / R20",
        "description": ""
      },
      {
        "name": "Cappuccino",
        "price": "R20 / R35",
        "description": ""
      },
      {
        "name": "Latte Macchiato",
        "price": "R20 / R35",
        "description": ""
      },
      {
        "name": "Caffè Latte",
        "price": "R20 / R35",
        "description": ""
      },
      {
        "name": "Americano",
        "price": "R18 / R28",
        "description": ""
      },
      {
        "name": "Caffè Cortado",
        "price": "R18 / R25",
        "description": ""
      },
      {
        "name": "Flat White",
        "price": "R20 / R30",
        "description": ""
      },
      {
        "name": "Hot chocolate",
        "price": "R20 / R35",
        "description": ""
      },
      {
        "name": "Nescafé Gold",
        "price": "R17",
        "description": ""
      },
      {
        "name": "Instant coffee",
        "price": "R15",
        "description": ""
      },
      {
        "name": "Five Roses / Glen tea (pot for 2)",
        "price": "R17",
        "description": ""
      },
      {
        "name": "Rooibos tea (pot for 2)",
        "price": "R17",
        "description": ""
      }
    ]
  },
  {
    "title": "Light Meals",
    "note": "",
    "items": [
      {
        "name": "Roosterkoek — curry mince with cheese",
        "price": "R65",
        "description": ""
      },
      {
        "name": "Roosterkoek — chicken mayo",
        "price": "R65",
        "description": ""
      },
      {
        "name": "Roosterkoek — jam & cheese",
        "price": "R55",
        "description": ""
      },
      {
        "name": "Martie’s mini rolls",
        "price": "R12",
        "description": "Chicken or venison"
      },
      {
        "name": "Anika’s farm pies",
        "price": "R37",
        "description": "Breakfast pie, bobotie or venison"
      },
      {
        "name": "Vall’s meaty homemade pies",
        "price": "R40",
        "description": "Pepper steak"
      },
      {
        "name": "Mareliza’s homemade pies",
        "price": "R40",
        "description": "Chicken curry or chicken mushroom"
      },
      {
        "name": "Cheese Russian & chips (small / medium / large)",
        "price": "R48 / R58 / R68",
        "description": ""
      },
      {
        "name": "Single chicken schnitzel with chips",
        "price": "R95",
        "description": ""
      },
      {
        "name": "Single schnitzel + cheese Russian with chips",
        "price": "R125",
        "description": ""
      },
      {
        "name": "Double schnitzel with chips",
        "price": "R125",
        "description": ""
      },
      {
        "name": "Double schnitzel + cheese Russian with chips",
        "price": "R145",
        "description": ""
      },
      {
        "name": "Dagwood (beef or chicken), single / double",
        "price": "R115 / R145",
        "description": "Bread burger with medium chips"
      },
      {
        "name": "Toastie — egg, bacon, cheese & tomato",
        "price": "R65",
        "description": ""
      },
      {
        "name": "Toastie — ham, cheese & tomato",
        "price": "R42",
        "description": ""
      },
      {
        "name": "Toastie — cheese & tomato",
        "price": "R36",
        "description": ""
      },
      {
        "name": "Extra chips (small / medium / large)",
        "price": "R25 / R35 / R45",
        "description": ""
      },
      {
        "name": "Sweet pancake — cinnamon & sugar",
        "price": "R20",
        "description": ""
      },
      {
        "name": "Sweet pancake — ice cream & chocolate",
        "price": "R55",
        "description": ""
      },
      {
        "name": "Sweet pancake — banana & honey",
        "price": "R35",
        "description": ""
      },
      {
        "name": "Savoury pancake — curry mince & cheese",
        "price": "R65",
        "description": ""
      },
      {
        "name": "Savoury pancake — chicken mayo & cheese",
        "price": "R65",
        "description": ""
      },
      {
        "name": "Savoury pancake — cheese Russian & cheese",
        "price": "R55",
        "description": ""
      },
      {
        "name": "Savoury pancake — scrambled egg, diced bacon & cheese",
        "price": "R65",
        "description": ""
      }
    ]
  },
  {
    "title": "Sweets",
    "note": "",
    "items": [
      {
        "name": "Cake of the day",
        "price": "R20",
        "description": ""
      },
      {
        "name": "Lemon meringue (Fridays only)",
        "price": "R35",
        "description": ""
      },
      {
        "name": "Koeksisters",
        "price": "R8",
        "description": ""
      },
      {
        "name": "Malva pudding & ice cream",
        "price": "R65",
        "description": ""
      },
      {
        "name": "Chocolate sundae",
        "price": "R45",
        "description": ""
      },
      {
        "name": "Caramel / All Bran rusk",
        "price": "R5",
        "description": ""
      },
      {
        "name": "Iced coffee (M / L)",
        "price": "R35 / R45",
        "description": ""
      },
      {
        "name": "Milkshake (M / L)",
        "price": "R35 / R45",
        "description": ""
      },
      {
        "name": "Double-thick milkshake with chocolate (M / L)",
        "price": "R55 / R65",
        "description": ""
      }
    ]
  },
  {
    "title": "Beverages & Snacks",
    "note": "",
    "items": [
      {
        "name": "Still water",
        "price": "R15",
        "description": ""
      },
      {
        "name": "Sparkling water",
        "price": "R18",
        "description": ""
      },
      {
        "name": "Soda 250ml",
        "price": "R10",
        "description": ""
      },
      {
        "name": "Soda 440ml",
        "price": "R15",
        "description": ""
      },
      {
        "name": "Coke 500ml",
        "price": "R22",
        "description": ""
      },
      {
        "name": "Soda can 300ml",
        "price": "R13",
        "description": ""
      },
      {
        "name": "Iced tea",
        "price": "R25",
        "description": ""
      },
      {
        "name": "Cappy 500ml",
        "price": "R17",
        "description": ""
      },
      {
        "name": "Cappy 200ml",
        "price": "R8",
        "description": ""
      },
      {
        "name": "Red Bull",
        "price": "R35",
        "description": ""
      },
      {
        "name": "Appletizer / Grapetizer",
        "price": "R28",
        "description": ""
      },
      {
        "name": "Steri Stumpi",
        "price": "R25",
        "description": ""
      },
      {
        "name": "Powerade",
        "price": "R24",
        "description": ""
      },
      {
        "name": "Henties juice 250ml",
        "price": "R25",
        "description": ""
      },
      {
        "name": "Coke 2L",
        "price": "R35",
        "description": ""
      },
      {
        "name": "Coke Zero 2L",
        "price": "R35",
        "description": ""
      },
      {
        "name": "Milk 1L",
        "price": "R25",
        "description": ""
      },
      {
        "name": "Ice bag",
        "price": "R20",
        "description": ""
      },
      {
        "name": "Spookies (large)",
        "price": "R12",
        "description": ""
      },
      {
        "name": "Nik-Naks (small)",
        "price": "R6",
        "description": ""
      },
      {
        "name": "Lays (large)",
        "price": "R18",
        "description": ""
      },
      {
        "name": "Lays (small)",
        "price": "R10",
        "description": ""
      },
      {
        "name": "Peanuts (small)",
        "price": "R5",
        "description": ""
      },
      {
        "name": "Heineken Zero",
        "price": "R32",
        "description": ""
      },
      {
        "name": "Corona Zero",
        "price": "R35",
        "description": ""
      },
      {
        "name": "Castle Zero",
        "price": "R32",
        "description": ""
      }
    ]
  },
  {
    "title": "Braai Packs",
    "note": "Sheba — pre-order",
    "items": [
      {
        "name": "2 lamb chops + 1 Karoo boerewors",
        "price": "R75",
        "description": ""
      },
      {
        "name": "Karoo boerewors (0.5kg)",
        "price": "R75",
        "description": ""
      },
      {
        "name": "Braai broodjie (cheese, tomato & onion)",
        "price": "R27",
        "description": "Pre-order"
      },
      {
        "name": "Salad for 1 (in season)",
        "price": "R25",
        "description": "Pre-order"
      },
      {
        "name": "Tomato & onion stew (200g)",
        "price": "R25",
        "description": "Pre-order"
      },
      {
        "name": "Mielie pap (300g / 600g)",
        "price": "R25 / R40",
        "description": "Pre-order"
      },
      {
        "name": "Plain roosterkoek",
        "price": "R12",
        "description": "Pre-order"
      },
      {
        "name": "Roosterkoek with garlic butter",
        "price": "R18",
        "description": "Pre-order"
      },
      {
        "name": "Firewood (bag)",
        "price": "R35",
        "description": "Pre-order"
      },
      {
        "name": "Ice (bag)",
        "price": "R20",
        "description": "Pre-order"
      }
    ]
  }
];
export default function Cafe(){return <main><JsonLd data={cafeSchema(cafePhotos[0])}/><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Checkmate Coffee Café",href:"/checkmate-coffee-cafe"}]}/>
 <section className="hero"><Image src="/media/brand/checkmate-coffee-shop.jpeg" alt="Checkmate Coffee Shop wooden chessboard and coffee logo" fill priority sizes="100vw" style={{objectFit:"contain",background:"#2b1b13"}}/><div className="container"><p className="kicker">Eat · Meet · Relax</p><h1>Checkmate Coffee Shop</h1><p className="intro-text">Good coffee, hearty breakfasts and time to slow down in the heart of Aberdeen.</p><div className="actions"><a href="#menu" className="btn btn-sand">Explore the menu ↓</a><a href="https://wa.me/27827990788" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Enquire on WhatsApp ↗</a></div></div></section>
 <section className="section"><div className="container two-col"><div><p className="kicker">Karoo hospitality</p><h2>More than a coffee stop</h2><p className="lede">Part of the Aberdeen Self Catering experience, Checkmate Coffee Café is a friendly place for overnight guests, bikers, local residents and travellers to meet.</p><p>Enjoy coffee, breakfast and conversation after a journey through the Karoo. Ask our team about chess, informal games and upcoming café activities.</p></div><Image src={cafePhotos[1]} alt="Checkmate Coffee Café setting in Aberdeen" loading="lazy" width={1200} height={800} sizes="(max-width: 700px) 100vw, 50vw"/></div></section>
 <section id="menu" className="section section-soft"><div className="container"><p className="kicker">Something delicious</p><h2>Checkmate Café menu</h2><p className="lede">Browse the menu below, and contact Checkmate Café for current availability and prices.</p><div className="two-col" style={{alignItems:"start",gap:22}}>{menus.map(menu=><article key={menu.title} style={{padding:20,border:"1px solid rgba(128,128,128,.35)",borderRadius:12}}><h3>{menu.title}</h3>{menu.note&&<p>{menu.note}</p>}<dl style={{margin:0}}>{menu.items.map(item=><div key={item.name} style={{padding:"10px 0",borderBottom:"1px solid rgba(128,128,128,.2)"}}><div style={{display:"flex",gap:12,justifyContent:"space-between",alignItems:"baseline"}}><dt style={{fontWeight:600}}>{item.name}</dt><dd style={{margin:0,whiteSpace:"nowrap",fontWeight:600}}>{item.price}</dd></div>{item.description&&<dd style={{margin:"4px 0 0",fontSize:"0.9em"}}>{item.description}</dd>}</div>)}</dl></article>)}</div></div></section>
 <section className="section"><div className="container"><p className="kicker">Look around</p><h2>Café gallery</h2><p className="lede">A look inside Checkmate Coffee Café.</p><Gallery images={cafePhotos} name="Checkmate Coffee Café"/></div></section>
 <section className="promo"><div className="container promogrid"><div><h2>Meet us in Aberdeen</h2><p className="lede">Check the current opening hours, ask about groups or find your way to Aberdeen Self Catering.</p></div><div className="actions"><a href="https://wa.me/27827990788" target="_blank" rel="noopener noreferrer" className="btn btn-sand">WhatsApp us ↗</a><Link href="/contact-us" className="btn btn-outline">Find us</Link><a href={"mailto:"+EMAIL} className="btn btn-outline">Email café enquiry</a></div></div></section>
 </main>}

