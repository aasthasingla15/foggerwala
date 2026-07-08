import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, PhoneCall, MessageCircle, Check, Info } from 'lucide-react';
import styles from './ProductDetail.module.css';

const productsData = [
  { id: 1, title: 'Piramid Termiticide', cat: 'chemicals', img: '/images/piramidTermiticide.png', longDesc: 'Piramid Termiticide is a highly effective, professional-grade solution designed to eliminate termite colonies and protect buildings. Using non-repellent transfer technology, termites pass through the treated zone undetected, sharing the active ingredient with the entire colony for complete eradication.', features: ['Excellent soil binding properties', 'Non-repellent transfer technology', 'Long-term structural protection', 'Odorless formulation'] },
  { id: 2, title: 'Cutter Insect Repellent', cat: 'chemicals', img: '/images/cutter.png', longDesc: 'Cutter provides heavy-duty personal protection against mosquitoes, ticks, and other biting insects. Essential for pest control operators working in heavily infested outdoor areas, it ensures safety and comfort during long treatments.', features: ['Long-lasting mosquito protection', 'Sweat-resistant formula', 'Easy application spray bottle', 'Protects against ticks, flies & gnats'] },
  { id: 3, title: 'Piramid Wood Cure', cat: 'chemicals', img: '/images/PIRAMID Wood Cure.png', longDesc: 'Piramid Wood Cure is a powerful wood preservative formulated to protect furniture, structural timbers, and wooden fixtures. It forms a durable protective envelope that kills wood-boring insects and prevents fungal attack.', features: ['Deep timber penetration', 'Prevents woodborers and termites', 'Protects against dry & wet rot', 'Safe for interior and exterior wood'] },
  { id: 4, title: 'Salmon Insecticide', cat: 'chemicals', img: '/images/SALMON Insecticide.png', longDesc: 'Salmon Insecticide is a reliable liquid concentrate for controlling various crawling and flying pests. It is highly effective against flies, mosquitoes, and cockroaches in commercial and residential facilities.', features: ['Broad-spectrum insect control', 'Fast action knockdown', 'Low residual odor', 'Excellent emulsifiable concentrate'] },
  { id: 5, title: 'Shooter Insecticide', cat: 'chemicals', img: '/images/SHOOTER Insecticide.png', longDesc: 'Shooter Insecticide is designed for fast-action pest control, quickly clearing target zones of mosquitoes, houseflies, ants, and spiders. It is ideal for pre-treatment sweeps in indoor environments.', features: ['Instant contact kill', 'Effective against cockroaches & flies', 'Targeted aerosol/spray application', 'Ideal for spot treatments'] },
  { id: 6, title: 'Mackill Insecticide', cat: 'chemicals', img: '/images/MACKILL Insecticide.png', longDesc: 'Mackill Insecticide is a professional-grade pyrethroid spray that forces hidden insects out of their harbourage zones before neutralizing them. It provides months of ongoing protection on treated surfaces.', features: ['Flushes pests out of cracks', 'Long residual protective layer', 'High-purity active ingredient', 'Non-staining formulation'] },
  { id: 7, title: 'Shark Super Insecticide', cat: 'chemicals', img: '/images/SHARKsuper Insecticide.png', longDesc: 'Shark Super Insecticide combines two powerful active ingredients to target resistant strains of bed bugs, German cockroaches, and ants. It disrupts their nervous system, ensuring high mortality rates in difficult infestations.', features: ['Combats chemical resistance', 'Dual active ingredient blend', 'Rapid flush and kill', 'Great for commercial kitchens'] },
  { id: 8, title: 'Scalp Insecticide', cat: 'chemicals', img: '/images/SCALP Insecticide.png', longDesc: 'Scalp Insecticide is a highly stable concentrated spray meant for building perimeter treatments. Its rainfast formula binds tightly to concrete and soil, preventing outdoor pests from invading indoor living spaces.', features: ['Creates outdoor protective barriers', 'Rain and UV resistant formula', 'Prevents ants, spiders & millipedes', 'Low application rate'] },
  { id: 9, title: 'Indica Insecticide', cat: 'chemicals', img: '/images/INDICA Insecticide.png', longDesc: 'Indica Insecticide is a botanical pest control product made for sensitive environments like schools, hospitals, and organic farming. It controls pests without leaving harmful synthetic residues.', features: ['Botanical/organic origin', 'Extremely safe for pets & children', 'Pleasant natural aroma', 'Ideal for organic food areas'] },
  { id: 10, title: 'Topper Insecticide', cat: 'chemicals', img: '/images/TOPPER Insecticide.png', longDesc: 'Topper Insecticide is an odorless, non-staining suspension concentrate optimized for indoor residual spraying. It adheres to painted walls, wood, and concrete to kill resting mosquitoes, helping control vector-borne diseases.', features: ['Odorless suspension concentrate', 'Up to 3 months residual control', 'Safe for indoor wall applications', 'Effective against mosquitoes & flies'] },
  { id: 11, title: 'Cyclone Insecticide', cat: 'chemicals', img: '/images/CYCLONE Insecticide.png', longDesc: 'Cyclone Insecticide is formulated for large-scale outdoor mosquito control. It works seamlessly with thermal fogging machines, generating dense insecticide smoke that penetrates thick vegetation to kill adult mosquitoes.', features: ['Optimized for thermal fogging', 'High-density mist dispersion', 'Rapidly reduces mosquito swarms', 'Excellent oil-soluble formula'] },
  { id: 12, title: 'Shark Insecticide', cat: 'chemicals', img: '/images/SHARK Insecticide.png', longDesc: 'Shark Insecticide is the go-to liquid concentrate for general pest management contracts. It offers a balanced formulation of fast action and surface persistence, making it highly economical for routine treatments.', features: ['Cost-effective general control', 'Residual action on surfaces', 'Targets ants, roaches & silverfish', 'Easy mixing liquid concentrate'] },
  { id: 13, title: 'Moksh Rat Cake', cat: 'chemicals', img: '/images/MOKSH Rat Cake.png', longDesc: 'Moksh Rat Cake is a powerful anticoagulant rodenticide bait block. Made with high-quality food-grade ingredients, it attracts rats and mice even in competitive environments, killing them in a single feeding.', features: ['Single-feed bait effectiveness', 'Weatherproof wax block design', 'High palatability for rodents', 'Contains bittering agent for safety'] },
  { id: 14, title: 'Moksh Mouse & Rat Glue Board', cat: 'equipment', img: '/images/MOKSH Mouse & Rat Glue.png', longDesc: 'Moksh Mouse & Rat Glue Board provides a highly secure capture mechanism for rodents without the use of chemical poisons. It is perfect for food handling establishments where chemical baiting is strictly prohibited.', features: ['Extra-strength sticky glue', 'Non-toxic and pesticide-free', 'Easy disposal design', 'Safe for kitchens & food stores'] },
  { id: 15, title: 'Masterchloro Insecticide', cat: 'chemicals', img: '/images/masterchloro insecticide.png', longDesc: 'Masterchloro Insecticide is a heavy-duty chlorpyrifos chemical designed to create an impenetrable underground barrier against termites. It binds strongly to the soil, providing long-term structural defense.', features: ['Chlorpyrifos active power', 'Excellent soil barrier properties', 'Heavy-duty termite protection', 'Highly persistent residual effect'] },
  { id: 16, title: 'Masterfog ULV Fogger', cat: 'equipment', img: '/images/masterfogulv.png', longDesc: 'Masterfog ULV is a premium electric cold fogging machine designed to disperse water or oil-based insecticides and sanitizers into micrometric droplets. It ensures complete spatial coverage in offices, schools, and clinics.', features: ['Ultra-fine droplet generation', 'Adjustable flow control nozzle', 'Lightweight portable design', 'Electric high-rpm blower'] },
  { id: 17, title: 'Deltamaster Insecticide', cat: 'chemicals', img: '/images/deltamaster insecticide.png', longDesc: 'Deltamaster Insecticide is a premium deltamethrin flowable concentrate that delivers exceptional residual control on porous and non-porous surfaces. It is completely odorless, making it excellent for residential spray services.', features: ['Deltamethrin active formula', 'Odorless and non-staining', 'Safe for indoor residential use', 'Effective against bed bugs & ants'] },
  { id: 18, title: 'Termimaster Insecticide', cat: 'chemicals', img: '/images/termimaster insecticide.png', longDesc: 'Termimaster Insecticide is a high-performance chemical barrier termiticide designed to protect foundations and wooden structural members. Termites fail to detect it, ensuring they carry the chemical back to the nest for colony control.', features: ['Formulated for soil injection', 'Non-repellent transfer effect', 'Binds to foundation soil', 'Long-lasting structural warranty'] },
  { id: 19, title: 'Masterpro Household Insecticide', cat: 'chemicals', img: '/images/masterprohouseholdinsecticide.png', longDesc: 'Masterpro Household Insecticide is an easy-to-use spray developed for domestic pest control. It gives immediate relief from ants, cockroaches, silverfish, and spiders without the need for professional dilution equipment.', features: ['Ready-to-use spray bottle', 'Safe for residential kitchens', 'Fast contact knockdown action', 'Mild fresh fragrance'] },
  { id: 20, title: 'Masteralpha 10 Insecticide', cat: 'chemicals', img: '/images/masteraplha10insecticide.png', longDesc: 'Masteralpha 10 is a concentrated wettable powder insecticide containing alphacypermethrin. It is engineered for heavy residual control in warehouses, animal sheds, and outdoor storage areas.', features: ['Alphacypermethrin active strength', 'Wettable powder formulation', 'Heavy-duty agricultural use', 'Long persistence on wood & brick'] },
  { id: 21, title: 'Masterthin Insecticide', cat: 'chemicals', img: '/images/masterthin insecticide.png', longDesc: 'Masterthin Insecticide acts as a performance synergist for thermal fogging operations. It dilutes perfectly in carrier oils, creating a fine smoke that delivers rapid knockdown of flies, mosquitoes, and midges.', features: ['Enhances fogging performance', 'Oil-miscible formulation', 'Synergized pyrethrins', 'Fast flying insect knockdown'] },
  { id: 22, title: 'Grainmaster Insecticide', cat: 'chemicals', img: '/images/grainmasterinsecticide.png', longDesc: 'Grainmaster Insecticide is a specialized protectant designed for bulk stored grains. It prevents infestations of grain weevils and flour beetles, safeguarding stored agricultural assets from damage.', features: ['Approved for stored grain use', 'Prevents weevils and flour beetles', 'Low residue food-safety profile', 'Long protection in storage'] },
  { id: 23, title: 'Masterphos Fumigant', cat: 'chemicals', img: '/images/masterphos.png', longDesc: 'Masterphos is a highly effective aluminum phosphide fumigant. It releases phosphine gas upon contact with atmospheric moisture, penetrating packed commodities to eliminate all life stages of stored product insects.', features: ['Aluminum phosphide tablets', 'Deep gas penetration fumigant', 'Controls all life stages of pests', 'Restricted professional use only'] },
  { id: 24, title: 'Bayer Agenda 25 EC', cat: 'chemicals', img: '/images/agenda.png', longDesc: 'Bayer Agenda is a market-leading liquid termiticide. It creates a chemical zone that termites enter without warning, picking up the active ingredient on their bodies and spreading it to nestmates through grooming, ensuring total nest control.', features: ['Bayer Fipronil active formula', 'Lethal non-repellent transfer', 'Minimal environmental footprint', 'Protects structures for 5+ years'] },
  { id: 25, title: 'Bayer Aqua K-Othrine', cat: 'chemicals', img: '/images/aquakothrine.png', longDesc: 'Aqua K-Othrine is a water-miscible space spray concentrate that uses patented FFAST technology to retard water droplet evaporation. It delivers highly effective outdoor mosquito control without using oil carriers.', features: ['Bayer water-based space spray', 'FFAST anti-evaporation tech', 'Odorless and non-flammable', 'Eco-friendly vector control'] },
  { id: 26, title: 'Baraki Rodenticide Block', cat: 'chemicals', img: '/images/baraki.png', longDesc: 'Baraki Rodenticide Blocks are formulated with high-quality grains and binders to resist damp conditions. It is perfect for outdoor sewer treatment, farm boundaries, and warehouse baiting stations.', features: ['Anticoagulant bait block', 'Resistant to moisture & mold', 'Pre-drilled for bait station anchoring', 'High rodent acceptance rate'] },
  { id: 27, title: 'Barcelo Insecticide', cat: 'chemicals', img: '/images/barcelo.png', longDesc: 'Barcelo Insecticide offers a balanced, low-odor formula that targets common domestic pests. Its micro-fine particles adhere to surfaces, creating an active barrier that lasts for weeks.', features: ['Suspension concentrate formula', 'Odorless indoor application', 'Safe for residential structures', 'Effective against ants & bugs'] },
  { id: 28, title: 'Bi-Larv Larvicide', cat: 'chemicals', img: '/images/bi-larv.png', longDesc: 'Bi-Larv is a specialized larvicide designed to disrupt the larval lifecycle. It prevents mosquito larvae from pupating into adult mosquitoes, effectively breaking the breeding cycle in standing water.', features: ['Insect growth regulator (IGR)', 'Interrupts larval molting cycle', 'Highly target specific', 'Safe for aquatic environments'] },
  { id: 29, title: 'Bayer K-Obiol', cat: 'chemicals', img: '/images/k-obiol.png', longDesc: 'K-Obiol is a deltamethrin-based grain protectant synergized with piperonyl butoxide. It provides long-term preservation for grains in bulk storage against major stored product pests with zero consumption delay.', features: ['Bayer liquid grain protectant', 'Up to 12 months protection', 'No withholding period for consumption', 'Controls weevils & borers'] },
  { id: 30, title: 'Bayer K-Othrine WG 250', cat: 'chemicals', img: '/images/kothrinewg.png', longDesc: 'K-Othrine WG 250 is a top-tier deltamethrin-based dry granule that disperses in water. It is ideal for indoor residual spraying (IRS) to control mosquitoes, flies, bed bugs, and cockroaches.', features: ['Water-dispersible granules', 'Odorless and non-staining', 'Up to 3 months residual barrier', 'Effective on all wall surfaces'] },
  { id: 31, title: 'Bayer K-Othrine Flow', cat: 'chemicals', img: '/images/k-othrine flow.png', longDesc: 'K-Othrine Flow is a user-friendly suspension concentrate that provides the advantages of deltamethrin in a liquid flowable form. It provides excellent surface coverage and long residual action against houseflies and cockroaches.', features: ['Flowable suspension concentrate', 'Excellent surface persistence', 'No visible spray residues', 'Targets all major crawling pests'] },
  { id: 32, title: 'Kingfog Fogging Chemical', cat: 'chemicals', img: '/images/kingfog.png', longDesc: 'Kingfog is a professional space spray formulation designed for outdoor thermal fogging. It is widely used by local authorities and societies for large-scale mosquito control campaigns.', features: ['Deltamethrin active fogging', 'High thermal stability', 'Dense mist generation', 'Effective for outdoor control'] },
  { id: 33, title: 'Bayer Maxforce Forte Gel', cat: 'chemicals', img: '/images/maxforceforte.png', longDesc: 'Maxforce Forte is the gold standard for cockroach control. Cockroaches consume the bait and return to their harbourage, where their carcasses and droppings poison other cockroaches, destroying the colony from within.', features: ['Bayer cockroach gel bait', 'Domino effect colony kill', 'Odorless and clean application', 'Palatable to bait-averse roaches'] },
  { id: 34, title: 'Bayer Maxforce Fusion Gel', cat: 'chemicals', img: '/images/maxforcefusion.png', longDesc: 'Maxforce Fusion is Bayer\'s next-generation gel bait. It features a unique bait matrix that retains moisture longer, making it highly attractive to cockroaches even in hot commercial kitchens.', features: ['Enhanced feeding stimulants', 'Extremely fast bait uptake', 'Works on large infestations', 'Long-lasting moisture retention'] },
  { id: 35, title: 'Bayer Maxforce Quantum Ant Gel', cat: 'chemicals', img: '/images/maxfoercequantam.png', longDesc: 'Maxforce Quantum is an odorless, non-staining ant bait that ants carry back to feed their larvae and queen. Its unique hygroscopic formula keeps the gel moist and attractive for up to 3 months.', features: ['Bayer ant gel formulation', 'Remains attractive for months', 'Non-drying liquid gel matrix', 'Worker-to-queen colony transfer'] },
  { id: 36, title: 'Bayer Premise Termiticide', cat: 'chemicals', img: '/images/premise.png', longDesc: 'Bayer Premise is a professional soil termiticide. It creates a managed treatment zone that termites pass through without warning. As they travel, they pick up the active chemical and transfer it to the colony, achieving total eradication.', features: ['Bayer Imidacloprid active', 'Non-repellent soil barrier', 'Termite colony transfer effect', 'Proven structural protection'] },
  { id: 37, title: 'Bayer Racumin Sure Block', cat: 'chemicals', img: '/images/racuminsure.png', longDesc: 'Racumin Sure blocks are formulated to control rodent populations effectively. Coumatetralyl requires multiple feeds, which prevents rodents from linking the bait to deaths, avoiding bait shyness and ensuring the entire nest is cleared.', features: ['Bayer Coumatetralyl active', 'No bait shyness effect', 'Highly palatable wax block', 'Weather-resistant bait'] },
  { id: 38, title: 'Bayer QuickBayt Fly Bait', cat: 'chemicals', img: '/images/quickbayt.png', longDesc: 'Bayer QuickBayt is a highly effective bait for controlling flies in commercial kitchens, dairy farms, and waste stations. It contains red food coloring and a powerful sex pheromone to lure and eliminate flies instantly.', features: ['Bayer fly bait technology', 'Pheromone fly attractant', 'Kills flies within minutes', 'Paint-on or scatter application'] },
  { id: 39, title: 'Bayer Responser Insecticide', cat: 'chemicals', img: '/images/respansar.png', longDesc: 'Bayer Responser (Respanser) is a premium pyrethroid insecticide designed for rapid action against cockroaches, ants, spiders, and houseflies. Its active ingredient delivers immediate knockdown followed by weeks of surface protection.', features: ['Bayer Beta-cyfluthrin active', 'Ultra-fast knockdown action', 'Excellent residual surface barrier', 'Low application dosage'] },
  { id: 40, title: 'Bayer Solfac EW 050', cat: 'chemicals', img: '/images/solfacew.png', longDesc: 'Solfac EW 050 is an odorless, non-staining oil-in-water emulsion. It provides excellent control of crawling and flying pests in sensitive environments like hospitals, food preparation areas, and residences.', features: ['Bayer cyfluthrin emulsion', 'Water-based odorless formula', 'No staining or visual residues', 'Ideal for schools & hotels'] },
  { id: 41, title: 'Bayer Solfac WP 10', cat: 'chemicals', img: '/images/solfac wp.png', longDesc: 'Solfac WP 10 is a wettable powder formulated for public health and pest control treatments. It binds tightly to porous surfaces like brickwork, wood, and concrete, maintaining residual efficacy for months.', features: ['Bayer wettable powder', 'Excellent residual on porous brick', 'Controls bed bugs & mosquitoes', 'Stable outdoor formulation'] },
  { id: 42, title: 'Bayer Temprid Insecticide', cat: 'chemicals', img: '/images/trempid.png', longDesc: 'Bayer Temprid (Trempid) is a breakthrough product combining two active ingredients with different modes of action. This synergistic blend kills resistant bed bugs, cockroaches, and ants on contact while leaving a long-lasting protective barrier.', features: ['Bayer dual active technology', 'Combats resistant bed bugs', 'Contact and systemic action', 'Odorless residual spray'] }
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
