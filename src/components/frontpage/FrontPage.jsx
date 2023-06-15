/* eslint-disable react/prop-types */
import "./FrontPage.css";
const FrontPage = ({ float, color }) => {
  return (
    <div className="container-page" style={{ backgroundColor: color }}>
      <div className="container-header">
        <h1>About Us</h1>
      </div>
      {float == "left" && (
        <>
          <div className="container-content">
            <div className="container-image">
              <img src="https://source.unsplash.com/random" alt="About Us" />
            </div>
            <div className="container-text">
              <h2>Welcome to Our Company</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquam mauris et lectus interdum, at vulputate enim auctor.
                Fusce elementum iaculis tortor a malesuada.
              </p>
              <p>
                Nulla semper nunc id nibh interdum, id rhoncus tellus cursus. Ut
                ut lectus ut dolor tincidunt commodo. Fusce aliquam diam at
                scelerisque pulvinar.
              </p>
              <p>
                Quisque maximus magna a metus iaculis bibendum. Morbi a mauris
                nisl. Sed eleifend sollicitudin neque ullamcorper lacinia.
              </p>
            </div>
          </div>
        </>
      )}
      {float == "right" && (
        <>
          <div className="container-content">
            <div className="container-text">
              <h2>Welcome to Our Company</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquam mauris et lectus interdum, at vulputate enim auctor.
                Fusce elementum iaculis tortor a malesuada.
              </p>
              <p>
                Nulla semper nunc id nibh interdum, id rhoncus tellus cursus. Ut
                ut lectus ut dolor tincidunt commodo. Fusce aliquam diam at
                scelerisque pulvinar.
              </p>
              <p>
                Quisque maximus magna a metus iaculis bibendum. Morbi a mauris
                nisl. Sed eleifend sollicitudin neque ullamcorper lacinia.
              </p>
            </div>
            <div className="container-image">
              <img src="https://source.unsplash.com/random" alt="About Us" />
            </div>
          </div>
        </>
      )}
    </div>
    // <div
    //   style={{
    //     backgroundColor: color,
    //   }}
    //   className="frontPageContainer"
    // >
    //   {float == "left" && (
    //     <>
    //       <div className="imgContainer">
    //         <img
    //           src="https://i.pinimg.com/originals/dc/9f/d2/dc9fd28046a8976d5eda9e08c962d4ac.jpg"
    //           alt="Company Logo"
    //           className="imgCompany"
    //           style={{ float: float }}
    //         />
    //       </div>
    //       <div>
    //         <div className="text-section">
    //           <h2>About Our Solutions and Services</h2>
    //           <p>Add your content here</p>
    //         </div>
    //         <div className="text-section">
    //           <h2>Our Partners</h2>
    //           <p>Add your content here</p>
    //         </div>
    //         <div className="text-section">
    //           <h2>Our Achievements</h2>
    //           <p>Add your content here</p>
    //         </div>
    //       </div>
    //     </>
    //   )}
    //   {float == "right" && (
    //     <>
    //       <div>
    //         <div className="text-section">
    //           <h2>About Our Solutions and Services</h2>
    //           <p>Add your content here</p>
    //         </div>
    //         <div className="text-section">
    //           <h2>Our Partners</h2>
    //           <p>Add your content here</p>
    //         </div>
    //         <div className="text-section">
    //           <h2>Our Achievements</h2>
    //           <p>Add your content here</p>
    //         </div>
    //       </div>
    //       <div className="imgContainer">
    //         <img
    //           src="https://i.pinimg.com/originals/dc/9f/d2/dc9fd28046a8976d5eda9e08c962d4ac.jpg"
    //           alt="Company Logo"
    //           className="imgCompany"
    //           style={{ float: float }}
    //         />
    //       </div>
    //     </>
    //   )}
    // </div>
  );
};

export default FrontPage;
