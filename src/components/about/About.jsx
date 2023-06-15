import "./About.css";

const About = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-header">
        <h1>About Us</h1>
      </div>
      <div className="about-us-content">
        <div className="about-us-image">
          <img src="https://source.unsplash.com/random" alt="About Us" />
        </div>
        <div className="about-us-text">
          <h2>Welcome to Our Company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            aliquam mauris et lectus interdum, at vulputate enim auctor. Fusce
            elementum iaculis tortor a malesuada.
          </p>
          <p>
            Nulla semper nunc id nibh interdum, id rhoncus tellus cursus. Ut ut
            lectus ut dolor tincidunt commodo. Fusce aliquam diam at scelerisque
            pulvinar.
          </p>
          <p>
            Quisque maximus magna a metus iaculis bibendum. Morbi a mauris nisl.
            Sed eleifend sollicitudin neque ullamcorper lacinia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
