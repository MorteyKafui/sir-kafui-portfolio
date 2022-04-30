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
            <h3>🛠️ Html/CSS</h3>
            <p>
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML.
            </p>
          </div>
          <div className='tool-2'>
            {/* icon */}
            <h3>🛠️ JavaScript</h3>
            <p>
              JavaScript, often abbreviated JS, is a programming language that
              is one of the core technologies of the World Wide Web, alongside
              HTML and CSS.
            </p>
          </div>
          <div className='tool-3'>
            {/* icon */}
            <h3>🛠️ Reactjs</h3>
            <p>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components.
            </p>
          </div>
          <div className='tool-4'>
            {/* icon */}
            <h3>🛠️ Nextjs</h3>
            <p>
              Next.js is an open-source web development framework built on top
              of Node.js enabling React based web applications functionalities
              such as server-side rendering and generating static websites.
            </p>
          </div>
          <div className='tool-5'>
            {/* icon */}
            <h3>🛠️ TailwindCSS</h3>
            <p>
              Tailwind CSS works by scanning all of your HTML files, JavaScript
              components, and any other templates for class names, generating
              the corresponding styles and then writing them to a static CSS
              file.
            </p>
          </div>
          <div className='tool-6'>
            {/* icon */}
            <h3>🛠️ Framer Motion</h3>
            <p>A production-ready motion library for React.</p>
          </div>
          <div className='tool-7'>
            {/* icon */}
            <h3>🛠️ Git</h3>
            <p>
              Git is a free and open source distributed version control system
              designed to handle everything from small to very large projects
              with speed and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
