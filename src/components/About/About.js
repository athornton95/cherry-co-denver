import React from 'react';
import { SideBySide } from '../../components';
import styles from './About.styles';

const About = () => {
  return (
    <section css={styles} id="about">
      <div className='section-header'>
        <h3 className='title'>Our Story</h3>
        {/* <p className='description'>Our story begins overview description text blah blah lorem ipsum yada yada.</p> */}
      </div>
      <SideBySide
        position="image-right"
        image={
          {
            src: "./cc-1929.webp",
            alt: "Grandmother and Grandfather Lehnert, 1929"
          }
        }
        title={"1929"}
        text={"It all began at a small fruit stand outside of Lake Geneva, Wisconsin. Great Grandma Katherine quickly builds a reputation for her pie and cider attracting visitors from all over the midwest. The pies are known for their flaky crust with homemade, honest ingredients."}
      />
      <SideBySide
        position="image-left"
        title={"1950s"}
        text={"Lehnerts bid farewell to the midwest and set up camp in Loveland, CO, where the region is known for their tart cherries. The Colorado Cherry Company is born and the family continues the tradition of pie and cherry cider."}
        image={
          {
            src: "./cc-1950.webp",
            alt: "Colorado Cherry Co, 1950"
          }
        }
      />
      <SideBySide
        position="image-right"
        title={"2021"}
        text={"Lehnert family opens shops by Estes Park, making the Cherry Co a go to stop for pie and cider on your way to Rocky Mountain National Park. 4th generation moves to Denver and opens on Tennyson St, March 2021 hoping to share all the goodness from Great Grandma’s recipes."}
        image={
          {
            src: "./cc-2021.webp",
            alt: "Roo and Elias Lehnert, 2021"
          }
        }
      />
    </section>
  );
};

export default About;
