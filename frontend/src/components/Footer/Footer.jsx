import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";

import "./footer.scss";

const Footer = () => {
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

  return (
    <>
      <div className="footerConatiner">
        <div className="footerPara1">Made with ❤️ by Jatin Verma</div>
        {/* <div className="contactIcons"> */}
        <motion.div
          className="footerContactIcons"
          variant={scaleVariant}
          whileInView={scaleVariant.whileInView}
        >
          {socialImg.map((socialImg, index) => (
            <motion.div
              whileHover={{ scale: 1.14 }}
              transition={{ duration: 0.25, type: "tween" }}
              className="socialLogoFooter"
              key={`socialLogoFooter-${index}`}
            >
              <a href={socialImg.imgHref} target="__blank">
                <img
                  className="socialLogoImgFooter"
                  src={socialImg.imgLink}
                  alt="logoImg"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Footer;
