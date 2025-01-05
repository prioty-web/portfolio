import React from 'react';
import Banner from './Banner';
import MySkills from './MySkills';
import Projects from './Projects';
import AboutMe from './AboutMe';

const Home = () => {
    return (
        <>
            <div id='banner'>
                <Banner></Banner>
            </div>
            <div id='skills'>
                <MySkills></MySkills>
            </div>
            <div id="projects">
                <Projects />
            </div>
            <AboutMe></AboutMe>
        </>
    );
};

export default Home;