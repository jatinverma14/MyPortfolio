import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {Tooltip as ReactTooltip} from 'react-tooltip';

import { urlFor, client } from '../../client';
import './skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
    <div className="skillsContainer" id="Skills">
      <h2 className="skillsHeadText">Skills & Experiences</h2>
      <div className="app_skillsContainer">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item appFlex"
              key={skill.name+index}
            >
              <div
                className="appFlex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="pText">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="exp">
          {experiences.map((experience, index) => (
            <motion.div
              className="exp-item"
              key={experience.year+index}
            >
              <div className="exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="exp-works">
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name+index}
                    >
                      <h4>{work.name}</h4>
                      <p className="pText">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Skills;
