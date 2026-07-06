import styles from './SectionDivider.module.css';

const SectionDivider = ({ type = 'wave', fill = '#F5FAFF', flip = false }) => {
  const getSvgPath = () => {
    if (type === 'wave') {
      return (
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.divider} ${flip ? styles.flip : ''}`}>
          <path d="M0,32L80,48C160,64,320,96,480,96C640,96,800,64,960,48C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill={fill} />
        </svg>
      );
    } else if (type === 'slant') {
      return (
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.divider} ${flip ? styles.flip : ''}`}>
          <path d="M0,0 L1440,100 L1440,100 L0,100 Z" fill={fill} />
        </svg>
      );
    } else if (type === 'curve') {
      return (
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.divider} ${flip ? styles.flip : ''}`}>
          <path d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z" fill={fill} />
        </svg>
      );
    }
    return null;
  };

  return <div className={styles.dividerWrapper}>{getSvgPath()}</div>;
};

export default SectionDivider;
