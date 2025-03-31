import { Link } from "react-router-dom";
import { Wrench, Laptop, Bolt, Cpu, ShieldCheck } from "lucide-react";
import "../index.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>AVM Tech Solutions</h1>
          <p>Your Trusted Partner for Industrial Automation & Engineering</p>
          {/* <Link to="/services">
            <button className="btn-primary">Explore Our Services</button>
          </Link> */}
        </div>
      </div>
      {/* promises */}
      <div className="promises-section">
      <div className="promises-container">
      {[    { title: "Promises", text: "We commit to delivering innovative and reliable solutions that exceed expectations." },
            { title: "Warranty", text: " Our products come with a robust warranty to ensure peace of mind and long-term performance." },
            { title: "Support", text: "We provide dedicated customer support to assist you at every stage of your journey." },
            { title: "Quality", text: "Excellence in craftsmanship and technology ensures superior quality in every product we offer." }]
            .map((reason, index) => (
              <div className="promises-box" key={index}>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            ))}
        </div>
        </div>
      {/* About Us Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          At <strong>AVM Tech Solutions</strong>, we specialize in
          <strong> Industrial Automation, Electrical Engineering, Software Development, and Embedded Systems</strong>.
          Our team of professionals delivers <strong>high-quality, efficient, and customized solutions</strong> for industrial needs.
        </p>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-container">
          {[{
            icon: <Wrench className="service-icon" />, title: "Automation & Industrial Projects",
            items: ["PLC & HMI Projects", "SCADA", "Real-time Monitoring", "Data Logging", "Motion Control", "Drives"]
          }, {
            icon: <Laptop className="service-icon" />, title: "Software Development",
            items: ["Web Applications", "Data Management Systems", "ERP Software", "E-commerce Websites", "Android App Development", "Data Analytics & AI"]
          }, {
            icon: <Bolt className="service-icon" />, title: "Electrical Engineering",
            items: ["Power Systems", "Renewable Energy", "Automation"]
          }, {
            icon: <Cpu className="service-icon" />, title: "Embedded Systems",
            items: ["Microcontroller-based Projects", "IoT Projects", "Robotics", "3D Printer and 3D Printed Parts"]
          }, {
            icon: <ShieldCheck className="service-icon" />, title: "Panel Testing & Repair",
            items: ["LT & HT Panel Testing", "Automation Switchgear Testing", "Repairing of Automation Electrical Panels"]
          }].map((service, index) => (
            <div className="service-box" key={index}>
              {service.icon}
              <div className="service-content">
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <h2>Why Choose Us?</h2>
        <div className="why-choose-container">
          {[{ title: "Industry Experts", text: "We have years of hands-on experience." },
            { title: "Reliable Solutions", text: "We deliver high-quality, long-lasting solutions." },
            { title: "On-Time Delivery", text: "We meet deadlines without compromising quality." }]
            .map((reason, index) => (
              <div className="why-box" key={index}>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Get in Touch</h2>
        <p>Reach out today to discuss your project requirements.</p>
        <Link to="/contact">
          <button className="btn-secondary">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
