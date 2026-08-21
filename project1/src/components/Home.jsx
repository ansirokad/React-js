function Home() {
  return (
    <main>
      <section class="hero" id="home">
        <div class="hero-content">
          <div class="tag">✨ Next Generation Experience</div>

          <h1>
            Build Something
            <span>Beautiful.</span>
          </h1>

          <p>
            Create modern digital experiences with a clean, interactive and
            responsive design that makes your brand stand out.
          </p>

          <div class="buttons">
            <a href="#features" class="btn primary">
              Explore Now →
            </a>
            <a href="#about" class="btn secondary">
              Learn More
            </a>
          </div>
        </div>

        <div class="hero-graphic">
          <div class="circle"></div>
          <div class="orb"></div>
        </div>
      </section>

      <section class="features" id="features">
        <div class="section-title">
          <h2>Powerful Features</h2>
          <p>Everything you need to create an amazing website.</p>
        </div>

        <div class="cards">
          <div class="card">
            <div class="icon">⚡</div>
            <h3>Fast Performance</h3>
            <p>
              Optimized design and lightweight code for a smooth and fast
              browsing experience.
            </p>
          </div>

          <div class="card">
            <div class="icon">🎨</div>
            <h3>Modern Design</h3>
            <p>
              Beautiful gradients, animations and glass effects give your
              website a premium look.
            </p>
          </div>

          <div class="card">
            <div class="icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>
              Looks perfect on desktop, tablet and mobile devices automatically.
            </p>
          </div>
        </div>
      </section>

      <section class="cta" id="about">
        <div class="cta-box">
          <h2>Ready to Start?</h2>

          <p>Turn your idea into a beautiful digital experience.</p>

          <a href="#contact" class="btn primary">
            Let's Build It →
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
