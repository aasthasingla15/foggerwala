import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import styles from './Products.module.css';

const productsData = [
  { id: 1, title: 'Piramid Termiticide', cat: 'chemicals', img: '/images/piramidTermiticide.png', features: ['Excellent soil binding', 'Non-repellent transfer tech', 'Long-term protection', 'Odorless formulation'] },
  { id: 2, title: 'Cutter Insect Repellent', cat: 'chemicals', img: '/images/cutter.png', features: ['Long mosquito protection', 'Sweat-resistant formula', 'Easy application spray', 'Protects ticks & flies'] },
  { id: 3, title: 'Piramid Wood Cure', cat: 'chemicals', img: '/images/PIRAMID Wood Cure.png', features: ['Deep timber penetration', 'Prevents woodborers', 'Protects dry & wet rot', 'Safe for interior wood'] },
  { id: 4, title: 'Salmon Insecticide', cat: 'chemicals', img: '/images/SALMON Insecticide.png', features: ['Broad-spectrum control', 'Fast action knockdown', 'Low residual odor', 'Emulsifiable concentrate'] },
  { id: 5, title: 'Shooter Insecticide', cat: 'chemicals', img: '/images/SHOOTER Insecticide.png', features: ['Instant contact kill', 'Cockroach & fly control', 'Targeted spray nozzle', 'Ideal spot treatment'] },
  { id: 6, title: 'Mackill Insecticide', cat: 'chemicals', img: '/images/MACKILL Insecticide.png', features: ['Flushes pests out of cracks', 'Long residual protection', 'High-purity formula', 'Non-staining spray'] },
  { id: 7, title: 'Shark Super Insecticide', cat: 'chemicals', img: '/images/SHARKsuper Insecticide.png', features: ['Combats resistance', 'Dual active formula', 'Rapid flush and kill', 'Great for kitchens'] },
  { id: 8, title: 'Scalp Insecticide', cat: 'chemicals', img: '/images/SCALP Insecticide.png', features: ['Outdoor barriers', 'Rain and UV resistant', 'Prevents ants & spiders', 'Low application rate'] },
  { id: 9, title: 'Indica Insecticide', cat: 'chemicals', img: '/images/INDICA Insecticide.png', features: ['Botanical origin', 'Safe for kids & pets', 'Pleasant natural aroma', 'Ideal for schools'] },
  { id: 10, title: 'Topper Insecticide', cat: 'chemicals', img: '/images/TOPPER Insecticide.png', features: ['IRS suspension concentrate', 'Up to 3 months residual', 'Safe indoor walls', 'Effective vector control'] },
  { id: 11, title: 'Cyclone Insecticide', cat: 'chemicals', img: '/images/CYCLONE Insecticide.png', features: ['Optimized for fogging', 'High density mist', 'Rapid adult knockdown', 'Oil-soluble formula'] },
  { id: 12, title: 'Shark Insecticide', cat: 'chemicals', img: '/images/SHARK Insecticide.png', features: ['Cost-effective general', 'Residual surface protection', 'Targets roaches & ants', 'Easy mixing liquid'] },
  { id: 13, title: 'Moksh Rat Cake', cat: 'chemicals', img: '/images/MOKSH Rat Cake.png', features: ['Single-feed bait', 'Weatherproof wax block', 'High palatability', 'Contains bittering agent'] },
  { id: 14, title: 'Moksh Mouse & Rat Glue Board', cat: 'equipment', img: '/images/MOKSH Mouse & Rat Glue.png', features: ['Extra-strength glue', 'Non-toxic, pesticide-free', 'Easy disposal design', 'Safe for food stores'] },
  { id: 15, title: 'Masterchloro Insecticide', cat: 'chemicals', img: '/images/masterchloro insecticide.png', features: ['Chlorpyrifos active power', 'Soil barrier properties', 'Heavy-duty termite protection', 'Highly persistent effect'] },
  { id: 16, title: 'Masterfog ULV Fogger', cat: 'equipment', img: '/images/masterfogulv.png', features: ['Ultra-fine droplet generation', 'Flow control nozzle', 'Lightweight portable design', 'High-rpm blower'] },
  { id: 17, title: 'Deltamaster Insecticide', cat: 'chemicals', img: '/images/deltamaster insecticide.png', features: ['Deltamethrin active', 'Odorless & non-staining', 'Safe for residential use', 'Controls bed bugs & ants'] },
  { id: 18, title: 'Termimaster Insecticide', cat: 'chemicals', img: '/images/termimaster insecticide.png', features: ['Soil injection formula', 'Non-repellent transfer', 'Binds foundation soil', 'Colony elimination'] },
  { id: 19, title: 'Masterpro Household Insecticide', cat: 'chemicals', img: '/images/masterprohouseholdinsecticide.png', features: ['Ready-to-use spray', 'Safe for kitchens', 'Fast contact knockdown', 'Mild fresh fragrance'] },
  { id: 20, title: 'Masteralpha 10 Insecticide', cat: 'chemicals', img: '/images/masteraplha10insecticide.png', features: ['Alphacypermethrin active', 'Wettable powder', 'Heavy-duty agricultural', 'Long surface persistence'] },
  { id: 21, title: 'Masterthin Insecticide', cat: 'chemicals', img: '/images/masterthin insecticide.png', features: ['Enhances fogging', 'Oil-miscible formulation', 'Synergized pyrethrins', 'Fast flying knockdown'] },
  { id: 22, title: 'Grainmaster Insecticide', cat: 'chemicals', img: '/images/grainmasterinsecticide.png', features: ['Food-grade protectant', 'Prevents weevils & beetles', 'Low residue profile', 'Long protection storage'] },
  { id: 23, title: 'Masterphos Fumigant', cat: 'chemicals', img: '/images/masterphos.png', features: ['Aluminum phosphide tablets', 'Deep gas penetration', 'Controls all life stages', 'Restricted professional'] },
  { id: 24, title: 'Bayer Agenda 25 EC', cat: 'chemicals', img: '/images/agenda.png', features: ['Bayer Fipronil active', 'Lethal transfer effect', 'Minimal footprint', '5+ years protection'] },
  { id: 25, title: 'Bayer Aqua K-Othrine', cat: 'chemicals', img: '/images/aquakothrine.png', features: ['Water-based spacespray', 'Patented FFAST technology', 'Odorless & non-flammable', 'Eco-friendly vector control'] },
  { id: 26, title: 'Baraki Rodenticide Block', cat: 'chemicals', img: '/images/baraki.png', features: ['Anticoagulant bait block', 'Moisture & mold resistant', 'Anchoring hole pre-drilled', 'High rodent acceptance'] },
  { id: 27, title: 'Barcelo Insecticide', cat: 'chemicals', img: '/images/barcelo.png', features: ['Suspension concentrate', 'Odorless indoor application', 'Safe residential spray', 'Effective ants & bugs'] },
  { id: 28, title: 'Bi-Larv Larvicide', cat: 'chemicals', img: '/images/bi-larv.png', features: ['Insect growth regulator', 'Interrupts molting cycle', 'Highly target specific', 'Safe for water systems'] },
  { id: 29, title: 'Bayer K-Obiol', cat: 'chemicals', img: '/images/k-obiol.png', features: ['Liquid grain protectant', 'Up to 12 months guard', 'Zero withholding period', 'Controls weevils & borers'] },
  { id: 30, title: 'Bayer K-Othrine WG 250', cat: 'chemicals', img: '/images/kothrinewg.png', features: ['Water-dispersible granules', 'Odorless & non-staining', 'Up to 3 months barrier', 'All wall surface stability'] },
  { id: 31, title: 'Bayer K-Othrine Flow', cat: 'chemicals', img: '/images/k-othrine flow.png', features: ['Flowable suspension', 'Excellent surface persistence', 'No visible residues', 'All crawling pests target'] },
  { id: 32, title: 'Kingfog Fogging Chemical', cat: 'chemicals', img: '/images/kingfog.png', features: ['Deltamethrin active', 'High thermal stability', 'Dense mist generation', 'Vector control campaigns'] },
  { id: 33, title: 'Bayer Maxforce Forte Gel', cat: 'chemicals', img: '/images/maxforceforte.png', features: ['Bayer cockroach gel bait', 'Domino effect colony kill', 'Odorless clean placement', 'Highly palatable matrix'] },
  { id: 34, title: 'Bayer Maxforce Fusion Gel', cat: 'chemicals', img: '/images/maxforcefusion.png', features: ['Enhanced feeding stimulant', 'Fast cockroach uptake', 'Ideal for infestations', 'Long-lasting moisture'] },
  { id: 35, title: 'Bayer Maxforce Quantum Ant Gel', cat: 'chemicals', img: '/images/maxfoercequantam.png', features: ['Liquid-gel ant bait', 'Attractive for 3 months', 'Non-drying hygroscopic', 'Colony queen elimination'] },
  { id: 36, title: 'Bayer Premise Termiticide', cat: 'chemicals', img: '/images/premise.png', features: ['Bayer Imidacloprid active', 'Non-repellent soil barrier', 'Colony transfer effect', 'Proven structural defense'] },
  { id: 37, title: 'Bayer Racumin Sure Block', cat: 'chemicals', img: '/images/racuminsure.png', features: ['Bayer Coumatetralyl active', 'No bait shyness effect', 'Highly palatable wax block', 'Weather-resistant bait'] },
  { id: 38, title: 'Bayer QuickBayt Fly Bait', cat: 'chemicals', img: '/images/quickbayt.png', features: ['Fly bait technology', 'Pheromone attractant', 'Kills flies in seconds', 'Scatter or paint-on'] },
  { id: 39, title: 'Bayer Responser Insecticide', cat: 'chemicals', img: '/images/respansar.png', features: ['Beta-cyfluthrin active', 'Ultra-fast knockdown', 'Residual surface barrier', 'Low application dosage'] },
  { id: 40, title: 'Bayer Solfac EW 050', cat: 'chemicals', img: '/images/solfacew.png', features: ['Bayer cyfluthrin emulsion', 'Water-based and odorless', 'No staining or residue', 'Ideal for schools & hotels'] },
  { id: 41, title: 'Bayer Solfac WP 10', cat: 'chemicals', img: '/images/solfac wp.png', features: ['Wettable powder formula', 'Excellent porous residual', 'Bed bug & mosquito target', 'Stable outdoor spray'] },
  { id: 42, title: 'Bayer Temprid Insecticide', cat: 'chemicals', img: '/images/trempid.png', features: ['Dual active technology', 'Kills resistant bed bugs', 'Contact & systemic action', 'Odorless residual spray'] }
];

const Products = () => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all'
    ? productsData
    : productsData.filter(p => p.cat === filter);

  return (
    <div className={styles.productsPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Premium, professional-grade pest control equipment, chemicals, and safety gear.
          </motion.p>
        </div>
      </section>

      {/* Filter and Products Grid */}
      <section className={styles.productsSection}>
        <div className="container">
          <div className={styles.filtersWrapper}>
            {['all', 'equipment', 'chemicals', 'safety'].map((category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${filter === category ? styles.activeFilter : ''}`}
                onClick={() => setFilter(category)}
              >
                {category === 'safety' ? 'PPE & Safety' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className={styles.productsGrid}>
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className={styles.productCard}
                >
                  <div className={styles.imgWrapper}>
                    <img src={product.img} alt={product.title} className={styles.productImg} />
                    <span className={`${styles.badge} ${styles[product.cat]}`}>
                      {product.cat.toUpperCase()}
                    </span>
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{product.title}</h3>
                    <ul className={styles.featuresList}>
                      {product.features.map((feat, i) => (
                        <li key={i}>
                          <Check size={14} className={styles.checkIcon} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className={styles.enquireBtn}>
                      Enquire Now <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
