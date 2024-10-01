// import useMediaQuery from "@mui/material/useMediaQuery";
import koko_brews_hero_video from "./assets/koko_brews_hero_video.mp4";
// import koko_brews_hero_video_desktop from "./assets/koko_brews_hero_video_desktop.mp4";
import koko_brews_img_1 from "./assets/koko_brews_img_1.png";
import "./App.css";

function App() {
  // const isMobile = useMediaQuery("(max-width:767px)");

  return (
    <>
      <div className="video-container">
        {/* {isMobile ? (
          <video id="background-video" autoPlay loop muted>
            <source src={koko_brews_hero_video} type="video/mp4" />
          </video>
        ) : (
          <video id="background-video" autoPlay loop muted>
            <source src={koko_brews_hero_video_desktop} type="video/mp4" />
          </video>
        )} */}
        <video id="background-video" autoPlay loop muted playsInline>
          <source src={koko_brews_hero_video} type="video/mp4" />
        </video>
        {/* <div className="hero-overlay"></div> */}
      </div>
      <main className="main-content">
        <div className="intro-background">
          <div className="intro-image-container container">
            <div className="intro-container">
              {/* Coffee Intro Section */}
              <section className="intro">
                <h1>Welcome to Koko Brews ☕</h1>
                <h2>Discover Your Perfect Brew</h2>
                <p>Where creativity meets the finest coffee in Karachi</p>
              </section>

              {/* Operating Hours */}
              <section className="hours">
                <h2>Our Hours</h2>
                <ul>
                  <li>
                    <div>
                      <b>Sunday - Thursday:&nbsp;&nbsp;</b>
                      <span>8:00 AM – 1:00 AM</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <b>Friday - Saturday:&nbsp;&nbsp;</b>
                      <span>8:00 AM – 2:00 AM</span>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Location */}
              <section className="location">
                <h2>Our Location</h2>
                <p>Shaheed-e-Millat, near Mandihouse, Karachi</p>
                <a
                  href="https://maps.app.goo.gl/RnjjZHu5EhGuDPhT6?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Find us on Google Maps 📍
                </a>
              </section>
            </div>
            <div>
              <img
                src={koko_brews_img_1}
                className="koko-brews-coffee-cup-img"
                alt="koko brews coffee cup"
                width="400"
                height="436"
              />
            </div>
          </div>
        </div>

        {/* Why Koko Brews */}
        <section className="why-koko">
          <h2>Why Koko Brews?</h2>
          <ul>
            <li>
              <strong>Signature Coffees:</strong> Crafted to perfection
            </li>
            <li>
              <strong>Artistic Desserts:</strong> A treat for the eyes and taste
              buds
            </li>
            <li>
              <strong>Relaxed Vibes:</strong> The perfect spot to unwind
            </li>
          </ul>
        </section>

        {/* Socials */}
        <section className="socials">
          <h2>Follow us on Socials</h2>
          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Koko Brews – Your daily dose of creativity and caffeine.</p>
      </footer>
    </>
  );
}

export default App;
