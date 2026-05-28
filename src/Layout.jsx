import React, { useState, useEffect } from 'react';
import Home from './Components/Sidemenu/Home.jsx';
import SidemenuList from './Components/Sidemenu/SidemenuList.jsx';
import EducationGeca from './Components/Contents/Education/EducationGeca.jsx';
import EducationGes from './Components/Contents/Education/EducationGes.jsx';
import ExpFreelance from './Components/Contents/Exp/ExpFreelance.jsx';
import ExpFenxify from './Components/Contents/Exp/ExpFenxify.jsx';
import ExpSmallcaseSDE from './Components/Contents/Exp/ExpSmallcaseSDE.jsx';
import ExpSmallcaseIntern from './Components/Contents/Exp/ExpSmallcaseIntern.jsx';
import ProjectPricePredictor from './Components/Contents/Projs/ProjectPricePredictor.jsx';
import ProjectBetterLC from './Components/Contents/Projs/ProjectBetterLC.jsx';
import ProjectTradingViewAPI from './Components/Contents/Projs/ProjectTradingViewAPI.jsx';
import ProjectNewzy from './Components/Contents/Projs/ProjectNewzy.jsx';
import ProjectPortfolio from './Components/Contents/Projs/ProjectPortfolio.jsx';
import Kash from './Components/Kash.jsx';

const experiences = [
  {
    label: 'SDE 1 - Smallcase',
    content: <ExpSmallcaseSDE />
  },
  {
    label: 'Backend Engineer Intern - Smallcase',
    content: <ExpSmallcaseIntern />
  },
  {
    label: 'Freelance Developer - Self Employed',
    content: <ExpFreelance />
  },
  {
    label: 'SDE Intern - Fenxify',
    content: <ExpFenxify />
  }
];

const education = [
  {
    label: 'B.Tech. Computer Science - GECA',
    content: <EducationGeca />
  },
  {
    label: 'HSC - Gurukul English School',
    content: <EducationGes />
  },
];

const skills = [
  { label: 'GoLang' },
  { label: 'Javascript' },
  { label: 'Typescript' },
  { label: 'Python' },
  { label: 'NodeJS' },
  { label: 'ExpressJS' },
  { label: 'REST APIs' },
  { label: 'MongoDB' },
  { label: 'MySQL' },
  { label: 'Kafka' },
  { label: 'Redis' },
  { label: 'CI/CD' },
];

const projects = [
  { label: 'Price Predictor', content: <ProjectPricePredictor /> },
  { label: 'BetterLC', content: <ProjectBetterLC /> },
  { label: 'TradingView-API', content: <ProjectTradingViewAPI /> },
  { label: 'Newzy', content: <ProjectNewzy /> },
  { label: 'Portfolio', content: <ProjectPortfolio /> },
];

// Flatten all items with their keys for easy lookup
const allItems = [
  ...education.map((item, idx) => ({ ...item, key: idx + 100 })),
  ...experiences.map((item, idx) => ({ ...item, key: idx })),
  ...projects.map((item, idx) => ({ ...item, key: idx + 300 })),
];

const Layout = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [maxSkillsScroll, setMaxSkillsScroll] = useState(8);
  const activeItem = allItems.find(item => item.key === activeKey);

  // Helper to close menu on mobile when an item is selected
  const handleSelectItem = (key) => {
    setActiveKey(key);
    if (menuOpen) setMenuOpen(false);
  };

  // Dynamically adjust maxItemsBeforeScroll for skills/tools on mobile
  useEffect(() => {
    function updateMaxSkills() {
      if (window.innerWidth <= 900) {
        // Estimate: each item ~56px tall, header ~60px, some margin
        const vh = window.innerHeight;
        const available = vh - 180; // header + other lists
        const max = Math.max(3, Math.floor(available / 56));
        setMaxSkillsScroll(max);
      } else {
        setMaxSkillsScroll(8);
      }
    }
    updateMaxSkills();
    window.addEventListener('resize', updateMaxSkills);
    return () => window.removeEventListener('resize', updateMaxSkills);
  }, []);

  return (
    <>
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Open menu"
        onClick={() => setMenuOpen(m => !m)}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      <div className={`sidemenuContainer${menuOpen ? ' open' : ''}`}>
        <Home />
        <SidemenuList
          data={education}
          legend="Education"
          activeKey={activeKey}
          setActiveKey={handleSelectItem}
          getItemKey={(_, idx) => idx + 100}
        />
        <SidemenuList
          data={experiences}
          legend="Experience"
          activeKey={activeKey}
          setActiveKey={handleSelectItem}
          getItemKey={(_, idx) => idx}
        />
        <SidemenuList
          data={projects}
          legend="Projects"
          activeKey={activeKey}
          setActiveKey={handleSelectItem}
          getItemKey={(_, idx) => idx + 300}
          maxItemsBeforeScroll={7}
        />
        <SidemenuList
          data={skills}
          legend="Skills & Tools"
          activeKey={activeKey}
          setActiveKey={handleSelectItem}
          getItemKey={(_, idx) => idx + 200}
          className="scrollableSkillsList"
          flexSkills={true}
          nonInteractive={true}
        />
      </div>
      <div className="contentContainer">
        <fieldset className="contentBox">
          <legend>Content</legend>
          {activeItem ? activeItem.content : <Kash />}
        </fieldset>
      </div>
    </>
  );
};

export default Layout;
