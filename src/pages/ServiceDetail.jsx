import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, PhoneCall, MessageCircle, Shield, CheckCircle } from 'lucide-react';
import styles from './ServiceDetail.module.css';

const servicesData = [
  { id:1, title:'Termite Control', cat:'residential', img:'/images/termite control.png', desc:'Advanced termite detection and treatment using Termatrac T3i technology for complete home protection.', longDesc:'Termites can silently cause catastrophic damage to the structural integrity of your home. Our Termite Control service relies on the industry-leading Termatrac T3i device to scan and detect termite nesting locations, pathways, and moisture pools behind walls, floors, and soil without any destructive drilling. Once identified, we apply eco-friendly, WHO-approved chemical barriers that eliminate the colony and prevent future infestations.', benefits:['100% non-invasive termite scanning','3-5 Year Service Warranty with annual checks','WHO & CIB-approved eco-friendly chemicals','Complete colony elimination program'] },
  { id:2, title:'Commercial Pest Control', cat:'commercial', img:'/images/commercialpestcontrol.png', longDesc:'Pest issues in a commercial environment can damage reputation, compromise safety, and lead to regulatory penalties. We customize integrated pest management programs for business offices and commercial complexes, delivering discreet and highly effective treatments to keep your premises pristine.', benefits:['Discreet, after-hours treatment options','Compliance audits and documentation','Zero disruption to your daily operations'], desc:'Comprehensive pest management programs tailored for businesses, offices, and commercial spaces.' },
  { id:3, title:'Industrial Pest Control', cat:'industrial', img:'/images/foodindustrypestcontrol.png', longDesc:'Heavy-duty industries require robust, reliable, and compliant pest management. We specialize in managing pests in factories, manufacturing plants, and industrial yards, ensuring safe storage of raw materials and clean workspaces.', benefits:['Heavy industrial-grade barrier treatments','Continuous monitoring programs','Customized rodent and insect exclusion plans'], desc:'Heavy-duty pest control solutions for factories, plants, and industrial facilities.' },
  { id:4, title:'Cockroach Control', cat:'residential', img:'/images/cockroachcontrol.png', longDesc:'Cockroaches carry harmful bacteria and multiply quickly. Our cockroach gel baiting and residual spray program ensures rapid knockdown of current populations and provides a protective layer to stop future nesting.', benefits:['Premium odorless gel bait application','Safe for kitchen counters and food areas','Targeted crevice and drain treatments'], desc:'Targeted gel bait and spray treatments to eliminate cockroach infestations effectively.' },
  { id:5, title:'Mosquito Control', cat:'residential', img:'/images/mosquitocontrol.png', longDesc:'Mosquitoes pose severe health risks. We target adult mosquito populations with thermal fogging and eliminate breeding sites using biological larvicides in standing water, keeping your outdoor and indoor spaces safe.', benefits:['Thermal fogging and misting options','Safe biological larvicides (Bti)','Long-term community prevention setups'], desc:'Fogging and larvicide treatments to control mosquito populations and prevent dengue & malaria.' },
  { id:6, title:'Rodent Control', cat:'residential', img:'/images/rodentcontrol.png', longDesc:'Mice and rats spread disease and gnaw electrical wires. Our rodent control uses tamper-resistant bait stations, physical traps, and structural exclusion techniques to seal all potential entry points and completely eliminate the threat.', benefits:['Tamper-resistant bait stations for pet safety','Entrypoint exclusion and sealing services','Regular monitoring and trap clearance'], desc:'Bait stations, traps, and exclusion services to eliminate rodents and prevent re-entry.' },
  { id:7, title:'Bed Bug Treatment', cat:'residential', img:'/images/bedbugtreatment.png', longDesc:'Bed bugs ruin sleep and cause skin irritation. We utilize high-temperature steam extraction and specialized insecticide sprays to kill bed bugs at all stages of development, including eggs, ensuring a peaceful sleep.', benefits:['Heat/Steam extraction treatment','Zero egg survival target','Mattress and furniture sanitation'], desc:'Steam heat and insecticide treatments to completely eradicate bed bug infestations.' },
  { id:8, title:'Ant Control', cat:'residential', img:'/images/antcontrol.png', longDesc:'Ant trails can compromise food hygiene. We deploy advanced food-grade baits that ants carry back to the nest, eliminating the queen and destroying the entire colony structure systematically.', benefits:['Queen elimination colony transfer technology','Targeted outdoor barriers','Safe for pets and children'], desc:'Colony elimination using advanced ant baits and barrier treatments.' },
  { id:9, title:'Spider Control', cat:'residential', img:'/images/spidercontrol.png', longDesc:'Webs and spiders can make spaces feel neglected. We perform thorough web removal and apply long-lasting spray barriers along window sills, ceilings, and basements to keep venomous and common spiders out.', benefits:['Complete web brushing and removal','Perimeter residual spray barriers','Safe, non-staining chemical formula'], desc:'Safe and effective spider management to protect your home from all common and venomous species.' },
  { id:10, title:'Bee & Wasp Control', cat:'residential', img:'/images/beeorwaspcontrol.png', longDesc:'Stinging insects present an immediate physical risk. Our experts safely remove active beehives and wasp nests using protective gear, relocating bees where possible, and sealing nesting sites to prevent return.', benefits:['Safe structural hive extraction','Wasp nest neutralization','Eco-friendly relocation protocols'], desc:'Safe removal and relocation of bee colonies and wasp nests by certified experts.' },
  { id:11, title:'Fly Control', cat:'commercial', img:'/images/mosquitocontrol.png', longDesc:'Flies carry disease and spoil products in food areas. We install high-performance UV glue board fly killers, perform chemical misting, and identify breeding sources to guarantee hygiene standards.', benefits:['UV light trap installation','Food-safe baiting solutions','Drain and source sanitation advice'], desc:'UV fly killers, baiting, and sanitation programs for fly-free environments.' },
  { id:12, title:'Lizard Control', cat:'residential', img:'/images/lizardcontrol.png', longDesc:'Lizards are unwanted guests inside homes. We apply organic repellent sprays and configure exclusion strips under doors to prevent lizards from entering indoor living rooms and bedrooms.', benefits:['Natural repellent spray formulations','Exclusion door sweep installations','Humane deterrent methods'], desc:'Humane lizard repellent treatments and exclusion methods for homes and offices.' },
  { id:13, title:'Silverfish Control', cat:'residential', img:'/images/silverfishcontrol.png', longDesc:'Silverfish feed on papers, glue, clothing, and starch. We use dry dust formulations and crack treatments in bookshelves, closets, and cupboards to keep your precious items completely safe.', benefits:['Non-staining dry dust chemicals','Safe for library and wardrobe storage','Moisture reduction advice'], desc:'Targeted treatments to eliminate silverfish and protect your books, clothing, and wallpaper.' },
  { id:14, title:'Snake Management', cat:'industrial', img:'/images/snakemanagement.png', longDesc:'Snakes on property pose high risks. Our trained handlers rescue and relocate snakes safely. We also apply natural snake repellent granules around perimeters to prevent them from slithering in.', benefits:['Emergency rescue and relocation','Repellent perimeter granule barrier','Property inspection for entry gaps'], desc:'Professional snake removal and preventive exclusion for industrial and residential properties.' },
  { id:15, title:'Bird Control', cat:'commercial', img:'/images/birdcontrol.png', longDesc:'Pigeons and birds cause aesthetic damage and present health hazards. We install heavy-duty polycarbonate bird spikes and high-durability netting on balconies, shafts, and window ledges to permanently keep birds away.', benefits:['Rust-proof stainless/poly spikes','High-density UV-stabilized nets','Zero harm to birds'], desc:'Humane deterrents including nets, spikes, and repellers to manage nuisance birds.' },
  { id:16, title:'Warehouse Pest Management', cat:'industrial', img:'/images/rodentcontrol.png', longDesc:'Warehouses store items that pests find highly appealing. We implement Integrated Pest Management (IPM) featuring continuous bait monitoring, stack fumigation support, and barrier treatments to keep stocks safe.', benefits:['IPM compliance documentation','Stack protection programs','Continuous monitor logbooks'], desc:'Comprehensive pest programs to protect stored goods and maintain regulatory compliance.' },
  { id:17, title:'Hospital Pest Control', cat:'commercial', img:'/images/pharmaceuticalpestcontrol.png', longDesc:'Healthcare facilities have zero tolerance for pests. Our sterile-safe programs utilize odorless, non-chemical trap solutions and targeted eco-safe gels to protect patient wards, kitchens, and corridors.', benefits:['Odorless, zero-chemical option focus','NABH standards alignment','Discreet, fast-response support'], desc:'Discreet, safe, and highly effective pest control for healthcare environments.' },
  { id:18, title:'Restaurant Pest Control', cat:'commercial', img:'/images/restrauntpestcontrol.png', longDesc:'A single pest sighting can destroy a restaurant\'s success. We provide regular monthly inspections, rapid drain treatments, and fly trap management to align with FSSAI regulations and keep customers happy.', benefits:['Monthly monitoring log report','FSSAI checklist compliance support','Emergency fly and roach support'], desc:'Helping restaurants maintain hygiene standards and pass health inspections effortlessly.' },
  { id:19, title:'School Pest Control', cat:'commercial', img:'/images/antcontrol.png', longDesc:'Schools need child-safe pest management. We use organic and safe gel baits in classrooms, libraries, and hostels during holidays or weekends to ensure children study in a clean, chemical-free environment.', benefits:['Weekend/Holiday service timing','Highly safe organic formulations','Playground insect monitoring'], desc:'Child-safe pest management solutions for schools, colleges, and educational institutions.' },
  { id:20, title:'Office Pest Control', cat:'commercial', img:'/images/hotelcontrol.png', longDesc:'Keep your team motivated in a clean space. We apply odorless cockroach gel baits, rodent stations, and sanitization services around desks, server rooms, and pantry areas with zero workflow disruption.', benefits:['Odorless cockroach gels','Server room safe setups','After-office hours operations'], desc:'Minimal disruption pest control programs that keep your workplace productive and pest-free.' },
  { id:21, title:'Food Industry Pest Management', cat:'industrial', img:'/images/foodindustrypestcontrol.png', longDesc:'Food processing facilities need strict HACCP aligned pest programs. We prevent rodents, stored grain beetles, and flies using chemical-free physical traps and strict exclusion procedures.', benefits:['HACCP compliance documentation','Zero pesticide direct food contact','Regular chemical-free audit checks'], desc:'HACCP-compliant pest control for food processing and packaging facilities.' },
  { id:22, title:'Pharmaceutical Pest Control', cat:'industrial', img:'/images/pharmaceuticalpestcontrol.png', longDesc:'GMP standards demand sterile workspaces. We align with cleanroom protocols, installing high-care monitoring traps and documenting every single capture for audit logs.', benefits:['WHO & GMP compliance logs','Sterile-area safety focus','Full trap mapping layout logs'], desc:'GMP-compliant pest management for pharmaceutical manufacturing and storage facilities.' },
  { id:23, title:'Hotel Pest Management', cat:'commercial', img:'/images/hotelcontrol.png', longDesc:'Guests expect absolute luxury. Our hotel pest service covers guest suites, kitchens, gardens, and trash bins, ensuring bed bugs, termites, and cockroaches never compromise guest reviews.', benefits:['24-hour response service','Discreet, non-branded vehicle service','Bed bug zero-incident warranty'], desc:'Discreet and effective pest control to protect hotel reputation and guest comfort.' },
  { id:24, title:'Shopping Mall Pest Control', cat:'commercial', img:'/images/shoppingmallpestcontrol.png', longDesc:'Shopping malls have complex layouts with multiple food and store outlets. We install mall-wide rodent bait networks, common area sprays, and UV fly systems to keep common zones clean.', benefits:['Mall-wide rodent monitoring networks','Common-area after-hours sprays','Fast outlet service integration'], desc:'Comprehensive pest management for large retail and mall environments.' }
];

