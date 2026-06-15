import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Explore The World With Travel Explorer</h1>

          <p>
            Discover breathtaking destinations,
            hidden gems, and unforgettable adventures.
          </p>

          <a href="/destinations" className="hero-btn">
            Explore Destinations
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>🌍 100+ Destinations</h3>
          <p>Explore beautiful places around the globe.</p>
        </div>

        <div className="feature-card">
          <h3>✈️ Easy Planning</h3>
          <p>Find the perfect destination quickly.</p>
        </div>

        <div className="feature-card">
          <h3>⭐ Top Rated Places</h3>
          <p>Discover destinations loved by travelers.</p>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="popular-section">
        <h2>Popular Destinations</h2>

        <div className="popular-grid">
          <div className="popular-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Maldives"
            />
            <h3>Maldives</h3>
          </div>

          <div className="popular-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
              alt="Paris"
            />
            <h3>Paris</h3>
          </div>

          <div className="popular-card">
            <img
              src="https://assets.cntraveller.in/photos/63a436d5d7caa4e531854e5c/1:1/w_5773,h_5773,c_limit/Switzerland_GettyImages-1293043653.jpg"
              alt="Switzerland"
            />
            <h3>Switzerland</h3>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
        <div>
          <h2>500+</h2>
          <p>Travelers</p>
        </div>

        <div>
          <h2>100+</h2>
          <p>Destinations</p>
        </div>

       

      </section>
      <section className="cta-section">

  <h2>
    Ready For Your Next Adventure?
  </h2>

  <p>
    Discover amazing destinations and create unforgettable memories.
  </p>

  <a
    href="/destinations"
    className="hero-btn"
  >
    Start Exploring
  </a>

</section>
    </div>
  );
}

export default Home;