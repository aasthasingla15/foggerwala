import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, ArrowLeft, Shield, Mail, Phone, MessageCircle } from 'lucide-react';
import styles from './Blogs.module.css';

const blogsData = [
  { 
    id: 1, 
    title: 'Signs of Termite Infestation in Your Home', 
    cat: 'termites', 
    date: 'June 15, 2025', 
    img: '/images/termite control.png', 
    excerpt: 'Learn to identify early warning signs of termite activity before they cause costly structural damage to your property.',
    content: [
      'Termites are often referred to as "silent destroyers" because they can chew through wood, flooring, and even wallpaper undetected. By the time damage becomes obvious, structural repairs can cost thousands of dollars.',
      'Here are the most common early warning signs you should look for:',
      '1. Mud Tubes on Walls: Termites construct mud tubes (about the width of a pencil) to provide moisture as they travel between their underground colony and the wood source. You will usually find these on foundation walls, crawl spaces, or wooden beams.',
      '2. Hollow-Sounding Wood: Tap on your wooden walls, beams, or door frames. If they sound hollow or soft, termites may have consumed the wood from the inside out, leaving only a thin outer shell.',
      '3. Discarded Wings: Swarmers (reproductive termites) fly out in spring to start new colonies. They discard their wings shortly after landing, often leaving piles of translucent wings near windowsills and doors.',
      '4. Termite Frass: Drywood termites produce small, wood-colored droppings resembling sawdust or sand piles near infested wood.',
      'If you notice any of these signs, avoid breaking the mud tubes yourself, as this can cause the colony to relocate deeper into your structure. Contact Foggerwala for a professional, non-invasive Termatrac inspection immediately.'
    ]
  },
  { 
    id: 2, 
    title: 'Monsoon Pest Prevention: Complete Guide', 
    cat: 'prevention', 
    date: 'May 28, 2025', 
    img: '/images/mosquitocontrol.png', 
    excerpt: 'The monsoon season brings a surge in pest activity. Here is how to protect your home and business proactively.',
    content: [
      'The monsoon season brings relief from the heat, but it also triggers a massive surge in pest activity. High humidity and stagnant water create the perfect breeding ground for mosquitoes, cockroaches, rodents, and ants.',
      'To keep your property pest-free during the rainy season, implement these preventative measures:',
      '1. Eliminate Stagnant Water: Empty flowerpots, clean gutters, and ensure there is no standing water in your yard where mosquitoes can lay eggs. Use biological larvicides in stagnant areas.',
      '2. Seal Entry Points: Check for cracks in doors, windows, and utility lines. Pests seek dry shelter, and even tiny openings can serve as an entrance.',
      '3. Proper Waste Disposal: Keep trash cans tightly sealed and avoid leaving wet kitchen waste overnight. Damp garbage is a magnet for cockroaches and flies.',
      '4. Professional Pre-Monsoon Spray: A protective chemical barrier applied around your foundation before the rains start is the most effective way to block pests.',
      'Foggerwala offers specialized pre-monsoon pest control packages designed for Indian households. Get in touch today for an evaluation.'
    ]
  },
  { 
    id: 3, 
    title: 'Commercial Pest Management Best Practices', 
    cat: 'commercial', 
    date: 'May 10, 2025', 
    img: '/images/shoppingmallpestcontrol.png', 
    excerpt: 'Effective pest management is critical for business continuity. Discover industry best practices for commercial properties.',
    content: [
      'Pest infestations in commercial spaces can lead to regulatory fines, stock contamination, and devastating reputation damage. Businesses require proactive, systematic Integrated Pest Management (IPM) rather than reactive spraying.',
      'Here are key best practices for commercial facilities:',
      '1. Routine Inspections: Don\'t wait for an employee or client to spot a pest. Schedule regular monthly or quarterly audits by certified technicians.',
      '2. Detailed Sanitation Logs: Maintain strict records of cleaning schedules, waste removal, and structural maintenance. Pests thrive where food and entry routes exist.',
      '3. Non-Toxic Trapping First: For sensitive environments like offices or food processing units, prioritize physical traps, glue boards, and UV light fly killers before using chemicals.',
      '4. Strict Compliance: Ensure all chemicals are CIB (Central Insecticides Board) approved and standard-compliant to pass safety audits.',
      'Foggerwala specializes in Commercial AMC services for corporate offices, clinics, and warehouses, providing full documentation for audits.'
    ]
  },
  { 
    id: 4, 
    title: 'Warehouse Pest Control Solutions', 
    cat: 'commercial', 
    date: 'April 22, 2025', 
    img: '/images/rodentcontrol.png', 
    excerpt: 'Stored product pests can cause millions in losses. Learn how to implement effective warehouse pest programs.',
    content: [
      'Warehouses and logistics centers handle massive volumes of inventory, making them primary targets for rodents, beetles, and moths. A single unchecked rodent nesting in a pallet stack can destroy entire product shipments.',
      'A robust warehouse pest strategy must include:',
      '1. Perimeter Bait Stations: Place heavy-duty, tamper-resistant rodent bait stations along the outer perimeter walls to intercept pests before they breach the dock doors.',
      '2. Thermal & ULV Fogging: Use Ultra-Low Volume (ULV) fogging machines for massive high-ceiling spaces to reach insects hiding in rack joints.',
      '3. FIFO Stock Management: Follow the First-In, First-Out rule. Old inventory left undisturbed for long periods is a prime breeding area for beetles.',
      '4. Professional Sealing: Seal dock leveler gaps and apply heavy rubber sweeps on all bay doors.',
      'Contact Foggerwala for industrial-grade warehouse fumigation and monitoring programs.'
    ]
  },
  { 
    id: 5, 
    title: 'Restaurant Pest Control Compliance Guide', 
    cat: 'commercial', 
    date: 'April 5, 2025', 
    img: '/images/restrauntpestcontrol.png', 
    excerpt: 'Stay FSSAI compliant with a robust pest control program. We walk you through everything you need to know.',
    content: [
      'Food safety and hygiene are paramount in the hospitality sector. FSSAI guidelines demand that restaurants have a verified pest control contract to maintain their commercial license.',
      'Follow this compliance checklist:',
      '1. Zero Chemical Spraying Near Food Prep: Use target gel baits behind refrigerators and inside electrical conduits instead of broadcast spraying near prep counters.',
      '2. Install Fly Killers: Position UV light traps away from draft zones but close to entrance points. Make sure glue boards are replaced monthly.',
      '3. Train Staff: Teach servers and cooks to recognize grease trails (rodent indicators) or small droppings and report them immediately.',
      '4. Keep a Pest File: Your health inspector will check your pest file containing CIB certificates, service reports, and chemical MSDS sheets.',
      'Foggerwala offers FSSAI-compliant restaurant packages that include monthly reports and fully documented chemical certificates.'
    ]
  },
  { 
    id: 6, 
    title: 'What is Integrated Pest Management (IPM)?', 
    cat: 'prevention', 
    date: 'March 18, 2025', 
    img: '/images/digitalreports.png', 
    excerpt: 'IPM is the gold standard in modern pest control. Learn how this science-based approach minimizes chemical use.',
    content: [
      'Integrated Pest Management (IPM) is an environmentally sensitive approach to pest control. Instead of spraying toxic chemicals on a schedule, IPM focuses on understanding pest biology and changing physical environments.',
      'The core steps of IPM are:',
      '1. Identification: Technicians identify the exact species of pest to apply targeted solutions rather than broad-spectrum chemicals.',
      '2. Prevention: Structural sealing, sanitation reviews, and water drainage improvements stop pests from entering in the first place.',
      '3. Monitoring: Installing non-toxic traps to assess if active populations exist.',
      '4. Control: Using low-toxicity gel baits, pheromone traps, or mechanical traps first, and resorting to chemical barriers only as a last resort.',
      'By implementing IPM, Foggerwala keeps your home safe for children and pets while achieving 100% eradication.'
    ]
  },
  { 
    id: 7, 
    title: 'Benefits of Termatrac T3i Technology', 
    cat: 'technology', 
    date: 'March 1, 2025', 
    img: '/images/termatract3i.png', 
    excerpt: 'Discover how the Termatrac T3i is revolutionizing termite inspection with non-invasive radar and thermal detection.',
    content: [
      'For decades, finding termites inside walls required drilling holes, breaking drywall, or lifting floorboards. The Termatrac T3i has completely changed this process.',
      'This three-in-one device offers:',
      '1. Termite Detection Radar: Emits microwave signals through concrete, drywall, and wood. If termites are moving behind the wall, the radar detects their activity instantly.',
      '2. Thermal Sensors: Highlights temperature variations caused by termite nests, allowing us to pinpoint the core colony.',
      '3. Moisture Sensors: Locates damp spots inside walls—the exact environment termites need to survive.',
      'Using the Termatrac T3i, Foggerwala provides 100% non-invasive termite scanning with zero structural damage.'
    ]
  },
  { 
    id: 8, 
    title: 'Cockroach Prevention Tips for Kitchens', 
    cat: 'residential', 
    date: 'Feb 12, 2025', 
    img: '/images/cockroachcontrol.png', 
    excerpt: 'Cockroaches are the most common kitchen pest. Use these expert tips to keep your kitchen completely cockroach-free.',
    content: [
      'Kitchens offer the perfect mix of warmth, moisture, and food that cockroaches seek. German cockroaches, in particular, reproduce extremely fast, and a small nest can grow to thousands in weeks.',
      'Keep your kitchen clean with these tips:',
      '1. Stop Nighttime Water Access: Wipe sinks dry before going to bed. Cockroaches can live for weeks without food, but only days without water.',
      '2. Seal Drawer Cracks: Cockroaches hide in narrow cracks. Use silicone caulk to seal gaps under countertops and behind drawers.',
      '3. Keep Food Sealed: Storing grains, flour, and sugar in air-tight glass or hard plastic jars is highly recommended.',
      '4. Wipe Hinges & Seals: Clean food grease off cabinet hinges and refrigerator door gaskets.',
      'If you have an active infestation, commercial spray cans will only scatter the nest. Let Foggerwala apply professional, safe gel baits for complete colony eradication.'
    ]
  },
  { 
    id: 9, 
    title: 'Mosquito Control During the Monsoon Season', 
    cat: 'residential', 
    date: 'Jan 30, 2025', 
    img: '/images/mosquitocontrol.png', 
    excerpt: 'With dengue and malaria on the rise, effective mosquito control is more important than ever for Indian households.',
    content: [
      'Mosquitoes are vectors for dangerous tropical diseases like Dengue, Malaria, and Chikungunya. In India, breeding spikes rapidly after rainfalls as pools of stagnant water collect everywhere.',
      'An effective household protection plan should include:',
      '1. Regular Inspections: Inspect AC trays, cooler basins, and overhead tanks weekly. Empty or treat any stagnant water.',
      '2. Outdoor Fogging: Use thermal fogging around gardens, bushes, and building basements to eliminate adult resting mosquitoes.',
      '3. indoor Mist Treatment: Apply low-toxicity, odorless indoor residual mist on curtains, under furniture, and in dark corners.',
      '4. Larvicidal treatment: Add biological larvicide oil to ponds or drains to kill larvae before they hatch.',
      'Foggerwala provides comprehensive mosquito fogging and misting plans for residential complexes and corporate parks.'
    ]
  },
  { 
    id: 10, 
    title: 'The Complete Home Pest Control Guide', 
    cat: 'residential', 
    date: 'Jan 15, 2025', 
    img: '/images/antcontrol.png', 
    excerpt: 'Your definitive guide to protecting your home from all common pests using professional pest control methods.',
    content: [
      'Maintaining a clean, pest-free home is crucial for the health and safety of your family. Pests like rodents, cockroaches, and bed bugs carry pathogens and can trigger allergies and asthma.',
      'Create a healthy home defense plan:',
      '1. Daily Kitchen Cleaning: Clean counters, wash dishes, and sweep floors daily to eliminate food trails.',
      '2. Declutter Your Storage: Pests love nesting in piles of unused cardboard boxes and papers. Store items in sealed plastic bins instead.',
      '3. Professional Maintenance: Book preventive pest control sprays twice a year to keep pest barriers active.',
      '4. Inspect Deliveries: Check delivery boxes and grocery bags before bringing them inside, as bed bugs and roaches often hitchhike on shipments.',
      'For general pest protection or custom anti-termite barriers, contact the certified experts at Foggerwala.'
    ]
  }
];

