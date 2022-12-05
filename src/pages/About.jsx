import React from 'react';
import companyLogo from './dlaugi.jpeg';

const About = () => {
    return (
        <div>
            <h1>
                Šis mājaslapa ir no 25. vidusskolas 9c klases skolnieku Ričarda Stasušolonoka un Daira Priednieka.
            </h1>
            <img src={companyLogo} alt="Logo" width={300} />
        </div>

    );

};

export default About;
