import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id='about' className={styles.skills}>
      <div className='main-container'>
        <h2>Tools I Work With 🔨</h2>
        <p className='description'>
          These are the tech tools I&apos;ve been learning to better my skills
          day by day. Learning never stops...{' '}
        </p>
        <div className={styles.tools}>
          <div className='tool-1'>
            {/* icon */}
            <h3>🛠️ HTML/CSS</h3>
          </div>
          <div className='tool-2'>
            {/* icon */}
            <h3>🛠️ JavaScript</h3>
          </div>
          <div className='tool-3'>
            {/* icon */}
            <h3>🛠️ TypeScript</h3>
          </div>
          <div className='tool-4'>
            {/* icon */}
            <h3>🛠️ Reactjs</h3>
          </div>
          <div className='tool-5'>
            {/* icon */}
            <h3>🛠️ Nextjs</h3>
          </div>
          <div className='tool-6'>
            {/* icon */}
            <h3>🛠️ TailwindCSS</h3>
          </div>
          <div className='tool-7'>
            {/* icon */}
            <h3>🛠️ Bootstrap</h3>
          </div>
          <div className='tool-8'>
            {/* icon */}
            <h3>🛠️ Git</h3>
          </div>
          <div className='tool-9'>
            {/* icon */}
            <h3>🛠️ Framer Motion</h3>
          </div>
          <div className='tool-10'>
            {/* icon */}
            <h3>🛠️ Material UI/MUI</h3>
          </div>
          <div className='tool-11'>
            {/* icon */}
            <h3>🛠️ Figma</h3>
          </div>
          <div className='tool-12'>
            {/* icon */}
            <h3>🛠️ Sass</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
