import React from 'react';
import Banner from './Banner';
import MySkills from './MySkills';
import Projects from './Projects';
import AboutMe from './AboutMe';

const Home = () => {
    return (
       <>
        <Banner></Banner>
        <MySkills></MySkills>
        <Projects></Projects>
        <AboutMe></AboutMe>
       </>
    );
};

export default Home;