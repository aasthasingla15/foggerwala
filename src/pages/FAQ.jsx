import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqData = [
  { cat:'General', q:'What is Foggerwala Private Limited?', a:'Foggerwala Private Limited is a premium pest control company based in Ghaziabad, serving clients across PAN India. We specialize in advanced termite detection using Termatrac T3i technology, along with a full range of pest management services for residential, commercial, and industrial properties.' },
  { cat:'General', q:'Which areas do you serve?', a:'We serve clients across PAN India, with a primary focus on the Delhi-NCR region including Ghaziabad, Noida, Delhi, Gurugram, and Faridabad. Contact us for service availability in your area.' },
  { cat:'General', q:'Are your chemicals safe for children and pets?', a:'Yes. We use WHO and CIB-approved chemicals that are carefully selected for safety. Our technicians follow strict application protocols to ensure the safety of your family and pets. We also offer eco-friendly treatment options.' },
  { cat:'General', q:'Do you provide warranties on treatments?', a:'Yes, most of our treatments come with service warranties ranging from 1 to 3-5 years depending on the type of treatment. Our termite control services come with a 3-5 year warranty with annual inspection visits.' },
  { cat:'General', q:'How long does a pest control treatment take?', a:'Treatment duration depends on the property size and pest type. A standard residential treatment takes 2-4 hours. Termite treatment for a large property can take a full day. We will provide an accurate time estimate during your inspection.' },
  { cat:'Termite Control', q:'What is the Termatrac T3i?', a:'The Termatrac T3i is the world\'s most advanced termite detection device, combining radar motion detection, thermal imaging, and moisture sensing. It can detect termite activity through walls and floors without any drilling or damage to your property.' },
  { cat:'Termite Control', q:'Is termite inspection invasive or destructive?', a:'Not at all. Our Termatrac T3i-based inspection is 100% non-invasive. There is no drilling, no breaking of walls, and no damage whatsoever. We simply scan the suspected areas and provide you with a detailed digital report.' },
  { cat:'Termite Control', q:'How often should I get termite inspections?', a:'We recommend annual termite inspections for all properties, especially those in high-risk areas or with previous termite history. Properties under our warranty program receive scheduled annual inspection visits as part of the service.' },
  { cat:'Termite Control', q:'What are the signs of termite infestation?', a:'Common signs include mud tubes on walls or foundations, hollow-sounding wood, discarded wings near windows, bubbling or uneven paint, and frass (termite droppings). If you notice any of these, contact us immediately for a professional inspection.' },
  { cat:'Services', q:'Do you offer residential pest control?', a:'Yes, we provide a full range of residential pest control services including termite control, cockroach control, rodent control, mosquito control, bed bug treatment, and more. We offer both one-time and annual maintenance programs.' },
  { cat:'Services', q:'Do you serve commercial and industrial properties?', a:'Absolutely. We are specialists in commercial and industrial pest management. We serve hotels, restaurants, hospitals, schools, warehouses, factories, food processing plants, pharmaceutical facilities, and more.' },
  { cat:'Services', q:'What is Integrated Pest Management (IPM)?', a:'IPM is a science-based approach to pest control that combines multiple methods including biological, mechanical, and chemical controls to manage pests in the most effective and environmentally responsible way. We follow IPM principles in all our service programs.' },
  { cat:'Pricing', q:'How do I get a quote for pest control services?', a:'Getting a quote is simple. Contact us via phone (9810629361), WhatsApp (9990365024), or our online contact form. We will arrange a free site inspection and provide you with a detailed, no-obligation quote.' },
  { cat:'Pricing', q:'Do you offer annual maintenance contracts?', a:'Yes, we offer Annual Maintenance Contracts (AMC) for both residential and commercial properties. AMCs provide cost savings, priority service, and scheduled inspection visits throughout the year. Contact us for AMC pricing.' }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Group FAQ items by category
  const categories = ['General', 'Termite Control', 'Services', 'Pricing'];

  return (
    <div className={styles.faqPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Find answers to common questions about our services, technologies, safety standards, and pricing.
          </motion.p>
        </div>
      </section>

      {/* Accordion */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqContent}>
            {categories.map((cat, catIdx) => (
              <div key={cat} className={styles.categoryBlock}>
                <h2 className={styles.categoryTitle}>{cat}</h2>
                <div className={styles.accordion}>
                  {faqData
                    .filter((item) => item.cat === cat)
                    .map((item, idx) => {
                      const globalIdx = `${catIdx}-${idx}`;
                      const isOpen = openIndex === globalIdx;

                      return (
                        <div 
                          key={idx} 
                          className={`${styles.faqCard} ${isOpen ? styles.openCard : ''}`}
                        >
                          <button 
                            className={styles.questionBtn}
                            onClick={() => toggleFAQ(globalIdx)}
                          >
                            <h3>{item.q}</h3>
                            <ChevronDown className={`${styles.arrow} ${isOpen ? styles.arrowRotate : ''}`} size={20} />
                          </button>
                          
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className={styles.answerWrapper}
                              >
                                <div className={styles.answerContent}>
                                  <p>{item.a}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
