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
    images.twitterLogox
]

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <motion.div className="headerDetails" whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
          <div className="leftPortion">
            <div className="myNameAndWork">
              <span>👋</span>
              <div className="myName">
                <p className="pText pTextName">Hi, I am</p>
                <h1 className="hText">Jatin Verma</h1>
              </div>
            </div>
              <div className="myWork">
                <p className="pText pTextWork">Aspiring Software Developer</p>
                <p className="pText pTextWork">Web Developer</p>
                <p className="pText pTextWork">Competitive Programmer</p>
              </div>
            </div>
        </motion.div>

        <motion.div className="myImage" whileInView={{opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }}>
            <img src={images.myTempImg} alt="" />
        </motion.div>

        <motion.div className="socialAccounts" variant={scaleVariant} whileInView={scaleVariant.whileInView}>
            {
                socialImg.map((imageName, index) => {
                    <div style={{backgroundColor:'red', padding:200}} className="socialLogo" key={`socialLogo-${index}`}>
                        <img src={imageName} alt="img" />
                    </div>
                })
            }
        </motion.div>
      </div>
    </>
  );
};

export default Header;
