/*
 * ZeroPing Tools — Home Page
 * Design: "Dead Signal" Industrial Minimal
 * - Space Grotesk headings, IBM Plex Mono labels
 * - Brand palette: #0E1411 bg, #F4F1EA text, #7EC99A accent
 * - Left-anchored asymmetric layout, staggered scroll reveals
 */

import { useEffect, useRef } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const TOOLS = [
  // NETWORK
  {
    name: "Subnet Calculator",
    desc: "IPv4, IPv6, VLSM, and containment checks computed locally",
    category: "NETWORK",
  },
  {
    name: "Port Lookup",
    desc: "Curated TCP/UDP service reference",
    category: "NETWORK",
  },
  {
    name: "MAC Vendor Lookup",
    desc: "Full offline IEEE OUI database bundled in the app",
    category: "NETWORK",
  },
  {
    name: "Router Credentials",
    desc: "Default factory login reference for common devices",
    category: "NETWORK",
  },
  // SECURITY
  {
    name: "Security Vault",
    desc: "MD5/SHA hashing, password generator with entropy meter, Diceware passphrases, and TOTP with hardware-backed at-rest encryption and password-encrypted backup",
    category: "SECURITY",
  },
  {
    name: "JWT Decoder",
    desc: "Inspect headers and payloads without sending tokens to a third-party service",
    category: "SECURITY",
  },
  {
    name: "Random Bytes",
    desc: "Crypto-grade random output in hex, base64, or decimal",
    category: "SECURITY",
  },
  // ENCODING & CODES
  {
    name: "QR Generator",
    desc: "Wi-Fi, vCard, URL, and plain text payloads, generated on-device",
    category: "ENCODING & CODES",
  },
  {
    name: "Encoders",
    desc: "Base64, URL/percent, and HTML entity encoding and decoding",
    category: "ENCODING & CODES",
  },
  {
    name: "UUID Generator",
    desc: "v4 random and v7 time-ordered",
    category: "ENCODING & CODES",
  },
  {
    name: "Regex Tester",
    desc: "Live pattern matching with match highlighting",
    category: "ENCODING & CODES",
  },
  {
    name: "Colour Converter",
    desc: "HEX, RGB, HSL, and OKLCH",
    category: "ENCODING & CODES",
  },
  // TIME & DATA
  {
    name: "Unix Timestamp",
    desc: "Epoch-to-human and human-to-epoch, both directions",
    category: "TIME & DATA",
  },
  {
    name: "Cron Explainer",
    desc: "5-field and 6-field expressions, named months and weekdays, ranges, lists, and steps",
    category: "TIME & DATA",
  },
  // REFERENCE & UTILITIES
  {
    name: "IT Data Converter",
    desc: "Storage, bandwidth, time, and number base conversion",
    category: "REFERENCE & UTILITIES",
  },
  {
    name: "Cheat Sheets",
    desc: "12 offline quick-reference cards: Bash, Docker, Git, JavaScript, Linux, Markdown, Python, Regex, SSH, SQL, tmux, Vim",
    category: "REFERENCE & UTILITIES",
  },
];

