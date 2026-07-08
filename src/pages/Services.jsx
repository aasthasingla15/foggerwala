import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Activity, Droplet, Bug, Zap, Eye, ChevronRight } from 'lucide-react';
import styles from './Services.module.css';

const servicesData = [
  { id:1, title:'Termite Control', cat:'residential', img:'/images/termite control.png', icon: <Shield />, desc:'Advanced termite detection and treatment using Termatrac T3i technology for complete home protection.' },
  { id:2, title:'Commercial Pest Control', cat:'commercial', img:'/images/commercialpestcontrol.png', icon: <Activity />, desc:'Comprehensive pest management programs tailored for businesses, offices, and commercial spaces.' },
  { id:3, title:'Industrial Pest Control', cat:'industrial', img:'/images/industrypestcontrol.png', icon: <Zap />, desc:'Heavy-duty pest control solutions for factories, plants, and industrial facilities.' },
  { id:4, title:'Cockroach Control', cat:'residential', img:'/images/cockroachcontrol.png', icon: <Bug />, desc:'Targeted gel bait and spray treatments to eliminate cockroach infestations effectively.' },
  { id:5, title:'Mosquito Control', cat:'residential', img:'/images/mosquitocontrol.png', icon: <Droplet />, desc:'Fogging and larvicide treatments to control mosquito populations and prevent dengue & malaria.' },
  { id:6, title:'Rodent Control', cat:'residential', img:'/images/rodentcontrol.png', icon: <Shield />, desc:'Bait stations, traps, and exclusion services to eliminate rodents and prevent re-entry.' },
  { id:7, title:'Bed Bug Treatment', cat:'residential', img:'/images/bedbugtreatment.png', icon: <Activity />, desc:'Steam heat and insecticide treatments to completely eradicate bed bug infestations.' },
  { id:8, title:'Ant Control', cat:'residential', img:'/images/antcontrol.png', icon: <Bug />, desc:'Colony elimination using advanced ant baits and barrier treatments.' },
  { id:9, title:'Spider Control', cat:'residential', img:'/images/spidercontrol.png', icon: <Shield />, desc:'Safe and effective spider management to protect your home from all common and venomous species.' },
  { id:10, title:'Bee & Wasp Control', cat:'residential', img:'/images/beeorwaspcontrol.png', icon: <Zap />, desc:'Safe removal and relocation of bee colonies and wasp nests by certified experts.' },
  { id:11, title:'Fly Control', cat:'commercial', img:'/images/flycontrol.png', icon: <Droplet />, desc:'UV fly killers, baiting, and sanitation programs for fly-free environments.' },
  { id:12, title:'Lizard Control', cat:'residential', img:'/images/lizardcontrol.png', icon: <Activity />, desc:'Humane lizard repellent treatments and exclusion methods for homes and offices.' },
  { id:13, title:'Silverfish Control', cat:'residential', img:'/images/silverfishcontrol.png', icon: <Bug />, desc:'Targeted treatments to eliminate silverfish and protect your books, clothing, and wallpaper.' },
  { id:14, title:'Snake Management', cat:'industrial', img:'/images/snakemanagement.png', icon: <Shield />, desc:'Professional snake removal and preventive exclusion for industrial and residential properties.' },
  { id:15, title:'Bird Control', cat:'commercial', img:'/images/birdcontrol.png', icon: <Zap />, desc:'Humane deterrents including nets, spikes, and repellers to manage nuisance birds.' },
  { id:16, title:'Warehouse Pest Management', cat:'industrial', img:'/images/warehousepestmanagement.png', icon: <Activity />, desc:'Comprehensive pest programs to protect stored goods and maintain regulatory compliance.' },
  { id:17, title:'Hospital Pest Control', cat:'commercial', img:'/images/hospitalpestcontrol.png', icon: <Shield />, desc:'Discreet, safe, and highly effective pest control for healthcare environments.' },
  { id:18, title:'Restaurant Pest Control', cat:'commercial', img:'/images/restrauntpestcontrol.png', icon: <Droplet />, desc:'Helping restaurants maintain hygiene standards and pass health inspections effortlessly.' },
  { id:19, title:'School Pest Control', cat:'commercial', img:'/images/schoolpestcontrol.png', icon: <Activity />, desc:'Child-safe pest management solutions for schools, colleges, and educational institutions.' },
  { id:20, title:'Office Pest Control', cat:'commercial', img:'/images/officepestcontrol.png', icon: <Zap />, desc:'Minimal disruption pest control programs that keep your workplace productive and pest-free.' },
  { id:21, title:'Food Industry Pest Management', cat:'industrial', img:'/images/foodindustrypestcontrol.png', icon: <Bug />, desc:'HACCP-compliant pest control for food processing and packaging facilities.' },
  { id:22, title:'Pharmaceutical Pest Control', cat:'industrial', img:'/images/pharmaceuticalpestcontrol.png', icon: <Shield />, desc:'GMP-compliant pest management for pharmaceutical manufacturing and storage facilities.' },
  { id:23, title:'Hotel Pest Management', cat:'commercial', img:'/images/hotelcontrol.png', icon: <Activity />, desc:'Discreet and effective pest control to protect hotel reputation and guest comfort.' },
  { id:24, title:'Shopping Mall Pest Control', cat:'commercial', img:'/images/shoppingmallpestcontrol.png', icon: <Zap />, desc:'Comprehensive pest management for large retail and mall environments.' }
];

const Services = () => {
  const [filter, setFilter] = useState('all');

  const filteredServices = filter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.cat === filter);

  return (
    <div className={styles.servicesPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Advanced and professional pest management solutions tailored to your specific environment.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filtersWrapper}>
            {['all', 'residential', 'commercial', 'industrial'].map((category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${filter === category ? styles.activeFilter : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <motion.div 
            layout
            className={styles.servicesGrid}
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={service.id}
                  className={styles.serviceCard}
                >
                  <div className={styles.imgWrapper}>
                    <img src={service.img} alt={service.title} className={styles.serviceImg} />
                    <div className={styles.iconWrapper}>{service.icon}</div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <Link to={`/services/${service.id}`} className={styles.detailsBtn}>
                      View Details <ChevronRight size={16} />
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


export default Services;