const Blogs = () => {
  const [filter, setFilter] = useState('all');
  const [selectedBlog, setSelectedBlog] = useState(null);

  const filteredBlogs = filter === 'all'
    ? blogsData
    : blogsData.filter(b => b.cat === filter);

  // Large featured blog post is the first one
  const featuredBlog = blogsData[0];
  const listBlogs = filteredBlogs.filter(b => b.id !== featuredBlog.id || filter !== 'all');

  return (
    <div className={styles.blogsPage}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {selectedBlog ? 'Article Reader' : 'Insights & Guides'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {selectedBlog ? selectedBlog.title : 'Expert advice, tips, and articles about pest control, prevention, and modern technologies.'}
          </motion.p>
        </div>
      </section>

      {/* Dynamic View: Full Article Reader or Article List */}
      <AnimatePresence mode="wait">
        {selectedBlog ? (
          <motion.section 
            key="reader"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className={styles.articleReaderSection}
          >
            <div className="container">
              {/* Back Button */}
              <button className={styles.backBtn} onClick={() => setSelectedBlog(null)}>
                <ArrowLeft size={16} /> Back to Articles
              </button>

              <div className={styles.articleWrapper}>
                {/* Image */}
                <div className={styles.articleImgWrapper}>
                  <img src={selectedBlog.img} alt={selectedBlog.title} className={styles.articleImg} />
                  <span className={styles.articleCategory}>{selectedBlog.cat.toUpperCase()}</span>
                </div>

                {/* Metadata */}
                <div className={styles.articleMeta}>
                  <div className={styles.metaItem}>
                    <Calendar size={18} />
                    <span>{selectedBlog.date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <User size={18} />
                    <span>By Foggerwala Technical Team</span>
                  </div>
                </div>

                {/* Content */}
                <h2 className={styles.articleTitle}>{selectedBlog.title}</h2>
                <div className={styles.articleBody}>
                  {selectedBlog.content.map((p, idx) => (
                    <p key={idx} className={styles.articleParagraph}>{p}</p>
                  ))}
                </div>

                {/* CTA Box */}
                <div className={styles.articleCta}>
                  <div className={styles.ctaIcon}>
                    <Shield size={32} />
                  </div>
                  <div className={styles.ctaText}>
                    <h4>Concerned about Termites or Pests?</h4>
                    <p>Get a scientific inspection from our certified team using advanced Termatrac T3i technology.</p>
                  </div>
                  <div className={styles.ctaBtns}>
                    <a href="tel:9810629361" className={styles.ctaCallBtn}>
                      <Phone size={16} /> Call Expert
                    </a>
                    <a href="https://wa.me/919990365024" className={styles.ctaWhatsappBtn} target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={16} /> WhatsApp Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        ) : (
          <motion.div 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured Post */}
            {filter === 'all' && (
              <section className={styles.featuredSection}>
                <div className="container">
                  <h2 className={styles.sectionTitle}>Featured Article</h2>
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className={styles.featuredCard}
                  >
                    <div className={styles.featuredImgWrapper}>
                      <img src={featuredBlog.img} alt={featuredBlog.title} className={styles.featuredImg} />
                    </div>
                    <div className={styles.featuredContent}>
                      <span className={styles.categoryBadge}>{featuredBlog.cat.toUpperCase()}</span>
                      <h2>{featuredBlog.title}</h2>
                      <p>{featuredBlog.excerpt}</p>
                      <div className={styles.meta}>
                        <div className={styles.metaItem}>
                          <Calendar size={16} />
                          <span>{featuredBlog.date}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <User size={16} />
                          <span>By Expert Team</span>
                        </div>
                      </div>
                      <button className={styles.readMoreBtn} onClick={() => setSelectedBlog(featuredBlog)}>
                        Read Article <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* Filter and Grid */}
            <section className={styles.blogsGridSection}>
              <div className="container">
                <div className={styles.filtersWrapper}>
                  {['all', 'termites', 'prevention', 'commercial', 'technology', 'residential'].map((category) => (
                    <button
                      key={category}
                      className={`${styles.filterBtn} ${filter === category ? styles.activeFilter : ''}`}
                      onClick={() => setFilter(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Grid */}
                <motion.div layout className={styles.grid}>
                  <AnimatePresence mode="popLayout">
                    {listBlogs.map((blog) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        key={blog.id}
                        className={styles.card}
                      >
                        <div className={styles.cardImgWrapper}>
                          <img src={blog.img} alt={blog.title} className={styles.cardImg} />
                          <span className={styles.cardBadge}>{blog.cat.toUpperCase()}</span>
                        </div>
                        <div className={styles.cardContent}>
                          <div className={styles.cardMeta}>
                            <Calendar size={14} />
                            <span>{blog.date}</span>
                          </div>
                          <h3>{blog.title}</h3>
                          <p>{blog.excerpt}</p>
                          <button className={styles.cardLink} onClick={() => setSelectedBlog(blog)}>
                            Read More <ArrowRight size={16} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blogs;
