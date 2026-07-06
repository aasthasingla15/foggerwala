import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, CheckCircle, PhoneCall, Shield, Activity, Droplet, 
  Bug, Star, ChevronRight, Zap, Award, Clock, MessageCircle
} from 'lucide-react';
import styles from './Home.module.css';
import SectionDivider from '../components/SectionDivider';

// Animated counter hook
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = () => {
    if (started) return;
    setStarted(true);
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return { count, start };
};

const StatItem = ({ value, label, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const { count, start } = useCounter(numericValue);

  useEffect(() => {
    if (inView) start();
  }, [inView]);

  return (
    <div ref={ref} className={styles.statCard}>
      <h3>{count}{suffix || value.replace(/[0-9]/g, '')}</h3>
      <p>{label}</p>
    </div>
  );
};

const services = [
  { id: 1, title: 'Termite Control', img: '/images/termite control.png', icon: <Shield size={20} /> },
  { id: 2, title: 'Commercial Pest Control', img: '/images/commercialpestcontrol.png', icon: <Activity size={20} /> },
  { id: 4, title: 'Cockroach Control', img: '/images/cockroachcontrol.png', icon: <Bug size={20} /> },
  { id: 6, title: 'Rodent Control', img: '/images/rodentcontrol.png', icon: <Shield size={20} /> },
  { id: 5, title: 'Mosquito Fogging', img: '/images/mosquitocontrol.png', icon: <Droplet size={20} /> },
  { id: 15, title: 'Commercial AMC Services', img: '/images/shoppingmallpestcontrol.png', icon: <Zap size={20} /> }
];

const featuredProducts = [
  { id: 1, title: 'Thermal Fogging Machine', cat: 'equipment', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800', desc: 'High thermal output power with a pulse-jet motor for large outdoor spaces.' },
  { id: 2, title: 'ULV Fogger', cat: 'equipment', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', desc: 'Advanced cold fogging with electric motor and adjustable micro-droplet sizes.' },
  { id: 7, title: 'Rodent Bait Stations', cat: 'equipment', img: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=800', desc: 'Tamper-resistant locking station safe for non-target animals.' },
  { id: 12, title: 'Termatrac T3i Devices', cat: 'equipment', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800', desc: 'Flagship non-invasive radar termite detection scanner.' },
  { id: 13, title: 'Termite Chemicals', cat: 'chemicals', img: 'https://images.unsplash.com/photo-1607619056574-7b8f304b3b8a?auto=format&fit=crop&q=80&w=800', desc: 'WHO & CIB registered transfer chemicals for long term soil barriers.' },
  { id: 16, title: 'Premium PPE Kits', cat: 'safety', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800', desc: 'Disposable splash-resistant protective coveralls and face shields.' }
];

const testimonials = [
  { name: 'Karan Sharma', role: 'Homeowner, Gurgaon', rating: 5, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', review: 'Absolutely incredible! They used a radar device to trace termites in our wooden paneling without breaking anything. Eradicated them in one visit.' },
  { name: 'Dr. Renu Malhotra', role: 'Clinic Director, Noida', rating: 5, img: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=200', review: 'We have an annual contract with Foggerwala for our medical facility. Their service is extremely hygienic, odor-free, and fully compliant with healthcare standards.' },
  { name: 'Amit Gupta', role: 'Warehouse Manager, Delhi', rating: 5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', review: 'Best industrial pest management service in NCR. Their warehouse pest program saved us from major inventory losses. I highly recommend them.' },
];

const industries = [
  { name: 'Residential', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600' },
  { name: 'Hotels', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600' },
  { name: 'Restaurants', img: 'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?auto=format&fit=crop&q=80&w=600' },
  { name: 'Hospitals', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600' },
  { name: 'Warehouses', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600' },
  { name: 'Corporate Offices', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
  })
};

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleSliderMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      handleSliderMove(e.clientX);
    }
  };

  return (
    <div className={styles.home}>
      {/* ===== HERO SECTION WITH SPLIT LAYOUT ===== */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          
          {/* Left Content (55%) */}
          <div className={styles.heroLeft}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.heroBadge}
            >
              <Award size={14} /> WHO & CIB APPROVED • CERTIFIED TEAM
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className={styles.heroTitle}
            >
              Trusted to Protect, <br />Built to Perfect.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={styles.taglineWrapper}
            >
              <p className={styles.heroSubtitle}>
                Foggerwala Private Limited delivers scientific pest control, specialized equipment, and certified chemicals for complete safety.
              </p>
              <div className={styles.accentBar}></div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className={styles.heroActions}
            >
              <a href="tel:9810629361" className={`${styles.btn} ${styles.btnPrimaryGradient}`}>
                <PhoneCall size={20} />
                <span>Call Now: 9810629361</span>
              </a>
              <a href="https://wa.me/919990365024" className={`${styles.btn} ${styles.btnOutlineWhite}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                <span>WhatsApp Quote</span>
              </a>
            </motion.div>
          </div>

          {/* Right Video Mockup (45%) */}
          <div className={styles.heroRight}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className={styles.videoBezelFrame}
            >
              {/* Desktop video inside frame */}
              <video 
                className={`${styles.heroVideo} ${styles.desktopVideo}`}
                src="/desktop_hero.mp4"
                poster="/fallback_poster.png"
                autoPlay 
                loop 
                muted 
                playsInline
              ></video>
              {/* Mobile video inside frame */}
              <video 
                className={`${styles.heroVideo} ${styles.mobileVideo}`}
                src="/mobile_hero.mp4"
                poster="/fallback_poster.png"
                autoPlay 
                loop 
                muted 
                playsInline
              ></video>
              
              {/* Glassmorphism Stat Card overlapping the video edge */}
              <div className={styles.glassStatCard}>
                <div className={styles.glassStatItem}>
                  <strong>20+</strong>
                  <span>Years Exp</span>
                </div>
                <div className={styles.glassDivider}></div>
                <div className={styles.glassStatItem}>
                  <strong>10,000+</strong>
                  <span>Clients Served</span>
                </div>
                <div className={styles.glassDivider}></div>
                <div className={styles.glassStatItem}>
                  <strong>PAN India</strong>
                  <span>Presence</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Subtle scroll down mouse indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.mouseIcon}>
            <div className={styles.wheel}></div>
          </div>
        </div>
      </section>

      {/* SVG Transition: Wave into Trust Strip */}
      <SectionDivider type="wave" fill="var(--color-light-blue)" />

      {/* ===== WHY CHOOSE US STRIP ===== */}
      <section className={styles.trustStrip}>
        <div className="container">
          <div className={styles.trustGrid}>
            {[
              { icon: <Award size={28} />, title: 'WHO & CIB Approved', text: 'All chemicals used are officially certified, low-toxicity, and safe.' },
              { icon: <Shield size={28} />, title: '20+ Years Experience', text: 'Over two decades of premium pest management expertise across India.' },
              { icon: <Zap size={28} />, title: 'Termatrac T3i Radar', text: 'World-leading non-destructive detection. No drilling or damage.' },
              { icon: <Clock size={28} />, title: 'Instant Engineering Response', text: 'Direct, rapid connection with our on-site supervisors.' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className={styles.trustItem}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
              >
                <div className={styles.trustIcon}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SVG Transition: Curve into Services */}
      <SectionDivider type="curve" fill="var(--color-white)" />

      {/* ===== SERVICES PREVIEW ===== */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>Our Services</p>
            <h2>Comprehensive Pest Management</h2>
            <p>From residential homes to commercial facilities — we protect every space.</p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className={styles.serviceCard}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.serviceImgWrapper}>
                  <img src={service.img} alt={service.title} className={styles.serviceImg} loading="lazy" />
                  <div className={styles.serviceIcon}>{service.icon}</div>
                </div>
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>Advanced treatment methods for complete eradication and long-term prevention.</p>
                  <Link to={`/services/${service.id}`} className={styles.serviceLink}>
                    View Details <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link to="/services" className={`${styles.btn} ${styles.btnOutline}`}>
              View All 24 Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SVG Transition: Slant into Flagship Tech */}
      <SectionDivider type="slant" fill="var(--color-dark-navy)" />

      {/* ===== TECHNOLOGY HIGHLIGHT (FLAGSHIP CENTERPIECE) ===== */}
      <section className={`section ${styles.techSection}`}>
        <div className="container">
          <div className={styles.techGrid}>
            <motion.div 
              className={styles.techContent}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.techCenterpieceBadge}>
                <Zap size={14} /> FLAGSHIP CENTERPIECE
              </div>
              <p className={styles.sectionTag} style={{ color: '#4FC3F7', marginTop: '1rem' }}>Flagship Technology</p>
              <h2 style={{ color: 'white' }}>Powered by Termatrac T3i</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                The world's only device combining radar, thermal, and moisture detection. We track termites inside concrete walls and timber beams without drilling a single hole.
              </p>
              <ul className={styles.techList}>
                {['Radar Motion Detection', 'Thermal Imaging Scan', 'Moisture Mapping', 'GPS Coordinate Sync', 'Automated Digital PDF Reports', '100% Non-Invasive'].map((feat, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <CheckCircle size={18} className={styles.techListIcon} /> {feat}
                  </motion.li>
                ))}
              </ul>
              <Link to="/contact?service=Termatrac%20Inspection" className={`${styles.btn} ${styles.btnPrimaryGradient}`} style={{ marginTop: '2.5rem', display: 'inline-flex' }}>
                Book a Termatrac Inspection <ArrowRight size={18} />
              </Link>
            </motion.div>
            
            <motion.div 
              className={styles.techImageWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.techImageOutline}>
                <img 
                  src="/images/termatract3i.png" 
                  alt="Termatrac T3i Advanced Inspection Technology" 
                  className={styles.techImage}
                />
              </div>
              <div className={styles.techBadge}>
                <Zap size={20} color="#4FC3F7" />
                <div>
                  <strong style={{ color: 'white', display: 'block' }}>100% Non-Invasive</strong>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>No wall breaking. No structural damage.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SVG Transition: Wave back to White */}
      <SectionDivider type="wave" fill="var(--color-white)" flip={true} />

      {/* ===== PRODUCTS PREVIEW SECTION ===== */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>Premium Equipment & Chemistry</p>
            <h2>Industrial-Grade Products</h2>
            <p>Top-tier specialized foggers, CIB registered chemicals, and safety gear for professional setups.</p>
          </div>

          <div className={styles.servicesGrid}>
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={index}
                className={styles.productCard}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.serviceImgWrapper}>
                  <img src={product.img} alt={product.title} className={styles.serviceImg} loading="lazy" />
                  <span className={styles.productCatBadge}>{product.cat.toUpperCase()}</span>
                </div>
                <div className={styles.serviceContent}>
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                  <Link to={`/products/${product.id}`} className={styles.serviceLink}>
                    View Specifications <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link to="/products" className={`${styles.btn} ${styles.btnOutline}`}>
              Browse Full Catalog <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SVG Transition: Curve into Slider */}
      <SectionDivider type="curve" fill="var(--color-light-blue)" />

      {/* ===== BEFORE-AFTER DRAG SLIDER SECTION ===== */}
      <section className={styles.sliderSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>Visual Verification</p>
            <h2>Termite Damage Comparison</h2>
            <p>Slide left and right to compare active, decaying termite wood damage with structurally sound, chemically protected timber.</p>
          </div>

          <div 
            ref={sliderRef}
            className={styles.sliderContainer}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background) - Clean wood */}
            <div className={styles.sliderImageAfter}>
              <img 
                src="/after_termite.png" 
                alt="After Treatment: clean wood" 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800"; }}
              />
              <div className={`${styles.sliderLabel} ${styles.sliderLabelAfter}`}>AFTER TREATMENT</div>
            </div>

            {/* Before Image (Foreground, clipped) - Termite damage */}
            <div 
              className={styles.sliderImageBefore}
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img 
                src="/before_termite.png" 
                alt="Before Treatment: termite damage" 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800"; }}
              />
              <div className={`${styles.sliderLabel} ${styles.sliderLabelBefore}`}>BEFORE TREATMENT</div>
            </div>

            {/* Slide Handle/Bar */}
            <div 
              className={styles.sliderHandle}
              style={{ left: `${sliderPosition}%` }}
            >
              <div className={styles.sliderHandleLine}></div>
              <div className={styles.sliderHandleButton}>
                <span>↔</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Transition: Slant back to White */}
      <SectionDivider type="slant" fill="var(--color-white)" flip={true} />

      {/* ===== INDUSTRIES WE SERVE ===== */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>Every Environment, Fully Protected</p>
            <h2>Industries We Serve</h2>
            <p>From homes to major manufacturing complexes, we provide tailored commercial contracts.</p>
          </div>
          <div className={styles.industriesGrid}>
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                className={styles.industryCard}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                <img src={ind.img} alt={ind.name} className={styles.industryImg} loading="lazy" />
                <div className={styles.industryOverlay}>
                  <h4>{ind.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Partners Client Logo Strip */}
          <div className={styles.partnersSection}>
            <p className={styles.partnersTitle}>Trusted by commercial groups and local authorities</p>
            <div className={styles.logoContainer}>
              <div className={styles.logoTrack}>
                {['TATA Group', 'ICICI Bank', 'L&T Construction', 'DDA Societies', 'NCR Hospitals', 'Metro Warehouses'].map((partner, pIdx) => (
                  <div key={pIdx} className={styles.logoItem}>
                    <span>{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link to="/industries" className={`${styles.btn} ${styles.btnOutline}`}>
              View All Industries <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SVG Transition: Curve into Testimonials */}
      <SectionDivider type="curve" fill="var(--color-dark-navy)" />

      {/* ===== TESTIMONIALS ===== */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag} style={{ color: '#4FC3F7' }}>What Our Clients Say</p>
            <h2 style={{ color: 'white' }}>Trusted by 5000+ Customers</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                className={`${styles.testimonialCard} ${i === activeTestimonial ? styles.activeTestimonial : ''}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
              >
                <div className={styles.stars}>
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="#FFB800" color="#FFB800" />
                  ))}
                </div>
                <p className={styles.reviewText}>"{t.review}"</p>
                <div className={styles.reviewerInfo}>
                  <img src={t.img} alt={t.name} className={styles.reviewerAvatar} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LATEST BLOGS PREVIEW (NEW SECTION) ===== */}
      <SectionDivider type="wave" fill="var(--color-light-blue)" />
      <section className={styles.sliderSection} style={{ backgroundColor: 'var(--color-light-blue)', paddingTop: '60px', paddingBottom: '90px' }}>
        <div className="container">
          <div className={styles.sectionHeader} style={{ marginBottom: '3.5rem' }}>
            <p className={styles.sectionTag}>News & Insights</p>
            <h2>Latest Pest Control Guides</h2>
            <p>Expert articles, advice, and tips on termite detection, pest prevention, and eco-friendly chemistry.</p>
          </div>

          <div className={styles.servicesGrid}>
            {[
              { id: 1, title: 'Signs of Termite Infestation', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800', date: 'June 15, 2025', desc: 'Identify early warning signs of active termite colonies before structural wood decay begins.' },
              { id: 2, title: 'Monsoon Pest Prevention', img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80&w=800', date: 'May 28, 2025', desc: 'Monsoon season triggers cockroach and mosquito surges. Protect your property proactively.' },
              { id: 7, title: 'Benefits of Termatrac Radar', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800', date: 'March 1, 2025', desc: 'How our flagship Termatrac T3i uses non-destructive radar to detect hidden nests.' }
            ].map((blog, idx) => (
              <motion.div 
                key={idx}
                className={styles.productCard}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.serviceImgWrapper}>
                  <img src={blog.img} alt={blog.title} className={styles.serviceImg} />
                  <span className={styles.productCatBadge} style={{ background: 'var(--color-dark-navy)' }}>{blog.date}</span>
                </div>
                <div className={styles.serviceContent}>
                  <h3>{blog.title}</h3>
                  <p>{blog.desc}</p>
                  <Link to="/blogs" className={styles.serviceLink}>
                    Read Article <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SVG Transition: Wave into CTA */}
      <SectionDivider type="wave" fill="linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)" flip={true} />

      {/* ===== CTA SECTION ===== */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Ready to Get a Pest-Free Property?
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              Speak with our engineers directly for pricing or to book an inspection instantly.
            </motion.p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <a href="tel:9810629361" className={`${styles.btn} ${styles.btnPrimaryGradient}`}>
                <PhoneCall size={20} /> Call Now: 9810629361
              </a>
              <a href="https://wa.me/919990365024" className={`${styles.btn} ${styles.btnOutlineWhite}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} /> WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