const CHEAT_SHEETS = [
  "Bash",
  "Docker",
  "Git",
  "JavaScript",
  "Linux",
  "Markdown",
  "Python",
  "Regex",
  "SSH",
  "SQL",
  "tmux",
  "Vim",
];

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.barricadedlabs.zeropingtools";

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
            setTimeout(() => {
              el.classList.add("visible");
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Google Play Badge ──────────────────────────────────────────────────────

function PlayBadge() {
  return (
    <img
      src="/google-play-badge.png"
      alt="Get it on Google Play"
      style={{
        height: "60px",
        width: "auto",
      }}
    />
  );
}

// ─── Components ──────────────────────────────────────────────────────────────

function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid rgba(244,241,234,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(14,20,17,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "0.625rem",
          paddingTop: "1.125rem",
          paddingBottom: "1.125rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1.0625rem",
            color: "#F4F1EA",
            letterSpacing: "-0.01em",
          }}
        >
          ZeroPing Tools
        </span>
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6875rem",
            color: "rgba(244,241,234,0.4)",
            letterSpacing: "0.04em",
          }}
        >
          by Barricaded Labs
        </span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderBottom: "1px solid rgba(244,241,234,0.08)",
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "760px" }}>
          {/* Section label */}
          <div className="reveal section-label" style={{ marginBottom: "1.5rem" }}>
            Android App
          </div>

          {/* App name */}
          <h1
            className="reveal"
            data-delay="60"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#F4F1EA",
              marginBottom: "1.75rem",
            }}
          >
            ZeroPing
            <br />
            Tools
            <span className="cursor-blink" style={{ marginLeft: "0.15em" }} />
          </h1>

          {/* Tagline — punchier version */}
          <p
            className="reveal"
            data-delay="120"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1rem, 2.2vw, 1.1875rem)",
              lineHeight: 1.65,
              color: "#F4F1EA",
              marginBottom: "1rem",
              maxWidth: "560px",
            }}
          >
            When the network is down, your tools should still work.
          </p>

          {/* Subtitle */}
          <p
            className="reveal"
            data-delay="140"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
              lineHeight: 1.65,
              color: "rgba(244,241,234,0.55)",
              marginBottom: "2.5rem",
              maxWidth: "560px",
            }}
          >
            16 offline IT tools for developers and sysadmins. No internet. No accounts. No telemetry. No ads. Everything runs on your device.
          </p>

          {/* CTA */}
          <div className="reveal" data-delay="180">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get ZeroPing Tools on Google Play for $2.99 AUD"
              style={{
                display: "inline-block",
                transition: "opacity 150ms ease-out, transform 120ms ease-out",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
              onMouseDown={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(0.97)";
              }}
              onMouseUp={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
              }}
            >
              <PlayBadge />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function NoInternetSection() {
  return (
    <section
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderBottom: "1px solid rgba(244,241,234,0.08)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="reveal section-label" style={{ marginBottom: "2rem" }}>
          01 / Privacy
        </div>

        {/* Oversized statement */}
        <div
          className="reveal"
          data-delay="60"
          style={{ maxWidth: "900px" }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 600,
              fontSize: "clamp(0.9375rem, 2.4vw, 1.3125rem)",
              lineHeight: 1.5,
              color: "#7EC99A",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            No internet permission.
          </p>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.875rem, 1.8vw, 1.0625rem)",
              lineHeight: 1.7,
              color: "rgba(244,241,234,0.55)",
              maxWidth: "520px",
            }}
          >
            Not restricted. Not sandboxed. Not rate-limited.{" "}
            <strong style={{ color: "rgba(244,241,234,0.85)", fontWeight: 600 }}>
              Completely absent from the manifest.
            </strong>{" "}
            The app cannot make network requests because the permission was never
            declared. Your data never leaves the device, not because we promise
            it, but because the OS enforces it.
          </p>
        </div>

        {/* Three pillars */}
        <div
          className="reveal"
          data-delay="120"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0",
            marginTop: "3.5rem",
            borderTop: "1px solid rgba(244,241,234,0.08)",
          }}
        >
          {[
            {
              label: "No internet permission",
              detail: "Absent from AndroidManifest.xml",
            },
            {
              label: "No accounts",
              detail: "Nothing to sign up for. Nothing to log in to.",
            },
            {
              label: "No telemetry",
              detail: "Zero analytics, zero crash reporting, zero tracking.",
            },
            {
              label: "No ads",
              detail: "No advertisers. No promoted content. Ever.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "1.75rem 1.5rem",
                borderRight: i < 3 ? "1px solid rgba(244,241,234,0.08)" : "none",
                borderBottom: "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                  fontSize: "0.8125rem",
                  color: "#F4F1EA",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.8125rem",
                  color: "rgba(244,241,234,0.45)",
                  lineHeight: 1.55,
                }}
              >
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsGrid() {
  const categories = Array.from(new Set(TOOLS.map((t) => t.category)));

  return (
    <section
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderBottom: "1px solid rgba(244,241,234,0.08)",
      }}
    >
      <div className="container">
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <div>
            <div className="reveal section-label" style={{ marginBottom: "0.75rem" }}>
              02 / Tools
            </div>
            <h2
              className="reveal"
              data-delay="40"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                letterSpacing: "-0.025em",
                color: "#F4F1EA",
                lineHeight: 1.1,
              }}
            >
              16 Tools. All Offline.
            </h2>
          </div>
          <div
            className="reveal"
            data-delay="80"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.75rem",
              color: "rgba(244,241,234,0.35)",
              letterSpacing: "0.04em",
            }}
          >
            {TOOLS.length} / {TOOLS.length} available
          </div>
        </div>

        {/* Grid grouped by category */}
        {categories.map((category, catIndex) => {
          const categoryTools = TOOLS.filter((t) => t.category === category);
          const startIndex = TOOLS.findIndex((t) => t.category === category);

          return (
            <div key={category} style={{ marginBottom: "3rem" }}>
              <div
                className="reveal"
                data-delay={`${catIndex * 80}`}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  color: "#7EC99A",
                  letterSpacing: "0.08em",
                  marginBottom: "1.25rem",
                  opacity: 0.85,
                }}
              >
                {category}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "1px",
                  background: "rgba(244,241,234,0.07)",
                }}
              >
                {categoryTools.map((tool, i) => {
                  const globalIndex = startIndex + i;
                  return (
                    <div
                      key={tool.name}
                      className="reveal tool-card"
                      data-delay={`${Math.min(globalIndex * 25 + 100, 400)}`}
                      style={{ background: "#0E1411" }}
                    >
                      <div
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontWeight: 500,
                          fontSize: "0.8125rem",
                          color: "#7EC99A",
                          marginBottom: "0.5rem",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {String(globalIndex + 1).padStart(2, "0")}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.9375rem",
                          color: "#F4F1EA",
                          marginBottom: "0.5rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {tool.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.8125rem",
                          color: "rgba(244,241,234,0.5)",
                          lineHeight: 1.6,
                        }}
                      >
                        {tool.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CheatSheets() {
  return (
    <section
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderBottom: "1px solid rgba(244,241,234,0.08)",
      }}
    >
      <div className="container">
        <div className="reveal section-label" style={{ marginBottom: "0.75rem" }}>
          03 / Cheat Sheets
        </div>
        <h2
          className="reveal"
          data-delay="40"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
            letterSpacing: "-0.025em",
            color: "#F4F1EA",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          12 Offline Cheat Sheets
        </h2>
        <p
          className="reveal"
          data-delay="80"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
            color: "rgba(244,241,234,0.55)",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
            maxWidth: "480px",
          }}
        >
          Quick-reference cards for the tools you use every day. No browser tab
          required. Available instantly, even when the network is not.
        </p>

        {/* Badge grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {CHEAT_SHEETS.map((sheet, i) => (
            <span
              key={sheet}
              className="reveal cheat-badge"
              data-delay={`${i * 35}`}
            >
              {sheet}
            </span>
          ))}
        </div>

        {/* Inline stat */}
        <div
          className="reveal"
          data-delay="500"
          style={{
            marginTop: "2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              width: "2px",
              height: "2.5rem",
              background: "#7EC99A",
              opacity: 0.6,
              flexShrink: 0,
            }}
          />
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.8125rem",
              color: "rgba(244,241,234,0.45)",
              lineHeight: 1.55,
            }}
          >
            All cheat sheets are bundled with the app.
            <br />
            No download, no sync, no expiry.
          </p>
        </div>
      </div>
    </section>
  );
}

