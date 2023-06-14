import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="column">
        <h3>Column 1</h3>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Google
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>
      <div className="column">
        <h3>Column 2</h3>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Google
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>
      <div className="column">
        <h3>Column 3</h3>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Google
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>
      <div className="column">
        <h3>Column 4</h3>
        <p>© {new Date().getFullYear()} SaeedNajafi. All Right Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
