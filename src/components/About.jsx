import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 0.2,
          speed: 450,
        }}
        className='bg-[#1a1538] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center '>
          {title}
        </h3>
      </div >
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-white`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#ccc] text-[17px]  max-w-3xl leading-[30px] '
      >
        I'm a passionate front-end developer with a strong command of essential web technologies such as HTML, CSS, and JavaScript. I've also delved into the world of dynamic user interfaces with frameworks like React.js, creating seamless and interactive web experiences. My creative flair extends to the realm of 3D graphics with Three.js, adding an extra dimension to my projects. And when it comes to crafting clean, responsive designs, I'm well-versed in the art of using Tailwind CSS and Bootstrap. With a keen eye for aesthetics and a dedication to delivering user-friendly interfaces, I'm excited to bring my skills to the table and collaborate on innovative web projects.
      </motion.p>

      <div className='mt-20 grid  gap-10 about-cards'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");