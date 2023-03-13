import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./about.scss";
import { client } from "../../client";

const codingProLink = [
  {
    platform: "Codeforces",
    link: "https://codeforces.com/profile/JV1410",
    imgLink: images.codeforces,
    altTag: "Codeforces",
  },
  {
    platform: "Codechef",
    link: "https://www.codechef.com/users/jv1410",
    imgLink: images.codechef,
    altTag: "Codechef",
  },
  {
    platform: "GeeksForGeeks",
    link: "https://auth.geeksforgeeks.org/user/jatinverma14/",
    imgLink: images.gfg,
    altTag: "GFG",
  },
  {
    platform: "Hackerrank",
    link: "https://www.hackerrank.com/jv_jatinverma_jv?hr_r=1",
    imgLink: images.hackerrank,
    altTag: "Hackerrank",
  },
];

const About = () => {
  const [Aboutt, setAboutt] = useState(null);
  
  useEffect(() => {
    client
    .fetch(`*[_type == "about"]`)
    .then((data) => {
      setAboutt(data[0].description);
    })
    .catch(console.error);
  }, []);

  return (
    <>
      <div className="aboutContainer" id="About">
        <div className="aboutHeading">About Me</div>
        <div className="aboutMepara">
          {
            ((Aboutt != null)?Aboutt.map((data, index) => (
              <div key={index}> {data.children[0].text} </div>
            )): '')
          }
          <div className="codingProfileLinks">
            <h2>CodingProfiles: </h2>
            <div className="codingProf">
              {codingProLink.map((data, index) => (
                <div className="profile" key={index}>
                  <a href={data.link} target="__blank">
                    {data.platform}
                  </a>
                </div>
              ))}
            </div>
            <motion.div
              className="download"
              whileHover={{ scale: 1.14 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <a href={images.resume} download>
                Download Resume
              </a>
            </motion.div>
          </div>
          <div className="download downloadRes">
            <a href={images.resume} download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
