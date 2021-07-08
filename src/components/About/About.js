import React from 'react';
import { SideBySide } from '../../components';
import styles from './About.styles';

const About = () => {
  return (
    <section css={styles}>
      <div className='section-header'>
        <h3 className='section-title'>Our Story</h3>
        <p className='section-description'>Overview description text blah blah lorem ipsum yada yada.</p>
      </div>
      <hr />
      <SideBySide
        position="image-left"
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
        position="image-right"
        title={"2021"}
        text={"Bonbon cheesecake cake tootsie roll chocolate.Cupcake carrot cake marzipan. Chocolate gingerbread lemon drops sweet roll oat cake brownie cake pastry bonbon. Dragée pudding caramels apple pie chocolate. Cake gingerbread chupa chups chocolate caramels bonbon tart apple pie sugar plum. Brownie carrot cake halvah lollipop jujubes sweet roll pie cotton candy jujubes."}
        image={
          {
            src: "./example-1.jpeg",
            alt: "Example Image"
          }
        }
      />
    </section>
  );
};

export default About;
