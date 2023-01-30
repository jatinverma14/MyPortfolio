import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./header.scss";

const scaleVariant = {
    whileInView:{
        opacity:[0, 1],
        scale:[0, 1],
        transition:{
            duration:0.5,
            ease: 'easeInOut'
        }
    }
}

const socialImg = [
    images.githubLogo,
    images.instagramLogo,
    images.linkedinLogo,
    images.twitterLogo,
]

const Header = () => {
  return (
    <>
      <div id="homePage" className="headerContainer">
        <div className="portion0">
            <motion.div className="headerDetails" whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
              <div className="leftPortion">
                <div className="myNameAndWork">
                  <span className="hiEmoji">👋</span>
                  <div className="myName">
                    <p className="pText pTextName">Hi, I am</p>
                    <h1 className="hText">Jatin Verma</h1>
                  </div>
                </div>
                  <div className="myWork">
                    {/* <p className="pText pTextWork">Aspiring Software Developer</p> */}
                    {/* <p className="pText pTextWork">Full stack Web Developer</p> */}
                    <p className="pText pTextWork">Competitive Programmer</p>
                  </div>
                </div>
            </motion.div>

            <motion.div className="myImageMotion" whileInView={{opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }}>
                <img className="myImage" src={images.myTempImg} alt="" />
                <motion.img className="profile_background" whileInView={{scale: [0, 1]}} transition={{duration:0.5, ease: 'easeInOut'}} src={images.circle} alt="profile_backgroung" />
            </motion.div>
        </div>
        <motion.div className="socialAccounts" variant={scaleVariant} whileInView={scaleVariant.whileInView}>
            {
                socialImg.map((imageName, index) => (
                    <div className="socialLogo" key={`socialLogo-${index}`}>
                        <img className="socialLogoImg" src={imageName} alt="logoImg" />
                    </div>
                ))
            }
        </motion.div>
      </div>
    </>
  );
};

export default Header;
