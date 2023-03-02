import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <nav>
          <img src="" alt="logo" />
          <ul>
            <li>about</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div>
          <h1>We are creatives</h1>
          <p>Arrow</p>
        </div>
        <div>
          {/* Grid items */}
          <div>
            <h3>Transform your brand</h3>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <button>Learn more</button>
          </div>
          <img src="" alt="egg" />
          <img src="" alt="Cup" />
          <div>
            <h3>Stand out to the right audience</h3>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <button>Learn more</button>
          </div>
          <div>
            <h3>Graphic design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
          <div>
            <h3>Photography</h3>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
        {/* Testimonials */}
        <div>
          <h4>Client testimonials</h4>
          <div>
            <div>
              <img src="" alt="emily pic" />
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <div>
                <h2>Emily R.</h2>
                <p>Marketing Director</p>
              </div>
            </div>
            <div>
              <img src="" alt="Thomas pic" />
              <p>
                Sunnyside's enthusiasm coupled with their keen interest in our
                brand's success made it a satisfying and enjoyable experience.
              </p>
              <div>
                <h2>Thomas S.</h2>
                <p>Chief Operating Officer</p>
              </div>
            </div>
            <div>
              <img src="" alt="Thomas pic" />
              <p>
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <div>
                <h2>Jennie F.</h2>
                <p>Business Owner</p>
              </div>
            </div>
          </div>
        </div>
        {/* image grid */}
        <div>
          <img src="" alt="milk?" />
          <img src="" alt="orange" />
          <img src="" alt="cone" />
          <img src="" alt="sugar cubes" />
        </div>
        {/* footer */}
        <footer>
          <h2>sunnyside</h2>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
          <ul>
            <li>facebook</li>
            <li>instagram</li>
            <li>twitter</li>
            <li>pintrest</li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

export default App;
