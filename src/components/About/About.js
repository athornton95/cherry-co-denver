import React from 'react';
import { SideBySide } from '../../components';
import styles from './About.styles';

const About = () => {
  return (
    <section css={styles} id="about">
      <div className='section-header'>
        <h3 className='title'>Colorado Cherry Co.</h3>
        <h3 className='sub-title'>Pie + Provisions</h3>
      </div>
      <hr/>
      <div className='description'>
        <p>Our story begins overview description text blah blah lorem ipsum yada yada.</p>
      </div>
      <SideBySide
        position="image-right"
        image={
          {
            src: "./cc-1929.jpeg",
            alt: "Grandmother and Grandfather Lehnert, 1929"
          }
        }
        title={"1929"}
        text={"Great Grandma Katherine opens up fruit stand famous for pie and cherry cider outside of Lake Geneva Wisconsin."}
      />
      <SideBySide
        position="image-left"
        title={"1950s"}
        text={"Lehnert family moves to northern Colorado where region is known for tart cherries. Continue tradition of pie and cherry cider."}
        image={
          {
            src: "./cc-1950.jpeg",
            alt: "Colorado Cherry Co, 1950"
          }
        }
      />
      <SideBySide
        position="image-right"
        title={"2021"}
        text={"3rd generation Lehnerts open shops by Estes Park and 4th generation opens in Denver on Tennyson St, March 2021."}
        image={
          {
            src: "./cc-2021.jpeg",
            alt: "Roo and Elias Lehnert, 2021"
          }
        }
      />
    </section>
  );
};

export default About;