const getServiceProcess = (service) => {
  if (service.process) return service.process;
  
  const title = service.title.toLowerCase();
  
  if (title.includes('termite')) {
    return [
      { step: '01', name: 'Termatrac Scanning', desc: 'Scan foundations and woodwork with radar, thermal, and moisture sensors to locate termite paths without any drilling.' },
      { step: '02', name: 'Targeted Injection', desc: 'Inject specialized WHO-approved chemical termiticides into infested wood and foundations to disrupt pathways.' },
      { step: '03', name: 'Colony Elimination', desc: 'Set up transfer-effect baiting stations that termites carry back, neutralizing the queen and the entire nest.' },
      { step: '04', name: 'Annual Audits', desc: 'Conduct regular annual inspection sweeps under our warranty to ensure termites never return.' }
    ];
  }
  
  if (title.includes('cockroach')) {
    return [
      { step: '01', name: 'Harbourage Mapping', desc: 'Inspect kitchen cabinets, appliance motors, sinks, and drains to find active nests and cockroach egg cases.' },
      { step: '02', name: 'Odorless Gel Baiting', desc: 'Apply premium, food-safe gel baits in crevices, corners, and pantry cabinets with zero disruption to your daily routine.' },
      { step: '03', name: 'Residual Flushing Spray', desc: 'Apply targeted, low-toxicity residual sprays to flush cockroaches out of drains, baseboards, and wall voids.' },
      { step: '04', name: 'Population Monitoring', desc: 'Place sticky monitor traps in key activity spots to guarantee zero cockroach resurgence.' }
    ];
  }
  
  if (title.includes('bed bug')) {
    return [
      { step: '01', name: 'Bedding & Frame Sweep', desc: 'Thoroughly inspect mattress seams, headboards, electrical outlets, and baseboards to map bed bug nesting.' },
      { step: '02', name: 'Steam Heat Extraction', desc: 'Use high-temperature steam extractors to kill bed bug adults, nymphs, and eggs instantly on mattresses and fabrics.' },
      { step: '03', name: 'Insecticide Barrier Spray', desc: 'Apply non-staining, safety-certified residual sprays in cracks, joints, and surrounding furniture.' },
      { step: '04', name: 'Follow-Up Sweep', desc: 'Conduct a second check-up after 14 days to target any newly hatched eggs and ensure total eradication.' }
    ];
  }
  
  if (title.includes('ant')) {
    return [
      { step: '01', name: 'Trail & Nest Tracing', desc: 'Follow active ant trails back to their source to locate the main colony nest, entry points, and queen.' },
      { step: '02', name: 'Colony Bait Application', desc: 'Deploy advanced ant bait stations containing food attractants that ants carry back to feed and destroy the nest.' },
      { step: '03', name: 'Perimeter Liquid Barrier', desc: 'Apply liquid insecticide barriers around window frames, doorways, and outdoor perimeters to block incoming trails.' },
      { step: '04', name: 'Sanitation Review', desc: 'Provide detailed guidelines to seal food storage, remove water sources, and eliminate ant attractants.' }
    ];
  }
  
  if (title.includes('spider')) {
    return [
      { step: '01', name: 'Web & Nest Sweeping', desc: 'Locate and brush away active webs, egg sacs, and nests from ceilings, corners, and window frames.' },
      { step: '02', name: 'Perimeter Spraying', desc: 'Apply long-lasting chemical barriers along baseboards, entry points, and structural joints where spiders travel.' },
      { step: '03', name: 'Outdoor Barrier Creation', desc: 'Spray foundation walls, eves, and porch ceilings to keep outdoor spiders from migrating inside.' },
      { step: '04', name: 'Exclusion Sealing', desc: 'Identify and recommend sealing gaps around windows and doors to deny spiders physical access.' }
    ];
  }
  
  if (title.includes('bee') || title.includes('wasp')) {
    return [
      { step: '01', name: 'Hive Location & Risk Audit', desc: 'Identify hive size, species, and evaluate safety risks to residents and pets before starting extraction.' },
      { step: '02', name: 'Protective Extraction', desc: 'Wear specialized professional protective suits and gear to safely secure or neutralize the hive after hours.' },
      { step: '03', name: 'Relocation / Removal', desc: 'Relocate honeybees where possible to certified apiaries, or safely remove and dispose of wasp nests.' },
      { step: '04', name: 'Nesting Zone Treatment', desc: 'Apply repellent treatments to the nesting spot to prevent new swarms from rebuilding in the same place.' }
    ];
  }
  
  if (title.includes('lizard')) {
    return [
      { step: '01', name: 'Entry Point Audit', desc: 'Locate entry channels, door gaps, and window openings where lizards slip inside the building.' },
      { step: '02', name: 'Organic Repellent Spray', desc: 'Apply organic lizard repellent formulation around light fixtures and walls to deter lizard resting.' },
      { step: '03', name: 'Exclusion Strip Install', desc: 'Install door sweeps, weatherstripping, and insect screens to block physical entry channels.' },
      { step: '04', name: 'Insect Source Control', desc: 'Coordinate general pest control to eliminate flies, mosquitoes, and spiders, which are lizards\' primary food source.' }
    ];
  }
  
  if (title.includes('silverfish')) {
    return [
      { step: '01', name: 'Humidity & Paper Sweeps', desc: 'Identify damp spots, bookshelves, closets, and wallpaper showing silverfish feeding marks.' },
      { step: '02', name: 'Dry Dust Formulation', desc: 'Apply non-staining, chemical dry dusts inside wall voids, bookshelves, and electrical conduits.' },
      { step: '03', name: 'Baseboard Barrier Spray', desc: 'Spray safety-certified residual insecticides along baseboards, storage perimeters, and cupboards.' },
      { step: '04', name: 'Dehumidification Advice', desc: 'Provide ventilation and humidity reduction advice to make the environment uninhabitable for silverfish.' }
    ];
  }
  
  if (title.includes('snake')) {
    return [
      { step: '01', name: 'Habitat & Entry Sweep', desc: 'Search under logs, trash piles, and inspect crawlspaces or foundation cracks for shelter spots.' },
      { step: '02', name: 'Humane Relocation', desc: 'Safely capture and rescue active snakes using professional snake hooks, bags, and trained handlers.' },
      { step: '03', name: 'Repellent Granules', desc: 'Spread natural, snake-deterrent sulfur-free granules along property boundaries and gardens.' },
      { step: '04', name: 'Habitat Modification', desc: 'Advise on clearing tall grass, debris, and control rodent populations to remove primary food sources.' }
    ];
  }
  
  if (title.includes('bird')) {
    return [
      { step: '01', name: 'Roosting & Nesting Audit', desc: 'Identify popular roosting balconies, ledges, and shafts causing droppings accumulation and hygiene hazards.' },
      { step: '02', name: 'Balcony Netting Install', desc: 'Install high-durability, UV-stabilized HDPE netting over open balconies, shafts, and window alcoves.' },
      { step: '03', name: 'Stainless Steel Spikes', desc: 'Mount rust-proof polycarbonate or stainless steel spikes on narrow ledges to prevent birds from landing.' },
      { step: '04', name: 'Sanitization Sweep', desc: 'Clean and disinfect contaminated areas to remove hazardous droppings, odor, and nesting debris.' }
    ];
  }
  
  if (title.includes('mosquito') || title.includes('fly') || title.includes('flies') || title.includes('fogging')) {
    return [
      { step: '01', name: 'Breeding Site Audit', desc: 'Locate stagnant water sources, drains, and garden areas, applying biological larvicides (Bti).' },
      { step: '02', name: 'Thermal Fogging', desc: 'Perform thermal fogging outdoors and safe residual misting indoors to knock down adult populations.' },
      { step: '03', name: 'UV Trap Installation', desc: 'Set up high-performance UV glue-board fly and mosquito killers in commercial or residential corridors.' },
      { step: '04', name: 'Source Prevention', desc: 'Implement sanitation strategies and physical mesh recommendations to minimize future infestations.' }
    ];
  }
  
  if (title.includes('rodent')) {
    return [
      { step: '01', name: 'Exclusion Survey', desc: 'Identify entry holes, structural gaps, grease trails, and nesting areas around the property perimeter.' },
      { step: '02', name: 'Tamper-Resistant Baiting', desc: 'Deploy pet-safe, lockable bait stations and humane traps at strategic points of activity.' },
      { step: '03', name: 'Physical Barrier Sealing', desc: 'Seal gaps with steel mesh, concrete, and install structural bird spikes or UV-stabilized netting.' },
      { step: '04', name: 'Clearance & Monitoring', desc: 'Perform regular scheduled checks to empty traps, replenish baits, and confirm zero pest activity.' }
    ];
  }
  
  if (service.cat === 'commercial' || service.cat === 'industrial' || title.includes('commercial') || title.includes('industrial') || title.includes('hospital') || title.includes('restaurant') || title.includes('school') || title.includes('office') || title.includes('food') || title.includes('pharmaceutical') || title.includes('hotel') || title.includes('shopping') || title.includes('warehouse')) {
    return [
      { step: '01', name: 'Facility Audit & IPM Plan', desc: 'Conduct a thorough inspection of garbage rooms, kitchens, docks, and outline an Integrated Pest Management (IPM) plan.' },
      { step: '02', name: 'Non-Toxic Device Setup', desc: 'Deploy odorless gel baits, pheromone traps, and UV glueboard fly traps to avoid chemical contamination.' },
      { step: '03', name: 'Targeted Perimeter Sprays', desc: 'Apply low-toxicity, odorless barrier sprays along building perimeters and trash zones after-hours.' },
      { step: '04', name: 'AMC Audit & Logbooks', desc: 'Maintain a strict logbook of pest activity, CIB chemical certificates, and pass regulatory/FSSAI audits.' }
    ];
  }
  
  return [
    { step: '01', name: 'Inspection & Mapping', desc: 'Inspect crevices, kitchen cabinets, conduits, and drains to map harbourage zones and identify species.' },
    { step: '02', name: 'Odorless Gel Baiting', desc: 'Apply premium, odorless, food-safe gel baits in kitchen corners, drawers, and appliance motors.' },
    { step: '03', name: 'Residual Spray Barrier', desc: 'Apply safety-certified protective residual spray along skirting boards, door frames, and drains.' },
    { step: '04', name: 'Monitoring & Resurgence Control', desc: 'Review bait consumption, lay sticky traps to track population trends, and maintain a chemical-barrier shield.' }
  ];
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === parseInt(id, 10));

  if (!service) {
    return (
      <div className="section text-center" style={{ padding: '160px 0' }}>
        <h2>Service Not Found</h2>
        <p>The service you are looking for does not exist.</p>
        <Link to="/services" className="btn btnOutline">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className={styles.serviceDetailPage}>
      {/* Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <Link to="/services" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <h1>{service.title}</h1>
          <p className={styles.subtitle}>{service.desc}</p>
        </div>
      </section>

      {/* Main Details */}
      <section className="section">
        <div className="container">
          <div className={styles.detailGrid}>
            <div className={styles.imageCol}>
              <img src={service.img} alt={service.title} className={styles.mainImg} />
            </div>
            
            <div className={styles.contentCol}>
              <h2>About the Service</h2>
              <p className={styles.longDesc}>{service.longDesc || 'We use advanced treatments to manage insect, rodent, and pest issues safely and effectively. Our team coordinates with you to schedule and inspect at the best times, using eco-friendly materials.'}</p>
              
              <div className={styles.benefitsBox}>
                <h3>Key Benefits & Features</h3>
                <ul className={styles.benefitsList}>
                  {(service.benefits || ['WHO-certified chemicals', 'Eco-friendly safe treatments', 'Qualified experts']).map((b, i) => (
                    <li key={i}>
                      <CheckCircle size={18} className={styles.checkIcon} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Booking CTAs */}
              <div className={styles.ctaBox}>
                <h3>Need Immediate Assistance?</h3>
                <p>Speak directly with our expert team to get a quote or book an inspection instantly.</p>
                <div className={styles.btnRow}>
                  <a href="tel:9810629361" className={styles.callBtn}>
                    <PhoneCall size={18} />
                    <span>Call: 9810629361</span>
                  </a>
                  <a href="https://wa.me/919990365024" className={styles.whatsappBtn}>
                    <MessageCircle size={18} />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className={`section section-bg-light ${styles.processSection}`}>
        <div className="container">
          <div className={styles.processHeader}>
            <h2>Our Treatment Process</h2>
            <p>A systematic and scientific approach to eliminating pests and protecting your space.</p>
          </div>
          <div className={styles.processTimeline}>
            {getServiceProcess(service).map((p, idx) => (
              <div key={idx} className={styles.processStep}>
                <div className={styles.stepNum}>{p.step}</div>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default ServiceDetail;
