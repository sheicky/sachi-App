"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      {/* Navigation Bar */}
      <nav
        style={{
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #1F2937",
        }}
      >
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "1rem 1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link href="/" className="text-2xl font-bold gradient-text">
                Sachi
              </Link>
            </div>
            <div
              style={{ display: "none", alignItems: "center", gap: "2rem" }}
              className="md-nav-links"
            >
              <Link href="/products" className="nav-link">
                Products
              </Link>
              <Link href="/solutions" className="nav-link">
                Solutions
              </Link>
              <Link href="/billing" className="nav-link">
                Billing
              </Link>
              <Link href="/signup" className="btn-primary">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{ paddingTop: "8rem", paddingBottom: "5rem", padding: "0 1rem" }}
      >
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <div className="hero-grid">
            <div>
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                }}
                className="hero-title"
              >
                <span className="gradient-text">AI-Powered</span> Language
                <br />
                Translation & Learning
              </h1>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#9CA3AF",
                  marginBottom: "2rem",
                }}
              >
                Experience seamless communication in your local language. Chat,
                translate, and learn with our advanced AI technology.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <button className="btn-primary">Get Started Free</button>
                <button
                  style={{
                    padding: "0.75rem 1.5rem",
                    border: "1px solid #8B5CF6",
                    borderRadius: "0.5rem",
                    transition: "all 0.2s",
                  }}
                  className="demo-btn"
                >
                  Watch Demo
                </button>
              </div>

              {/* Language Support */}
              <div style={{ marginTop: "3rem" }}>
                <p style={{ color: "#9CA3AF", marginBottom: "1rem" }}>
                  Supported Languages:
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
                >
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      color: "#C4B5FD",
                      fontSize: "0.875rem",
                    }}
                  >
                    Mooré
                  </span>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      color: "#C4B5FD",
                      fontSize: "0.875rem",
                    }}
                  >
                    Français
                  </span>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      color: "#C4B5FD",
                      fontSize: "0.875rem",
                    }}
                  >
                    English
                  </span>
                </div>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
                  borderRadius: "1.5rem",
                  filter: "blur(24px)",
                }}
              ></div>
              <div
                className="card animate-float"
                style={{ position: "relative" }}
              >
                <div
                  style={{
                    aspectRatio: "1/1",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    backgroundImage:
                      "linear-gradient(to bottom right, #8B5CF6, #EC4899)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.25rem",
                      fontWeight: "bold",
                    }}
                  >
                    Sachi AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{ padding: "5rem 1rem", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <span className="gradient-text">Revolutionary</span> Features
          </h2>
          <div className="features-grid">
            {[
              {
                title: "Real-time Chat",
                description:
                  "Chat naturally in your local language with instant AI translation",
              },
              {
                title: "Voice Conversations",
                description:
                  "Speak freely and let our AI handle the translation in real-time",
              },
              {
                title: "Language Learning",
                description:
                  "Interactive lessons tailored to help you master new languages",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card"
                style={{ transition: "transform 0.2s", cursor: "pointer" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "#9CA3AF" }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 768px) {
          .md-nav-links {
            display: flex !important;
          }

          .hero-title {
            font-size: 3.75rem !important;
          }

          .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .demo-btn:hover {
          background-color: rgba(139, 92, 246, 0.1);
        }
      `}</style>
    </main>
  );
}
