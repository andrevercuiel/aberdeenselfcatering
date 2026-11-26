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
    "icon": "☀",
    "groups": [
      {
        "title": "Breakfast choices",
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
          }
        ],
        "mode": "single"
      },
      {
        "title": "Extras",
        "items": [
          {
            "name": "Extra chips — Small",
            "price": "R25",
            "description": ""
          },
          {
            "name": "Extra chips — Medium",
            "price": "R35",
            "description": ""
          },
          {
            "name": "Extra chips — Large",
            "price": "R45",
            "description": ""
          },
          {
            "name": "Cake of the day (breakfast menu)",
            "price": "R25",
            "description": ""
          }
        ],
        "mode": "single"
      }
    ],
    "note": "07h00–11h00"
  },
  {
    "title": "Coffee & Tea",
    "icon": "☕",
    "groups": [
      {
        "title": "Coffee & hot chocolate",
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
          }
        ],
        "mode": "sizes"
      },
      {
        "title": "Instant coffee & tea",
        "items": [
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
        ],
        "mode": "single"
      }
    ],
    "note": ""
  },
  {
    "title": "Light Meals",
    "icon": "",
    "groups": [
      {
        "title": "Roosterkoek",
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
          }
        ],
        "mode": "single"
      },
      {
        "title": "Homemade pies",
        "items": [
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
          }
        ],
        "mode": "single"
      },
      {
        "title": "Toasties",
        "items": [
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
          }
        ],
        "mode": "single"
      }
    ],
    "note": ""
  },
  {
    "title": "Karoo Meals",
    "icon": "",
    "groups": [
      {
        "title": "Cheese Russian & chips",
        "items": [
          {
            "name": "Cheese Russian & chips — Small",
            "price": "R48",
            "description": ""
          },
          {
            "name": "Cheese Russian & chips — Medium",
            "price": "R58",
            "description": ""
          },
          {
            "name": "Cheese Russian & chips — Large",
            "price": "R68",
            "description": ""
          }
        ],
        "mode": "single"
      },
      {
        "title": "Chicken schnitzel with chips",
        "items": [
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
          }
        ],
        "mode": "single"
      },
      {
        "title": "Dagwood",
        "items": [
          {
            "name": "Dagwood (beef or chicken) — Single",
            "price": "R115",
            "description": "Bread burger with medium chips"
          },
          {
            "name": "Dagwood (beef or chicken) — Double",
            "price": "R145",
            "description": "Bread burger with medium chips"
          }
        ],
        "mode": "single"
      },
      {
        "title": "Extra chips",
        "items": [
          {
            "name": "Extra chips — Small",
            "price": "R25",
            "description": ""
          },
          {
            "name": "Extra chips — Medium",
            "price": "R35",
            "description": ""
          },
          {
            "name": "Extra chips — Large",
            "price": "R45",
            "description": ""
          }
        ],
        "mode": "single"
      }
    ],
    "note": ""
  },
  {
    "title": "Pancakes & Desserts",
    "icon": "",
    "groups": [
      {
        "title": "Sweet pancakes",
        "items": [
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
          }
        ],
        "mode": "single"
      },
      {
        "title": "Savoury pancakes",
        "items": [
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
        ],
        "mode": "single"
      },
      {
        "title": "Cake & desserts",
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
          }
        ],
        "mode": "single"
      }
    ],
    "note": ""
  },
  {
    "title": "Cold Drinks & Milkshakes",
    "icon": "",
    "groups": [
      {
        "title": "Cold beverages",
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
          }
        ],
        "mode": "single"
      },
      {
        "title": "Iced coffee & milkshakes",
        "items": [
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
        ],
        "mode": "sizes"
      },
      {
        "title": "Zero beverages",
        "items": [
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
          },
          {
            "name": "Savanna (listed under Zero on supplied menu)",
            "price": "R28",
            "description": ""
          }
        ],
        "mode": "single"
      }
    ],
    "note": ""
  },
  {
    "title": "Karoo Braai Packs",
    "icon": "",
    "groups": [
      {
        "title": "Braai meat",
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
          }
        ],
        "mode": "single"
      },
      {
        "title": "Sheba — pre-order",
        "items": [
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
          }
        ],
        "mode": "single"
      },
      {
        "title": "Firewood & ice",
        "items": [
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
        ],
        "mode": "single"
      }
    ],
    "note": ""
  },
  {
    "title": "Snacks & Essentials",
    "icon": "",
    "groups": [
      {
        "title": "Snacks",
        "items": [
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
          }
        ],
        "mode": "single"
      },
      {
        "title": "Essentials",
        "items": [
          {
            "name": "Milk 1L",
            "price": "R25",
            "description": ""
          },
          {
            "name": "Ice bag",
            "price": "R20",
            "description": ""
          }
        ],
        "mode": "single"
      }
    ],
    "note": ""
  }
];
export default function Cafe(){return <main><JsonLd data={cafeSchema(cafePhotos[0])}/><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Checkmate Coffee Café",href:"/checkmate-coffee-cafe"}]}/>
 <section className="hero"><Image src="/media/brand/checkmate-coffee-shop.jpeg" alt="Checkmate Coffee Shop wooden chessboard and coffee logo" fill priority sizes="100vw" style={{objectFit:"contain",background:"#2b1b13"}}/><div className="container"><p className="kicker">Eat · Meet · Relax</p><h1>Checkmate Coffee Shop</h1><p className="intro-text">Good coffee, hearty breakfasts and time to slow down in the heart of Aberdeen.</p><div className="actions"><a href="#menu" className="btn btn-sand">Explore the menu ↓</a><a href="https://wa.me/27827990788" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Enquire on WhatsApp ↗</a></div></div></section>
 <section className="section"><div className="container two-col"><div><p className="kicker">Karoo hospitality</p><h2>More than a coffee stop</h2><p className="lede">Part of the Aberdeen Self Catering experience, Checkmate Coffee Café is a friendly place for overnight guests, bikers, local residents and travellers to meet.</p><p>Enjoy coffee, breakfast and conversation after a journey through the Karoo. Ask our team about chess, informal games and upcoming café activities.</p></div><Image src={cafePhotos[1]} alt="Checkmate Coffee Café setting in Aberdeen" loading="lazy" width={1200} height={800} sizes="(max-width: 700px) 100vw, 50vw"/></div></section>
 <section id="menu" className="section section-soft"><div className="container"><p className="kicker">Something delicious</p><h2>Checkmate Café menu</h2><p className="lede">Browse the menu below, and contact Checkmate Café for current availability and prices.</p><div className="cm-menu">
<style>{`
.cm-menu,.cm-menu *{font-family:Arial,Helvetica,sans-serif;letter-spacing:normal;box-sizing:border-box}
.cm-menu{color:#21160d;font-size:16px;line-height:1.5}
.cm-nav{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:24px}
.cm-nav a{background:#ffbf00;color:#801b12;border:1px solid #a42c12;border-radius:8px;min-height:84px;display:flex;align-items:center;justify-content:center;text-align:center;padding:12px;font-size:16px;font-weight:700;text-decoration:none}
.cm-nav a:hover,.cm-nav a:focus-visible{background:#ffe184}
.cm-card{max-width:780px;margin:0 auto 16px;background:#ffbf00;border:1px solid #8c290f;border-radius:8px;scroll-margin-top:100px;overflow:hidden}
.cm-card summary{cursor:pointer;color:#801b12;font-size:20px;font-weight:700;padding:18px 20px;line-height:1.3}
.cm-body{padding:0 20px 24px}
.cm-logo{position:relative;height:100px;max-width:360px;margin:0 auto 20px;background:#2b1b13;border:2px solid #801b12}
.cm-menu h3{font-family:inherit;color:#801b12;font-size:18px;line-height:1.35;font-weight:700;margin:20px 0 6px}
.cm-menu p{font-family:inherit;font-size:16px;line-height:1.5;color:#21160d;margin:0 0 10px}
.cm-table{width:100%;border-collapse:collapse;table-layout:fixed;font-family:inherit;font-size:16px;line-height:1.5;color:#21160d}
.cm-table th,.cm-table td{font-family:inherit;font-size:16px;line-height:1.5;border:0;border-bottom:1px solid rgba(100,55,0,.28);padding:10px 0;vertical-align:top;background:transparent;color:inherit;text-align:left}
.cm-table td:first-child,.cm-table th:first-child{padding-right:12px;overflow-wrap:break-word}
.cm-table .cm-price{text-align:right;font-weight:700;font-variant-numeric:tabular-nums;white-space:nowrap}
.cm-table .cm-desc{display:block;font-size:16px;font-weight:400;line-height:1.5;margin-top:4px}
.cm-menu .cm-single{width:104px}.cm-menu .cm-size{width:72px}
@media(max-width:600px){.cm-nav{grid-template-columns:repeat(2,minmax(0,1fr))}.cm-body{padding:0 14px 18px}.cm-card summary{padding:16px 14px}.cm-menu .cm-single{width:94px}.cm-menu .cm-size{width:62px}.cm-table td:first-child,.cm-table th:first-child{padding-right:8px}}
`}</style>
<nav className="cm-nav" aria-label="Menu categories">{menus.map((menu,i)=><a key={menu.title} href={"#checkmate-menu-"+i}>{menu.title}</a>)}</nav>
{menus.map((menu,i)=><details className="cm-card" key={menu.title} id={"checkmate-menu-"+i} open={i===0?true:undefined}><summary>{menu.title}</summary><div className="cm-body"><div className="cm-logo"><Image src="/media/brand/checkmate-coffee-shop.jpeg" alt="CheckMate Coffee Shop logo" fill sizes="360px" style={{objectFit:"contain"}}/></div>{menu.note&&<p>{menu.note}</p>}{menu.groups.map(g=><section key={g.title}><h3>{g.title}</h3><table className="cm-table"><colgroup><col/>{g.mode==="sizes"?<><col className="cm-size"/><col className="cm-size"/></>:<col className="cm-single"/>}</colgroup><thead><tr><th scope="col">Item</th>{g.mode==="sizes"?<><th scope="col" className="cm-price">Medium</th><th scope="col" className="cm-price">Large</th></>:<th scope="col" className="cm-price">Price</th>}</tr></thead><tbody>{g.items.map(item=><tr key={item.name}><td>{item.name.replace(/ \(M \/ L\)$/,"")}{item.description&&<span className="cm-desc">{item.description}</span>}</td>{g.mode==="sizes"?item.price.split(" / ").map((price,j)=><td key={j} className="cm-price">{price}</td>):<td className="cm-price">{item.price}</td>}</tr>)}</tbody></table></section>)}</div></details>)}
<script dangerouslySetInnerHTML={{__html:`document.querySelectorAll('.cm-nav a').forEach(function(a){a.addEventListener('click',function(){var d=document.getElementById(a.hash.slice(1));if(d)d.open=true;});});`}}/>
</div></div></section>
 <section className="section"><div className="container"><p className="kicker">Look around</p><h2>Café gallery</h2><p className="lede">A look inside Checkmate Coffee Café.</p><Gallery images={cafePhotos} name="Checkmate Coffee Café"/></div></section>
 <section className="promo"><div className="container promogrid"><div><h2>Meet us in Aberdeen</h2><p className="lede">Check the current opening hours, ask about groups or find your way to Aberdeen Self Catering.</p></div><div className="actions"><a href="https://wa.me/27827990788" target="_blank" rel="noopener noreferrer" className="btn btn-sand">WhatsApp us ↗</a><Link href="/contact-us" className="btn btn-outline">Find us</Link><a href={"mailto:"+EMAIL} className="btn btn-outline">Email café enquiry</a></div></div></section>
 </main>}

