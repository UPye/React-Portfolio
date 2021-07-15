import React from "react";
import headShot from './img/head-shot.jpg';

const About = () => (
    <div className='p-3'>
        <img src={headShot} className='head-shot' alt='' />
        <h3 className='pl-1 pt-2 pb-4'> Urika Pye </h3>
        <h1> All About Me </h1>
        <p>
            My name is Urika Pye, and I am currently a supervisor at a bank. I work remotely, 
            and I enjoy it. I moved from the lowest tier, tier 1, and became a team lead, or 
            tier 3, in less than 5 months of my original employment date. I say this to say,
            when I am determined, I make things happen, and I would like to make things happen
            using my newfound knowledge of software developing.
        </p>
        <p> 
            I am studying to become a software developer at UCF, and hopefully, I will be able
            to inform you that I am officially certifed. When I first started learning to code
            it was fun. When I built my first HTML and CSS website, I knew I was a coder from
            then on. Little did I know what Javascript and so many more frameworks had to offer.
            Once learning the basics of Javascript, however, the rest of the frameworks seemed 
            less intimidating. Even though it was EXTREMELY hard at first, I fell hard and fastly
            in love with it because I can always learn something new or become better at something.
            It's literally a way to not ever be stagnant in life.
        </p>
        <p>
            Enough about my reasoning for falling in love with coding. I am not married, nor do
            I have kids; thus, I am free to continue my learning anytime without any conflicts.
            I will spend the next 2-3 months developing my knowledge of coding further, but in
            the meantime, if you have a project you want me to complete or an offer for a developer 
            position, please navigate to my contact form, so we may discuss the matter further.
        </p>
    </div>
);

export default About;