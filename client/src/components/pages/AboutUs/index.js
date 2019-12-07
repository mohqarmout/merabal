import React from 'react';
import { Navbar } from 'components/utils';

import styles from './about.module.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className={styles.heading} id="about">
          About Us
        </h1>
        <div className={styles.content}>
          <p className={styles.description}>
            Since 2012, the number of empty buildings across England has been
            steadily rising. Long-term vacant homes now account for £53.6
            billion of property in England.
          </p>
          <p>
            Coastal towns and cities have suffered the biggest rise in long-term
            empty homes. In many coastal towns, the number of empty homes has
            doubled in 2018 alone, hitting 939 in Portsmouth, 726 in Hartlepool
            and 518 in Eastbourne.
          </p>
          <p>
            There are now more than 216,000 long-term empty homes in England,
            equivalent to 72 per cent of the government’s annual new homes
            target. At the same time, there are more than a million families on
            waiting lists for local authority housing and homelessness it at its
            highest level for over a decade. While councils blame poor quality
            housing and overseas landlords, there is no clear evidence about why
            the number of empty homes in England is rising. Who Owns Your
            Neighbourhood is an independent website built by the Community
            Interest Company Far Nearer. We wanted to make it easier to report
            empty and at risk buildings in your community.
          </p>
          <p>
            So we made Who Owns Your Neighbourhood, a way to report, view and
            investigate empty and at risk buildings. Once you have reported a
            building, this information is made available to community groups who
            might be interested in investigating the property or buying it for
            the community.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