function DownloadCTA() {
  return (
    <section
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderBottom: "1px solid rgba(244,241,234,0.08)",
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "600px" }}>
          <div className="reveal section-label" style={{ marginBottom: "1.25rem" }}>
            Get the App
          </div>
          <h2
            className="reveal"
            data-delay="40"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              letterSpacing: "-0.03em",
              color: "#F4F1EA",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
          <p
            className="reveal"
            data-delay="80"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
              color: "rgba(244,241,234,0.55)",
              lineHeight: 1.65,
              marginBottom: "2rem",
            }}
          >
            $2.99 AUD on the Google Play Store. No in-app purchases. No premium tier.
            No subscription. Just tools.
          </p>
          <div className="reveal" data-delay="140">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get ZeroPing Tools on Google Play for $2.99 AUD"
              style={{
                display: "inline-block",
                transition: "opacity 150ms ease-out, transform 120ms ease-out",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
              onMouseDown={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(0.97)";
              }}
              onMouseUp={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
              }}
            >
              <PlayBadge />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.75rem",
            color: "rgba(244,241,234,0.35)",
            letterSpacing: "0.02em",
          }}
        >
          Built by Barricaded Labs
        </span>

        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:support@barricadedlabs.com"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.75rem",
              color: "rgba(244,241,234,0.35)",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "color 150ms ease-out",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#7EC99A")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(244,241,234,0.35)")
            }
          >
            support@barricadedlabs.com
          </a>
          <a
            href="https://thebarricadedman.github.io/barricadedlabs-privacy/privacy-policy.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.75rem",
              color: "rgba(244,241,234,0.35)",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "color 150ms ease-out",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#7EC99A")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(244,241,234,0.35)")
            }
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  useScrollReveal();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0E1411",
        color: "#F4F1EA",
      }}
    >
      <Header />
      <main>
        <Hero />
        <NoInternetSection />
        <ToolsGrid />
        <CheatSheets />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
