import type {Metadata} from "next";
import {pageMetadata} from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import {moonWalkEventSchema} from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import {attractions,MOON_WALK_POSTER,FULL_MOON_WHATSAPP,BOOKING_URL} from "@/lib/content";
export const metadata=pageMetadata({title:"Full Moon Walk, Run & Cycle | Aberdeen Self Catering",description:"Discover things to do in Aberdeen, Eastern Cape: the monthly 11 km and 21 km Full Moon Hike, Run & Cycle, Karoo hiking, biking, birdwatching, scenic farms and day trips.",path:"/activities/moonwalk"});
export const revalidate=3600;
const moonWalkPhotos=[
 {src:"/media/full-moon-walk-hikers-at-night.webp",alt:"Full Moon Walk hikers gathered together after a night walk",caption:"A group of walkers at the end of a night on the trail."},
 {src:"/media/full-moon-walk-group-at-farm-night.webp",alt:"Full Moon Walk group gathered outside a Karoo farm building at night",caption:"Walkers meet up at a Karoo farm along the route."},
 {src:"/media/full-moon-walk-sunrise-hikers.webp",alt:"Full Moon Walk participants walking together at sunrise in the Karoo",caption:"The Karoo landscape at first light."},
 {src:"/media/full-moon-walk-sunrise-landscape.webp",alt:"Sunrise over the Karoo mountains beside a walking track",caption:"Sunrise over the open Karoo countryside."},
 {src:"/media/full-moon-walk-finish-group.webp",alt:"Full Moon Walk participants wearing event shirts together after the walk",caption:"A shared meal and a chance to celebrate the walk."},
];
export default function Activities(){
 const novemberWalkCurrent=Date.now()<Date.parse("2026-11-29T23:59:59+02:00");
 return <main>{novemberWalkCurrent&&<JsonLd data={moonWalkEventSchema()}/>}<Breadcrumbs items={[{label:"Home",href:"/"},{label:"Activities",href:"/activities"},{label:"Full Moon Walk",href:"/activities/moonwalk"}]}/>
 <section className="sub-hero"><div className="container"><p className="kicker">Walking · Running · Cycling</p><h1>Monthly Full Moon Walk</h1><p>Experience the Karoo by moonlight, from Aberdeen to Wynberg Guest Farm.</p><a className="btn btn-sand" href="#moonwalk">Full Moon Walk details ↓</a></div></section>
 <section className="section" id="moonwalk"><div className="container two-col"><div><p className="kicker">Featured monthly event</p><h2>Monthly Full Moon Hike, Run & Cycle</h2><p className="lede">An overnight Karoo event from Aberdeen Self Catering to Wynberg Guest Farm, with 11 km and 21 km route options.</p>{novemberWalkCurrent?<>
 <div className="stat-row"><div><strong>28 Nov 2026</strong><br/>Event date</div><div><strong>19:00</strong><br/>Assembly opens</div><div><strong>11 km / 21 km</strong><br/>Route options</div></div>
 <p style={{marginTop:22}}>Assemble at Aberdeen Self Catering at 19:00 on Saturday, 28 November. Departure at 20:00 for hikers, runners and cyclists. Halfway: De Kruis Farm Stay at 22:00; destination: Wynberg Guest Farm at 01:00 on Sunday, 29 November. Entry R200 per person.</p>
 <p>Bring your own backpack with snacks, drinks and a strong headlamp (compulsory). Load luggage onto the support vehicle at departure. No medical support on the route; sign the register and indemnity. Light meals and snacks are for sale at the start and finish.</p><p>Included: coffee or tea at the start, halfway and finish; Sunday breakfast (coffee, oats, hot dogs and rusks); camping spot with hot showers (own tent and bedding); return transport. Other accommodation is available.</p><p>Accommodation enquiries: Aberdeen Self Catering 082 799 0788; De Kruis Farm Stay 084 498 2740; Wynberg Guest Farm 082 723 0025.</p>
 <p><strong>Book by WhatsApping your name to Jurgens Strydom: 082 389 5770.</strong></p>
 </>:<>
 <p>For upcoming monthly walks, contact Jurgens Strydom on 082 389 5770 for dates and arrangements.</p>
 </>}<div className="actions"><a href={FULL_MOON_WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn">WhatsApp Jurgens</a><a href="tel:+27823895770" className="btn btn-outline">Call the organiser</a></div></div>{novemberWalkCurrent&&<Image src={MOON_WALK_POSTER} alt="Official Full Moon Walk poster" loading="lazy" width={1200} height={2000} sizes="(max-width: 768px) 100vw, 50vw" style={{height:600,width:"auto",maxWidth:"100%",objectFit:"contain",background:"#f6f4ec"}} unoptimized />}</div></section>
 <section className="section section-soft moonwalk-gallery-section"><div className="container"><p className="kicker">Walk memories</p><h2>Moments from the Full Moon Walk</h2><p className="lede">A look back at the people, night skies and Karoo sunrise along the route.</p><div className="moonwalk-gallery">{moonWalkPhotos.map(photo=><figure className="moonwalk-gallery-item" key={photo.src}><Image src={photo.src} alt={photo.alt} loading="lazy" width={1200} height={800} sizes="(max-width: 700px) 50vw, (max-width: 1000px) 33vw, 25vw"/><figcaption>{photo.caption}</figcaption></figure>)}</div></div></section>
 <section className="promo"><div className="container promogrid"><div><h2>Stay and enjoy the Karoo</h2><p className="lede">Turn an outdoor experience into a comfortable overnight break.</p></div><div className="actions"><Link href="/accommodation" className="btn btn-sand">View accommodation</Link><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Book a stay ↗</a></div></div></section>
 </main>}

