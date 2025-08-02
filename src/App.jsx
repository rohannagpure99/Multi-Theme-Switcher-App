import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

// Create Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "theme1");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Header component
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className="navbar">
      <div className="navbar-logo"><b>ECO-VISION</b></div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
  );
};

// Sidebar component
const Sidebar = () => (
  <aside className="sidebar">
  
  </aside>
);

// Footer component
const Footer = () => (
  <footer className="footer">
    
    <p>&copy; 2025 EcoVision. All rights reserved.</p>
  </footer>
);

// Environmental Card component (text only)
const SustainabilityCard = ({ title, description }) => (
  <div className="card-vertical">
    <h3>{title}</h3>
    <p>{description}</p>
    {/* <button className="learn-more-btn">Learn More</button> */}
    <button type="learn-more-btn" className="btn btn-primary">Learn More</button>
  </div>
);

// Home page with sustainability cards
const Home = () => (
  <div className="layout">
    <Sidebar />
    <div className="home-centered">
      <h1>Welcome to EcoVision</h1>
      <p>Together we can make the world greener and more sustainable.</p>
      <div className="card-list-horizontal">
        <SustainabilityCard 
          title="Renewable Energy" 
          description="Welcome to our platform dedicated to promoting renewable energy and environmental sustainability. 
          As the world faces the challenges of climate change and resource depletion, clean energy sources like solar, 
          wind, hydro, and geothermal offer a path toward a greener future. Our mission is to raise awareness, 
          inspire action, and support the transition to sustainable energy solutions. By harnessing the power of nature, 
          we can reduce carbon emissions, protect ecosystems, and build resilient communities. Explore our site to learn 
          how renewable energy is transforming the world—and how you can be a part of the change." 
        />
        <SustainabilityCard 
          title="Recycling" 
          description="Recycling is a key step toward achieving environmental sustainability. It helps reduce the amount of waste 
          sent to landfills, conserves natural resources, and lowers pollution levels. By recycling materials like paper, plastic, 
          glass, and metal, we reduce the need for raw material extraction and energy-intensive manufacturing processes. 
          This not only protects ecosystems but also cuts down on greenhouse gas emissions. Recycling supports a circular 
          economy where products are reused and repurposed, minimizing environmental impact. Through simple actions like 
          sorting waste and choosing recyclable products, we can all contribute to a cleaner, healthier planet for future generations." 
        />
        <SustainabilityCard 
          title="Tree Plantation" 
          description="Tree plantation plays a vital role in promoting environmental sustainability. 
          Trees absorb carbon dioxide, release oxygen, and help reduce the impacts of climate change. 
          They improve air quality, prevent soil erosion, and support biodiversity by providing habitats for various species. 
          Planting trees also helps regulate temperature and conserve water, making our surroundings healthier and more resilient. 
          Tree plantation is a simple yet powerful way for individuals and communities to restore nature and combat environmental 
          degradation. By planting and protecting trees, we take a meaningful step toward a greener, cleaner, and more sustainable 
          future for generations to come." 
        />
      </div>
    </div>
  </div>
);

// App component
const App = () => (
  <ThemeProvider>
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </ThemeProvider>
);

export default App;
