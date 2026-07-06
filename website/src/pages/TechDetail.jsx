import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, PhoneCall, MessageCircle, Cpu, CheckCircle } from 'lucide-react';
import styles from './TechDetail.module.css';

const techData = [
  {
    id: 1,
    title: 'Radar Motion Detection',
    img: '/images/radarmotion.png',
    icon: <Cpu size={24} />,
    longDesc: 'Our Radar Motion Detection technology uses state-of-the-art radar sensors to identify micro-movements of pests. It penetrates drywall, timber, concrete, and soil, picking up the constant motion of active termite colonies behind surfaces. This eliminates the need for speculative drilling or breaking tiles and woodwork, allowing for 100% clean scanning.',
    specs: ['Deep structural penetration up to 10 inches', 'Detects vibrations and micro-motions in real-time', 'Calibrated to identify specific termite movement patterns']
  },
  {
    id: 2,
    title: 'Moisture Detection',
    img: '/images/moisturedetection.png',
    icon: <Cpu size={24} />,
    longDesc: 'Moisture is the primary driver for subterranean termites to invade and colonize structure frames. Our specialized Moisture Detection system measures relative moisture levels in woodwork and structural partitions, highlighting high-concentration damp spots that are invisible to the naked eye.',
    specs: ['Pins down hidden moisture pockets behind plasterboard and brickwork', 'Pinpoints structural leaks that encourage pest colonizing', 'Non-contact sensor interface protects walls from scratches']
  },
  {
    id: 3,
    title: 'Thermal Imaging',
    img: '/images/thermalimaging.png',
    icon: <Cpu size={24} />,
    longDesc: 'Termite colonies generate significant heat within their nesting systems. Thermal Imaging scans surface temperatures and reads temperature differences. Suspicious heat signatures instantly tell our experts exactly where active termites are feeding or building mud nests.',
    specs: ['High-resolution color mapping of structural temperatures', 'Quickly scans wide partition spaces within minutes', 'Highlights active infestation cores and mud nests']
  },
  {
    id: 4,
    title: 'Digital Inspection Reports',
    img: '/images/digitalreports.png',
    icon: <Cpu size={24} />,
    longDesc: 'Transparency and detail are crucial for property owners. Our digital reporting aggregates telemetry from moisture, radar, and thermal sweeps, compiling them into a professional PDF report detailing findings, active zone markings, and recommendations.',
    specs: ['Telemetric data charts including moisture graphs', 'Exact GPS mapping coordinates of inspection points', 'Includes recommendation plans for treatment and warranty']
  }
];

const TechDetail = () => {
  const { id } = useParams();
  const tech = techData.find(t => t.id === parseInt(id, 10));

  if (!tech) {
    return (
      <div className="section text-center" style={{ padding: '160px 0' }}>
        <h2>Technology Details Not Found</h2>
        <p>The technology page you are looking for does not exist.</p>
        <Link to="/technology" className="btn btnOutline">Back to Technology</Link>
      </div>
    );
  }

  return (
    <div className={styles.techDetailPage}>
      {/* Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <Link to="/technology" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Technology
          </Link>
          <h1>{tech.title}</h1>
        </div>
      </section>

      {/* Main Details */}
      <section className="section">
        <div className="container">
          <div className={styles.detailGrid}>
            <div className={styles.imageCol}>
              <img src={tech.img} alt={tech.title} className={styles.mainImg} />
            </div>

            <div className={styles.contentCol}>
              <h2>Technical Breakdown</h2>
              <p className={styles.longDesc}>{tech.longDesc}</p>

              <div className={styles.specsBox}>
                <h3>System Capabilities</h3>
                <ul className={styles.specsList}>
                  {tech.specs.map((spec, i) => (
                    <li key={i}>
                      <CheckCircle size={18} className={styles.checkIcon} />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className={styles.ctaBox}>
                <h3>Schedule Tech Scan</h3>
                <p>Have our certified inspectors sweep your property with these advanced detection technologies today.</p>
                <div className={styles.btnRow}>
                  <a href="tel:9810629361" className={styles.callBtn}>
                    <PhoneCall size={18} />
                    <span>Call: 9810629361</span>
                  </a>
                  <a href="https://wa.me/919990365024" className={styles.whatsappBtn}>
                    <MessageCircle size={18} />
                    <span>Book Technology Scan</span>
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

export default TechDetail;
