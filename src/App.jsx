import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { BookOpen, Users, Star, ArrowRight, PlayCircle } from 'lucide-react';
import * as THREE from 'three';
import './index.css';

import logo from './assets/logo.png';
import heroImg from './assets/hero.png';
import courseImg from './assets/course.png';

// 3D Abstract Learning Geometry
function AbstractGeometry() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshPhysicalMaterial 
          color="#f97316" 
          emissive="#f97316"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
        />
      </mesh>
    </Float>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img src={logo} alt="HMSOFT EDU" onError={(e) => {
            e.target.style.display='none';
          }} />
          HMSOFT EDU
        </div>
        
        <nav className="nav-links">
          <a href="#">Courses</a>
          <a href="#">Programs</a>
          <a href="#">Enterprise</a>
          <a href="#">Resources</a>
        </nav>
        
        <div className="nav-actions">
          <button className="login-btn">Log in</button>
          <button className="btn-primary">Join for Free</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unlock Your Potential with <span>World-Class</span> Learning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Master the skills of tomorrow. Learn directly from industry leaders in Technology, Business, and Creative Arts.
          </motion.p>
          <motion.div
            style={{ display: 'flex', gap: '1rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="btn-primary">Explore Courses</button>
            <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'white', color: 'var(--text-primary)', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
              <PlayCircle size={20} color="var(--brand-indigo)" /> Watch Video
            </button>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={heroImg} alt="Students learning" />
          <div className="hero-3d-overlay">
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={2} />
              <Environment preset="city" />
              <PresentationControls global rotation={[0, 0, 0]} polar={[-0.4, 0.2]} azimuth={[-1, 0.75]} config={{ mass: 2, tension: 400 }}>
                <AbstractGeometry />
              </PresentationControls>
            </Canvas>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        <div className="stat-item">
          <h3>2.5M+</h3>
          <p>Active Learners</p>
        </div>
        <div className="stat-item">
          <h3>4.8/5</h3>
          <p>Average Rating</p>
        </div>
        <div className="stat-item">
          <h3>8,000+</h3>
          <p>Premium Courses</p>
        </div>
        <div className="stat-item">
          <h3>500+</h3>
          <p>Expert Instructors</p>
        </div>
      </div>
    </section>
  );
}

function FeaturedCourses() {
  const courses = [
    {
      category: "Technology",
      title: "Advanced AI & Machine Learning Masterclass",
      image: courseImg,
      rating: "4.9",
      students: "12,400",
      price: "$149"
    },
    {
      category: "Design",
      title: "UI/UX Design: From Wireframe to Prototype",
      image: courseImg, // Reuse image as placeholder for demo
      rating: "4.8",
      students: "8,200",
      price: "$89"
    },
    {
      category: "Business",
      title: "Product Management for Enterprise Startups",
      image: courseImg,
      rating: "4.9",
      students: "5,100",
      price: "$129"
    }
  ];

  return (
    <section className="courses">
      <div className="section-header">
        <h2>Accelerate Your Career</h2>
        <p>Choose from over 8,000 top-rated courses covering the most in-demand skills.</p>
      </div>
      
      <div className="course-grid">
        {courses.map((course, idx) => (
          <motion.div 
            className="course-card" 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              <div className="course-category">{course.category}</div>
              <h3 className="course-title">{course.title}</h3>
              <div className="course-meta">
                <div style={{ display: 'flex', gap: '15px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b' }}><Star size={16} fill="#f59e0b" /> {course.rating}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Users size={16} /> {course.students}</span>
                </div>
                <div className="course-price">{course.price}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <button className="btn-secondary" style={{ backgroundColor: 'transparent', border: '2px solid var(--brand-indigo)', color: 'var(--brand-indigo)', boxShadow: 'none' }}>
          View All Courses <ArrowRight size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
        </button>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <FeaturedCourses />
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h2 style={{ fontFamily: 'Poppins', color: 'white' }}>HMSOFT EDU</h2>
            <p>Empowering global learners with the highest quality education and technology.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Data Science</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Business</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 HMSOFT Education Platform. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
