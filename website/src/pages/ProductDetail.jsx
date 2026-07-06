import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, PhoneCall, MessageCircle, Check, Info } from 'lucide-react';
import styles from './ProductDetail.module.css';

const productsData = [
  { id:1, title:'Thermal Fogging Machine', cat:'equipment', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800', longDesc:'Our professional Thermal Fogging Machine delivers high-volume fogging for vector control, disinfection, and agricultural pest management. Engineered with premium stainless steel components, it guarantees long-term durability and consistent droplet sizing for massive outdoor coverage.', features:['High thermal output power','Large capacity chemical and fuel tanks','Suitable for large outdoors and rugged terrains','Pulse-jet motor engine for high efficiency'] },
  { id:2, title:'ULV Fogger', cat:'equipment', img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', longDesc:'The Ultra-Low Volume (ULV) Cold Fogger utilizes electric power to disperse liquids into fine micro-droplets. Perfect for indoor sanitization, disinfection, and localized pest management, it leaves zero wet residues.', features:['Electric motor with low noise','Adjustable flow rate and droplet size (5-50 microns)','Ideal for commercial offices, hotels, and schools'] },
  { id:3, title:'Mist Blower', cat:'equipment', img:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800', longDesc:'Backpack Mist Blower designed for high-reach misting in parks, orchards, and mosquito abatement campaigns. Combines raw power with ergonomic harness design for operator comfort.', features:['High air velocity output','Backpack harness with padded straps','Powerful 2-stroke gasoline engine'] },
  { id:4, title:'Power Sprayer', cat:'equipment', img:'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=800', longDesc:'Heavy-duty Power Sprayer featuring a robust piston pump and motorized engine. Ideal for large boundary barrier treatments, structural termite soil injections, and tall tree spraying.', features:['Heavy-duty piston pump configuration','Sturdy trolley mount with durable wheels','100-meter high-pressure hose reel'] },
  { id:5, title:'Compression Sprayer', cat:'equipment', img:'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=800', longDesc:'Stainless steel Compression Sprayer engineered for precision pest control operations. Safe, durable, and highly pressurized manual system for cracks, crevices, and baseboard sprays.', features:['Stainless steel heavy-gauge tank','Pressure gauge and safety release valve','Long brass wand with adjustable nozzle'] },
  { id:6, title:'Hand Sprayer', cat:'equipment', img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800', longDesc:'Lightweight, portable Hand Sprayer with an ergonomic trigger lock. Designed for quick spot treatments, home gardening, and targeted indoor applications.', features:['Ergonomic grip trigger','Adjustable spray pattern brass tip','O-ring viton seals for chemical durability'] },
  { id:7, title:'Rodent Bait Stations', cat:'equipment', img:'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=800', longDesc:'Tamper-resistant bait stations designed to protect non-target animals like cats and dogs. Weatherproof housing ensures baits remain fresh and active in all seasons.', features:['Tamper-resistant security lock','Pebble-textured base for natural rodent entry','Secure anchor peg points'] },
  { id:8, title:'Glue Boards', cat:'equipment', img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800', longDesc:'High-tack sticky boards for mapping and capturing crawling insects and mice. Perfect for sensitive spaces where chemical treatments are restricted.', features:['Odorless high-performance glue formulation','Non-poisonous crawling monitoring','Pre-scored borders for easy placement'] },
  { id:9, title:'Glue Traps', cat:'equipment', img:'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&q=80&w=800', longDesc:'Heavy-duty cardboard glue traps with foldable structures. Prevents dust accumulation on glue surfaces, maintaining catch effectiveness for longer periods.', features:['Folding tunnel design for dust protection','Pre-scented bait attractant mixed in glue','Safe for residential kitchens and stores'] },
  { id:10, title:'UV Fly Killers', cat:'equipment', img:'https://images.unsplash.com/photo-1565108926766-c07c9fdeaafe?auto=format&fit=crop&q=80&w=800', longDesc:'Elegant wall-mounted UV fly catchers for restaurant dining zones and food display counters. Captures flies on sticky boards silently, preventing insect fragment dispersion.', features:['Aesthetic design blends into wall decor','High-frequency UV tubes for attraction','Glue board capturing - zero zapping noise'] },
  { id:11, title:'Insect Monitoring Traps', cat:'equipment', img:'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=800', longDesc:'Pheromone-infused monitor traps for early detection of warehouses, grain stores, and library pests. Helps map out insect hotspots for Integrated Pest Management (IPM).', features:['Targeted pheromone lure tabs','Grid lines for precise counts','Eco-friendly recyclable cardboard'] },
  { id:12, title:'Termite Chemicals', cat:'chemicals', img:'https://images.unsplash.com/photo-1596791618530-cb1bde6b4ee3?auto=format&fit=crop&q=80&w=800', longDesc:'Advanced soil termiticides with non-repellent transfer technology. Termites pass through treated soil undetected, transferring the chemical back to the queen and destroying the entire colony.', features:['Non-repellent transfer effect','WHO approved formulation','3-5 year residual soil barrier guarantee'] },
  { id:13, title:'General Insecticides', cat:'chemicals', img:'https://images.unsplash.com/photo-1597763620770-5ae2db2b5f6e?auto=format&fit=crop&q=80&w=800', longDesc:'Broad-spectrum synthetic pyrethroid insecticides designed for cockroach, ant, and spider control. Delivers quick knockdown and long-lasting protection.', features:['Broad-spectrum insect efficacy','Low odor water-dispersible granules','Quick knockdown power'] },
  { id:14, title:'Gel Baits', cat:'chemicals', img:'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&q=80&w=800', longDesc:'Precision cockroach and ant gel baits packaged in easy-to-use syringes. Highly palatable bait matrices ensure complete acceptance even in environments with competing food sources.', features:['Highly attractive food-grade matrix','Syringe dispenser for crack application','Targeted spot application safety'] },
  { id:15, title:'Mosquito Larvicides', cat:'chemicals', img:'https://images.unsplash.com/photo-1503455637927-730bce8583c0?auto=format&fit=crop&q=80&w=800', longDesc:'Biological larvicide (Bti) granules designed for standing pools, stormwater drains, and decorative ponds. Kills mosquito larvae without harming fish or other non-target aquatic life.', features:['Biological Bti formulation','Water safety certified','Prevents larval development at early stages'] },
  { id:16, title:'PPE Kits', cat:'safety', img:'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800', longDesc:'Comprehensive Personal Protective Equipment (PPE) kits compiled for professional pest control operators. Ensures complete protection from mist, dust, and chemical splashes.', features:['SMS material coverall (disposable)','Splash-proof goggles and nitrile gloves','N95/P100 filter mask compatibility'] },
  { id:17, title:'Safety Gloves', cat:'safety', img:'https://images.unsplash.com/photo-1616628188467-8fb59509f685?auto=format&fit=crop&q=80&w=800', longDesc:'Premium chemical-resistant nitrile gloves. Offers unmatched puncture and tear resistance while maintaining tactile sensitivity for precision pump triggers.', features:['Thick industrial nitrile protection','Tear and chemical solvent proof','Raised diamond pattern grip texturing'] },
  { id:18, title:'Respirators', cat:'safety', img:'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800', longDesc:'Dual-cartridge half face mask respirators. Protects technicians from breathing organic vapors and pesticide dusts during spraying and thermal fogging operations.', features:['Dual-filter cartridge configuration','Soft hypoallergenic silicone seal','Adjustable four-point harness straps'] },
  { id:19, title:'Face Shields', cat:'safety', img:'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=800', longDesc:'High-durability polycarbonate face shields. Protects operators from accidental chemical splashes, high-pressure hose bursts, and flying debris.', features:['Optically clear polycarbonate window','Anti-fog coating on inner side','Ratchet suspension adjustment headband'] },
  { id:20, title:'Protective Coveralls', cat:'safety', img:'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800', longDesc:'Reusable/disposable chemical-resistant coveralls with elastic wrists, ankles, and hood. Keeps clothes and skin dry and safe from spray drifts.', features:['Antistatic, breathable SMS material','Reinforced seams and zip flap cover','Elastic cuffs and hood seal'] },
  { id:21, title:'Safety Goggles', cat:'safety', img:'https://images.unsplash.com/photo-1590756254933-2873d72a83b6?auto=format&fit=crop&q=80&w=800', longDesc:'Indirect ventilation splash goggles. Prevents liquid droplets from entering the eyes while keeping the lenses fog-free in hot, humid work sites.', features:['Indirect vents keep droplets out','Wide elastic adjustable headband','Fits comfortably over prescription eyewear'] }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="section text-center" style={{ padding: '160px 0' }}>
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
        <Link to="/products" className="btn btnOutline">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className={styles.productDetailPage}>
      {/* Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <Link to="/products" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Products
          </Link>
          <h1>{product.title}</h1>
          <span className={styles.categoryBadge}>{product.cat.toUpperCase()}</span>
        </div>
      </section>

      {/* Main details */}
      <section className="section">
        <div className="container">
          <div className={styles.detailGrid}>
            <div className={styles.imageCol}>
              <img src={product.img} alt={product.title} className={styles.mainImg} />
            </div>

            <div className={styles.contentCol}>
              <h2>Product Specifications</h2>
              <p className={styles.longDesc}>{product.longDesc}</p>

              <div className={styles.specsBox}>
                <h3>Product Features</h3>
                <ul className={styles.featuresList}>
                  {product.features.map((feat, i) => (
                    <li key={i}>
                      <Check size={18} className={styles.checkIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className={styles.ctaBox}>
                <h3>Request Pricing & Enquiry</h3>
                <p>Contact our distribution team for product pricing, bulk discounts, and shipping details.</p>
                <div className={styles.btnRow}>
                  <a href="tel:9810629361" className={styles.callBtn}>
                    <PhoneCall size={18} />
                    <span>Call: 9810629361</span>
                  </a>
                  <a href="https://wa.me/919990365024" className={styles.whatsappBtn}>
                    <MessageCircle size={18} />
                    <span>WhatsApp Order Details</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
