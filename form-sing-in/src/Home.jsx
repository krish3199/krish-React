import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage-wrapper">
      {/* Header */}
      <header className="site-header">
        <div className="logo">MyWebsite</div>
        <nav className="main-nav">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <Link to='/Admin'>
          <button className="admin-btn">Admin</button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="home-main">
        <section className="hero-section">
          <h1>Welcome to My Website</h1>
          <p>
            Modern, responsive React homepage with cool header and sticky footer.
            Explore, learn and enjoy clean design!
          </p>
          <button className="cta-btn">Get Started</button>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div>© 2025 MyWebsite. All rights reserved.</div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
