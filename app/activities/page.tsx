import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import {pageMetadata} from "@/lib/seo";
import {activities} from "@/lib/activities";

export const metadata=pageMetadata({
 title:"Activities in Aberdeen | Walking, Cycling & Karoo Experiences",
 description:"Explore ten Aberdeen Self Catering activities: Full Moon Walk, cycling, hiking, 4x4 trails, camping, birdwatching, Karoo cooking, off-road riding, art and treasure hunts.",
 path:"/activities"
});

export default function Activities(){
 return <main>
  <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Activities",href:"/activities"}]}/>
  <section className="sub-hero">
   <div className="container">
    <p className="kicker">Explore Aberdeen and the Karoo</p>
    <h1>Activities &amp; experiences</h1>
    <p>Choose an experience below. Select any activity logo to view its own page and make an enquiry.</p>
   </div>
  </section>
  <section className="section" aria-label="Activity menu">
   <div className="container">
    <div className="activity-logo-grid">
     {activities.map(activity=><Link href={"/activities/"+activity.slug} className="activity-logo-card" key={activity.slug} aria-label={"View "+activity.title}>
      <Image src={activity.logo} alt={activity.title+" activity logo"} width={700} height={700} sizes="(max-width:600px) 46vw, (max-width:1000px) 30vw, 24vw" />
      <h2>{activity.title}</h2>
      <p>{activity.intro}</p>
      <span>View activity →</span>
     </Link>)}
    </div>
   </div>
  </section>
 </main>;
}
