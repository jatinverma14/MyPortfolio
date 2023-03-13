import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./header.scss";
import { urlFor, client } from "../../client";

const scaleVariant = {
  whileInView: {
    opacity: [0, 1],
    scale: [0, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const socialImg = [
  {
    imgLink: images.linkedinLogo,
    imgHref: "https://www.linkedin.com/in/jatin-verma-2792ba200/",
  },
  {
    imgLink: images.githubLogo,
    imgHref: "https://github.com/jatinverma14",
  },
  {
    imgLink: images.instagramLogo,
    imgHref: "https://www.instagram.com/jatinverma1410/",
  },
  {
    imgLink: images.twitterLogo,
    imgHref: "https://twitter.com/jatinve16352670",
  },
];

const Header = () => {

  const [Image, setImage] = useState([]);

  useEffect(() => {
    const query = '*[_type == "myImage"]';
    client
      .fetch(query)
      .then((data) => setImage(data))
      .catch(console.error());
  }, []);

  return (
    <>
      <div id="Home" className="headerContainer">
        <div className="portion0">
          <motion.div
            className="headerDetails"
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div className="leftPortion">
              <div className="myNameAndWork">
                <motion.div
                  className="hiEmoji"
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}
                >
                  👋
                </motion.div>
                <div className="myName">
                  <p className="pText pTextName">Hi, I am</p>
                  <h1 className="hText">Jatin Verma</h1>
                </div>
              </div>
              <div className="myWork">
                <p className="pText pTextWork">Competitive Programmer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="myImageMotion"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            {Image.map((data, index) => (
                <img key={index} className="myImage" src={urlFor(data.imgurl)} alt="" />
            ))}
            <motion.img
              className="profile_background"
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src={images.circle}
              alt="profile_backgroung"
            />
          </motion.div>
        </div>
        <motion.div
          className="socialAccounts"
          variant={scaleVariant}
          whileInView={scaleVariant.whileInView}
        >
          {socialImg.map((socialImg, index) => (
            <motion.div
              whileHover={{ scale: 1.14 }}
              transition={{ duration: 0.25, type: "tween" }}
              className="socialLogo"
              key={`socialLogo-${index}`}
            >
              <a href={socialImg.imgHref} target="__blank">
                <img
                  className="socialLogoImg"
                  src={socialImg.imgLink}
                  alt="logoImg"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="socialAccountMobile"
        variant={scaleVariant}
        whileInView={scaleVariant.whileInView}
      >
        {socialImg.map((socialImg, index) => (
          <motion.div
            whileHover={{ scale: 1.14 }}
            transition={{ duration: 0.25, type: "tween" }}
            className="socialLogo"
            key={`socialLogo-${index}`}
          >
            <a href={socialImg.imgHref} target="__blank">
              <img
                className="socialLogoImg"
                src={socialImg.imgLink}
                alt="logoImg"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Header;
