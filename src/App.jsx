// src/App.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const testimonials = [
    { quote: "AI Articles: Human-like articles that don’t suck.", name: "Priya R., Content Lead" },
    { quote: "AI Blog Automation: Automate your blog from months to a complete year.", name: "Ramesh K., SEO Manager" },
    { quote: "AI Keyword Research & ICP: Uncover high-ranking keywords your competitors are using.", name: "Anita S., Founder" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animated counter for words/month stat
  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter < 50000) {
        counter += 500;
        setWordCount(counter);
      } else clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      {/* Floating gradient blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* Navbar */}
      <header className="navbar">
        <div className="logo-section">
          <div className="logo-icon">A</div>
          <div className="logo-text">
            <div className="logo-title">Abun</div>
            <div className="logo-subtitle">AI Content Writer</div>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <button className="cta-button">Start Free</button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="main">
        <section className="hero-section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-text"
          >
            <h1 className="hero-title">
              The All-In-One Toolkit for SEO & Growth Marketing
            </h1>
            <p className="hero-subtitle">
              Used by 5,325 Marketers, Founders, SEO Experts to Drive Traffic,
              Generate Leads, Rank Faster & Achieve Solid Business Growth
            </p>
            <div className="hero-buttons">
              <a className="btn-primary" href="#">
                Claim Your Free Account ➔
              </a>
            </div>
            <div className="hero-stats">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="stat-card"
              >
                <div className="stat-label">Words / month</div>
                <div className="stat-value">{wordCount.toLocaleString()}+</div>
              </motion.div>
            </div>
          </motion.div>

          <div className="hero-mockup">
            <PhoneMockup />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="features-section">
          <div className="section-header">
            <h2>Top Features</h2>
            <p>Powerful tools to automate SEO and content creation.</p>
          </div>
          <div className="features-grid">
            <Feature title="AI Articles" desc="Human-like articles, fully SEO-optimized." icon="📝" />
            <Feature title="AI Blog Automation" desc="Automate your blog for months." icon="🤖" />
            <Feature title="AI Keyword Research" desc="Discover high-ranking keywords." icon="🔑" />
            <Feature title="AI Auto Schema" desc="Boost technical SEO automatically." icon="⚡" />
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="how-section">
          <h3>How Abun Works — 3 Simple Steps</h3>
          <div className="process-grid">
            <ProcessStep step={1} title="Enter topic or keyword" text="Tell Abun your topic or paste keywords." />
            <ProcessStep step={2} title="Select tone & length" text="Choose tone, length & SEO focus." />
            <ProcessStep step={3} title="Generate & refine" text="Generate a draft, edit, and export." />
          </div>
        </section>

        {/* Product Preview */}
        <ProductPreview />

        {/* Testimonials */}
        <section id="testimonials" className="testimonials-section">
          <h3>What our users say</h3>
          <div className="testimonials-grid">
            <Testimonial {...testimonials[testimonialIndex]} />
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="pricing-section">
          <h3>Pricing that scales with you</h3>
          <div className="pricing-grid">
            <PricingCard tier="Starter" price={29} bullets={["10 AI Articles", "1000 Keyword Research Credits", "2 Sites"]} />
            <PricingCard tier="Growth" price={39} bullets={["100 AI Articles", "6000 Keyword Research Credits", "15 Sites"]} highlight />
            <PricingCard tier="Growth Max" price={74} bullets={["500 AI Articles", "20000 Keyword Research Credits", "Unlimited Sites"]} />
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h3>Start scaling your traffic today</h3>
          <p>Claim your free account and see instant results.</p>
          <a className="btn-primary" href="#">
            Start Free
          </a>
        </section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} Abun — All rights reserved</div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* -----------------------
   Components
----------------------- */
function PhoneMockup() {
  return (
    <div className="phone-mockup">
      <div className="phone-container">
        <div className="phone-screen">
          <div className="phone-line short" />
          <div className="phone-line medium" />
          <div className="phone-line long" />
        </div>
      </div>
    </div>
  );
}

function Feature({ title, desc, icon }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="feature-card">
      <div className="feature-icon">{icon}</div>
      <div className="feature-text">
        <div className="feature-title">{title}</div>
        <div className="feature-desc">{desc}</div>
      </div>
    </motion.div>
  );
}

function ProcessStep({ step, title, text }) {
  return (
    <div className="process-step">
      <div className="process-step-number">{step}</div>
      <div className="process-step-text">
        <div className="process-step-title">{title}</div>
        <div className="process-step-desc">{text}</div>
      </div>
    </div>
  );
}

function Testimonial({ quote, name }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="testimonial-card">
      <div className="testimonial-quote">“{quote}”</div>
      <div className="testimonial-name">{name}</div>
    </motion.div>
  );
}

function PricingCard({ tier, price, bullets, highlight }) {
  return (
    <div className={`pricing-card ${highlight ? "highlight" : ""}`}>
      <div className="pricing-header">
        <div className="pricing-tier">{tier}</div>
        <div className="pricing-price">{`$${price}`}</div>
      </div>
      <ul className="pricing-bullets">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
      <button className={`pricing-button ${highlight ? "highlight-btn" : ""}`}>Choose</button>
    </div>
  );
}

function ProductPreview() {
  return (
    <section className="product-preview">
      <h3>Product Preview</h3>
      <div className="preview-grid">
        <div className="preview-card hover-card">
          <h4>Generated Article Preview</h4>
          <p>Headings, introduction, and SEO meta suggestions — see how Abun structures content.</p>
        </div>
        <div className="seo-card">
          <div className="seo-score-label">SEO Score: <strong>82 / 100</strong></div>
        </div>
      </div>
    </section>
  );
}
