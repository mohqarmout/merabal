import React from 'react';
import { Navbar } from 'components/utils';

import styles from './about.module.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className={styles.heading} id='about'>
          About Us
        </h1>
        <div className={styles.content}>
          <p className={styles.description}>
            We are as a team have founded after a big search that figure of
            women who had assuming is increasing , we asked our self how we make
            our Technological techniques help these women.
            
            After talking with a lot of victims and women founders we got a
            clear idea with a positive impact .
          </p>
         
          <p>
            We decided to make a website to work as a middle part between
            victims and volunteers All the operation will start when one of the
            victims put her problem in our problem form And put her information
            such as (age ,phone ,problem….) .
          </p>
          <p>
            fter that her information will be putted in air table and then put
            problems without her personal information to make her feel trust
            with us . then we will send her information to the one who we think
            that can help her .
          </p>
          <p>
            our vision is to make women feel trust and secure finally we hope
            our project can help solving this problem more and more
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
