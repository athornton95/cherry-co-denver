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
            src: "./example-1.jpeg",
            alt: "Example Image"
          }
        }
        title={"1920"}
        text={"Gummi bears ice cream cake powder toffee icing tiramisu gummi bears oat cake. Lollipop toffee candy gummies chupa chups. Topping biscuit pudding caramels topping topping. Pie tart danish bonbon. Chocolate bar cupcake cake tart cookie apple pie. Marzipan gummi bears cotton candy cake soufflé."}
      />
      <SideBySide
        position="image-left"
        title={"2021"}
        text={"Bonbon cheesecake cake tootsie roll chocolate.Cupcake carrot cake marzipan. Chocolate gingerbread lemon drops sweet roll oat cake brownie cake pastry bonbon. Dragée pudding caramels apple pie chocolate. Cake gingerbread chupa chups chocolate caramels bonbon tart apple pie sugar plum. Brownie carrot cake halvah lollipop jujubes sweet roll pie cotton candy jujubes."}
        image={
          {
            src: "./example-2.jpeg",
            alt: "Example Image"
          }
        }
      />
      <SideBySide
        position="image-right"
        title={"2021"}
        text={"Bonbon cheesecake cake tootsie roll chocolate.Cupcake carrot cake marzipan. Chocolate gingerbread lemon drops sweet roll oat cake brownie cake pastry bonbon. Dragée pudding caramels apple pie chocolate. Cake gingerbread chupa chups chocolate caramels bonbon tart apple pie sugar plum. Brownie carrot cake halvah lollipop jujubes sweet roll pie cotton candy jujubes."}
        image={
          {
            src: "./example-2.jpeg",
            alt: "Example Image"
          }
        }
      />
    </section>
  );
};

export default About;
