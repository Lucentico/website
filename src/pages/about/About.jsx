import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import TechStackMarquee from "../../components/marquee/TechStack";
import transition from "../../transition";
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // Delay children animations
        staggerChildren: 0.2, // Stagger children animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="about inner-page"
    >
      <div className="about-top">
        <motion.h1 variants={childVariants} className="fade">
          About
        </motion.h1>
        <div className="shift-up">
          <motion.h4 variants={childVariants}>Get to know us</motion.h4>
          <motion.h2 variants={childVariants} className="red">
            About Us
          </motion.h2>
        </div>
      </div>
      <div className="about-bottom">
        <motion.p variants={childVariants}>
          At Lucentico, we believe technology and creativity go hand in hand.
          We're a software consultancy, digital marketing agency, and web
          development partner dedicated to helping businesses shine in the
          digital age. From building robust web applications to crafting
          tailored marketing strategies, our team blends technical expertise
          with innovative thinking to deliver solutions that actually work for
          you. Whether it's streamlining operations with smart software,
          creating a powerful online presence, or growing your brand through
          data-driven campaigns, we're here to make it happen. What sets us
          apart is our commitment to clarity, collaboration, and long-term
          growth. We don't just deliver projects—we build partnerships. With
          Lucentico by your side, you gain not just a service provider, but a
          team that genuinely cares about your success. Let's build something
          remarkable together.
        </motion.p>
        <motion.div variants={childVariants} className="stack">
          <TechStackMarquee />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default transition(About);
