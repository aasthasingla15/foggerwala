import { motion } from 'framer-motion';
import { Shield, Cpu, Activity, Zap, CheckCircle2, ChevronRight } from 'lucide-react';
import styles from './Technology.module.css';

const techFeatures = [
  {
    id: 1,
    title: 'Radar Motion Detection',
    img: '/images/radarmotion.png',
    icon: <Cpu size={24} />,
    desc: 'The only technology in the world that can detect termite activity through timber, plasterboard, brick, and concrete without drilling holes.'
  },
  {
    id: 2,
    title: 'Moisture Detection',
    img: '/images/moisturedetection.png',
    icon: <Shield size={24} />,
    desc: 'Identifies concentrated areas of moisture in structures which are prime target areas for termites to nest and seek water.'
  },
  {
    id: 3,
    title: 'Thermal Imaging',
    img: '/images/thermalimaging.png',
    icon: <Zap size={24} />,
    desc: 'Scans surface temperatures to detect variances caused by heat generated from termite nests and activity.'
  },
  {
    id: 4,
    title: 'Digital Reports',
    img: '/images/digitalreports.png',
    icon: <Activity size={24} />,
    desc: 'Generates instant, highly accurate digital PDF inspection reports showing exact areas of concern with coordinates.'
  }
];

const steps = [
  { num: '01', title: 'Schedule Inspection', desc: 'Book a convenient slot online or via phone.' },
  { num: '02', title: 'Initial Survey', desc: 'Our certified experts conduct a preliminary visual sweep.' },
  { num: '03', title: 'T3i Scanning', desc: 'Advanced radar scanning of suspicious areas.' },
  { num: '04', title: 'Data Analysis', desc: 'Real-time readings from moisture, thermal, and radar sensors.' },
  { num: '05', title: 'Report & Plan', desc: 'Detailed digital inspection report and custom treatment plan.' }
];

const Technology = () => {
  return (
    <div className={styles.techPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.tag}
          >
            Flagship Innovation
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Powered by Advanced Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={styles.subtitle}
          >
            We use cutting-edge detection systems that eliminate guesswork and deliver precise, non-invasive results.
          </motion.p>
        </div>
      </section>

      {/* Flagship Termatrac */}
      <section className="section">
        <div className="container">
          <div className={styles.flagshipGrid}>
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={styles.flagshipImgWrapper}
            >
              <img 
                src="/images/termatract3i.png" 
                alt="Termatrac T3i Device" 
                className={styles.flagshipImg}
              />
              <div className={styles.glassBadge}>
                <strong>100% Non-Invasive</strong>
                <span>Zero Drilling Required</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={styles.flagshipContent}
            >
              <h2>Termatrac T3i — The Gold Standard in Termite Detection</h2>
              <p>
                The world's only device that combines radar, thermal, and moisture detection for 100% non-invasive termite inspection. We scan your property safely and quickly, revealing pest activity deep within your walls.
              </p>
              <ul className={styles.benefitsList}>
                {['Radar Motion Detection', 'Moisture Detection Sensors', 'Thermal Imaging Sensors', 'Digital PDF Report Generation', 'Real-time Remote Analysis', 'Safe and Eco-Friendly'].map((benefit, idx) => (
                  <li key={idx}>
                    <CheckCircle2 className={styles.checkIcon} size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Cards */}
      <section className={`section section-bg-light ${styles.featuresSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Advanced Inspection Technologies</h2>
            <p>Our tools allow us to pinpoint pests accurately, guaranteeing the perfect treatment plan.</p>
          </div>

          <div className="grid grid-cols-2">
            {techFeatures.map((feat) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={feat.id} 
                className={styles.techCard}
              >
                <div className={styles.cardImgWrapper}>
                  <img src={feat.img} alt={feat.title} className={styles.cardImg} />
                  <div className={styles.cardIcon}>{feat.icon}</div>
                </div>
                <div className={styles.cardContent}>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our Inspection Process</h2>
            <p>A systematic and scientific approach to inspecting and protecting your property.</p>
          </div>

          <div className={styles.timeline}>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.timelineStep}>
                <div className={styles.stepNum}>{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className={`section section-bg-dark ${styles.comparisonSection}`}>
        <div className="container">
          <div className={styles.sectionHeader} style={{ color: 'white' }}>
            <h2 style={{ color: 'white' }}>Termatrac T3i vs. Traditional Methods</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Why industry professionals and homeowners choose Termatrac.</p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Inspection Parameter</th>
                  <th>Traditional Methods</th>
                  <th className={styles.highlightCol}>Termatrac T3i Detection</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Invasive Drilling</strong></td>
                  <td>Yes, highly invasive and damaging</td>
                  <td className={styles.highlightCol}>Zero drilling, 100% non-invasive</td>
                </tr>
                <tr>
                  <td><strong>Accuracy</strong></td>
                  <td>Based on visual guesses and tapping</td>
                  <td className={styles.highlightCol}>99.9% accuracy with advanced sensors</td>
                </tr>
                <tr>
                  <td><strong>Time Required</strong></td>
                  <td>Can take days to locate colonies</td>
                  <td className={styles.highlightCol}>Completed same day in hours</td>
                </tr>
                <tr>
                  <td><strong>Property Damage</strong></td>
                  <td>High potential for damage to walls & wood</td>
                  <td className={styles.highlightCol}>Absolutely zero damage</td>
                </tr>
                <tr>
                  <td><strong>Report Generation</strong></td>
                  <td>Handwritten / Simple visual report</td>
                  <td className={styles.highlightCol}>Instant digital PDF report with sensor data</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
