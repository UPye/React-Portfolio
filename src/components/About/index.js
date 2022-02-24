import React from "react";
import headShot from './img/head-shot.jpg';

const About = () => (
    <div className='p-3 About'>
        <div>
            <img src={headShot} className='head-shot' alt='' />
            <h3 className='pl-1 pt-2 pb-4'> Urika Pye </h3>
            <h1> All About Me </h1>
        </div>
        <div className="body">
       <p>
          My name is Urika Pye, and I am currently an Account Resolution Specialist II at Wells Fargo. 
          I worked my way from a lower-level agent to a supervisor in less than 5 months, in 
          my previous position. Thus, this demonstrates my determination for quick advancement 
          through application of knowledge gathered along the way. I was the newest supervisor 
          to the project, and I produced the highest scoring team when being audited. I was able 
          to produce multiple high scoring agents, along with a high team average. I am also a 
          proud owner of a fur baby. He is my joy and my drive in everything I do. 
      </p>
      <p>
          I am looking to show-off my newfound knowledge from my newly acquired certification 
          from the University of Central Florida in Software Development. This portfolio will 
          demonstrate a wide array of languages learned in this certification program. I am 
          sure the React component is obvious at this point, and I am looking further to diving
          deeper into the abundance of knowledge the software developing have to offer.
      </p>
      <p>
          In my personal time, I enjoy bowling, going to see a movie ( of pretty much any genre ), 
          kayaking, and most of all traveling. I have visited ( along with my fur baby ), Tennessee, 
          South Carolina, North Carolina, Mississippi, Arkansas, Texas ( without my fur baby ), 
          Georgia, Alabama, and Florida. I have also visited, Virginia, Pennsylvania, Louisiana, 
          and Missouri. We have many more places we would like to go see, including internationally.
      </p>
        </div>
    </div>
);

export default About;
