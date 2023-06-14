import "./noPageCss.css";

const NoPage = () => {
  return (
    <div className="noPageContainer">
      <p className="noPagePHeader">Sorry, page not found!</p>

      <p className="noPagePText">
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </p>

      <img
        alt="img"
        src="https://minimal-kit-react.vercel.app/assets/illustrations/illustration_404.svg"
      />
      <div className="btnContainer">
        <a
          className="btnToGoHome"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
        >
          Home
        </a>
      </div>
    </div>
  );
};

export default NoPage;
