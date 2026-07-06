import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import styles from './Products.module.css';

const productsData = [
  { id:1, title:'Thermal Fogging Machine', cat:'equipment', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800', features:['High thermal output','Large capacity tank','Suitable for large outdoors'] },
  { id:2, title:'ULV Fogger', cat:'equipment', img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', features:['Ultra-low volume technology','Electric powered','Adjustable droplet size'] },
  { id:3, title:'Mist Blower', cat:'equipment', img:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800', features:['High air velocity','Gasoline powered','Backpack design'] },
  { id:4, title:'Power Sprayer', cat:'equipment', img:'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=800', features:['Heavy-duty piston pump','Sturdy trolley mount','Long high-pressure hose'] },
  { id:5, title:'Compression Sprayer', cat:'equipment', img:'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=800', features:['Stainless steel body','Manual pressure pump','Safety release valve'] },
  { id:6, title:'Hand Sprayer', cat:'equipment', img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800', features:['Ergonomic grip','Adjustable brass nozzle','Ideal for indoor spot spray'] },
  { id:7, title:'Rodent Bait Stations', cat:'equipment', img:'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=800', features:['Tamper-resistant lock','Weather-proof design','Safe for children & pets'] },
  { id:8, title:'Glue Boards', cat:'equipment', img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800', features:['Super-sticky glue','Non-toxic formulation','Easy disposal'] },
  { id:9, title:'Glue Traps', cat:'equipment', img:'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&q=80&w=800', features:['Pre-scented bait','Heavy-duty card stock','Foldable tunnel design'] },
  { id:10, title:'UV Fly Killers', cat:'equipment', img:'https://images.unsplash.com/photo-1565108926766-c07c9fdeaafe?auto=format&fit=crop&q=80&w=800', features:['High-attract UV bulbs','Glue board trapping','Sleek wall-mounted design'] },
  { id:11, title:'Insect Monitoring Traps', cat:'equipment', img:'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=800', features:['Pheromone attractant','Grid lines for easy counting','Eco-friendly cardboard'] },
  { id:12, title:'Termite Chemicals', cat:'chemicals', img:'https://images.unsplash.com/photo-1607619056574-7b8f304b3b8a?auto=format&fit=crop&q=80&w=800', features:['Non-repellent transfer technology','Long-term soil barrier','WHO approved formulation'] },
  { id:13, title:'General Insecticides', cat:'chemicals', img:'https://images.unsplash.com/photo-1597763620770-5ae2db2b5f6e?auto=format&fit=crop&q=80&w=800', features:['Synthetic pyrethroid','Low odor formulation','Quick knockdown effect'] },
  { id:14, title:'Gel Baits', cat:'chemicals', img:'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&q=80&w=800', features:['Highly palatable to roaches','Domino kill effect','Precision syringe packaging'] },
  { id:15, title:'Mosquito Larvicides', cat:'chemicals', img:'https://images.unsplash.com/photo-1503455637927-730bce8583c0?auto=format&fit=crop&q=80&w=800', features:['Biological larvicide (Bti)','Safe for aquatic organisms','Prevents breeding in stagnant water'] },
  { id:16, title:'PPE Kits', cat:'safety', img:'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800', features:['Complete body protection','Breathable SMS material','Disposable design'] },
  { id:17, title:'Safety Gloves', cat:'safety', img:'https://images.unsplash.com/photo-1616628188467-8fb59509f685?auto=format&fit=crop&q=80&w=800', features:['Chemical-resistant nitrile','Puncture & tear proof','Excellent grip surface'] },
  { id:18, title:'Respirators', cat:'safety', img:'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800', features:['Double gas filters','Comfortable silicone seal','Adjustable head strap'] },
  { id:19, title:'Face Shields', cat:'safety', img:'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=800', features:['Full face cover','Anti-fog clear window','Adjustable ratchet suspension'] },
  { id:20, title:'Protective Coveralls', cat:'safety', img:'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800', features:['Splash resistant','Elastic cuffs & ankles','Antistatic material'] },
  { id:21, title:'Safety Goggles', cat:'safety', img:'https://images.unsplash.com/photo-1590756254933-2873d72a83b6?auto=format&fit=crop&q=80&w=800', features:['Indirect ventilation','UV protection lens','Comfortable vinyl frame'] }
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
