import React from "react";

import "./about.scss";

const codingProLink = [
    {
        platform: 'Codeforces',
        link: 'https://codeforces.com/profile/JV1410',
    },
    {
        platform: 'Codechef',
        link: 'https://www.codechef.com/users/jv1410',
    },
    {
        platform: 'GeeksForGeeks',
        link: 'https://auth.geeksforgeeks.org/user/jatinverma14/',
    },
    {
        platform: 'Hackerrank',
        link: 'https://www.hackerrank.com/jv_jatinverma_jv?hr_r=1',
    },
]

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutHeading">About Me</div>
        <div className="aboutMepara">
          My name is Jatin Verma. I am from Lucknow, Uttar Pradesh. I completed
          my high school and senior secondary school from New public college in
          Lucknow.
          <br />
          Currently I am a 3rd year Computer Science student at Indian Institute
          of Information technology Kalyani. My domains are Web development and
          Competitive programming. I am a full stack web developer and currently
          exploring Machine learning and Blockchain.
          <br />
          I am a 4 star coder on Codechef with max rating 1907 and Pupil on Codeforces. I got rank 1 in
          March Long One 2022, Division 4 contest on Codechef. I have good
          knowledge of Data structures and Algorithms.
          <br />
          I was the mentee in the Microsoft intern engage 2022 program. In this,
          I successfully submitted the project (face recognition application)
          and got an interview call, through which I got 2023 SWE internship at
          Microsoft. <br />
          I was the member of Extended core team of GDSC @IIIT Kalyani. I am
          also into Open source contribution. I was the top contributor from my
          college in Hacktoberfest 2021. I was in the list of top 30
          contributors in Winter of Code 2.0, IIIT Kalyani.
          <br />
          I also like sports and music. In sports, I play cricket and badminton.
          I has been the Secretary of Sports in my college and had organised
          several sports events.
          <br />
            <div className="codingProfileLinks">
                <h2>Coding Profiles: </h2>
                {
                    codingProLink.map((data, index)=>(
                        <div className="profile">
                            <a href={data.link} target="__blank">{data.platform}</a>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
