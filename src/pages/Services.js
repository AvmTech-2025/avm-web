import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Services.css"; // Ensure you style this properly

const servicesData = [
  {
    title: "Automation & Industrial Projects",
    description:
      "We design and integrate intelligent automation solutions for industries to maximize efficiency and productivity. Our expertise in PLC, SCADA, and motion control ensures seamless operations.",
    image: "/images/automation.jpg",
  },
  {
    title: "Software Development",
    description:
      "We develop robust web applications, ERP systems, and AI-powered solutions to enhance industrial and business workflows. Our software solutions streamline operations for improved efficiency.",
    image: "/images/software.jpg",
  },
  {
    title: "Electrical Engineering",
    description:
      "From power systems to renewable energy solutions, we provide cutting-edge electrical engineering services designed to ensure reliability and sustainability.",
    image: "/images/electrical.jpg",
  },
  {
    title: "Embedded Systems",
    description:
      "We specialize in IoT, robotics, and microcontroller-based solutions, bringing automation and connectivity to industrial applications.",
    image: "/images/embedded.jpg",
  },
  {
    title: "Panel Testing & Repair",
    description:
      "We offer comprehensive testing and repair services for LT & HT panels, automation switchgear, and industrial electrical panels, ensuring safety and compliance.",
    image: "/images/panel-testing.jpg",
  },
];

const ServiceSection = ({ title, description, image, isReversed }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`service-section ${isReversed ? "reverse" : ""} ${inView ? "fade-in" : "fade-out"}`}
    >
      <div className="service-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="services-page">
      {/* Header Section */}
      <div className="services-header">
        <h1>Our Expertise</h1>
        <p>Innovative solutions to transform your industry. Discover how our services can enhance your business efficiency and success.</p>
      </div>

      {/* Services Sections */}
      {servicesData.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          isReversed={index % 2 !== 0} // Alternating layout
        />
      ))}

      {/* Call to Action */}
      <div className="services-cta">
        <h2>Partner with Us</h2>
        <p>Let's discuss how we can help you achieve your automation and technology goals. Contact our experts today.</p>
        <button className="cta-button">Get in Touch</button>
      </div>
    </div>
  );
};

export default Services;
