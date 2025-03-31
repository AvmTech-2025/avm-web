import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-100 text-gray-900 p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg">Empowering Industries with Innovation</p>
      </div>

      {/* About Content */}
      <div className="max-w-5xl mx-auto mt-12 space-y-8">
        {/* Who We Are */}
        <motion.div 
          className="p-6 bg-white rounded-lg shadow-md"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p className="text-gray-700">
            We specialize in **Industrial Automation, Software Development, AI, and IoT**. 
            Our expertise lies in **PLC, HMI, SCADA, Robotics, and Embedded Systems**, driving 
            innovation across industries.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <Eye className="text-blue-600 w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-gray-600">To be a leader in industrial innovation and automation.</p>
            </div>
          </motion.div>
          <motion.div 
            className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <Target className="text-indigo-600 w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-gray-600">Delivering high-quality, cost-effective automation solutions.</p>
            </div>
          </motion.div>
        </div>

        {/* Our Expertise */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div className="p-4 bg-gray-200 rounded-md text-center" whileHover={{ scale: 1.05 }}>
              <Briefcase className="text-blue-600 mx-auto w-10 h-10" />
              <h3 className="mt-2 font-medium">Industrial Automation</h3>
            </motion.div>
            <motion.div className="p-4 bg-gray-200 rounded-md text-center" whileHover={{ scale: 1.05 }}>
              <Briefcase className="text-indigo-600 mx-auto w-10 h-10" />
              <h3 className="mt-2 font-medium">Software Development</h3>
            </motion.div>
            <motion.div className="p-4 bg-gray-200 rounded-md text-center" whileHover={{ scale: 1.05 }}>
              <Briefcase className="text-blue-600 mx-auto w-10 h-10" />
              <h3 className="mt-2 font-medium">Embedded Systems</h3>
            </motion.div>
            <motion.div className="p-4 bg-gray-200 rounded-md text-center" whileHover={{ scale: 1.05 }}>
              <Briefcase className="text-indigo-600 mx-auto w-10 h-10" />
              <h3 className="mt-2 font-medium">Electrical Engineering</h3>
            </motion.div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <img src="https://via.placeholder.com/150" className="w-24 h-24 mx-auto rounded-full" alt="Team" />
              <h3 className="mt-2 font-medium">John Doe</h3>
              <p className="text-sm text-gray-600">CEO & Founder</p>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <img src="https://via.placeholder.com/150" className="w-24 h-24 mx-auto rounded-full" alt="Team" />
              <h3 className="mt-2 font-medium">Jane Smith</h3>
              <p className="text-sm text-gray-600">Lead Engineer</p>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <img src="https://via.placeholder.com/150" className="w-24 h-24 mx-auto rounded-full" alt="Team" />
              <h3 className="mt-2 font-medium">Michael Brown</h3>
              <p className="text-sm text-gray-600">Software Architect</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
