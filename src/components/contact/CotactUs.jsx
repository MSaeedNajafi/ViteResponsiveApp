/* eslint-disable react/no-unknown-property */
const ContactUs = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <form className="form">
            <div className="input-block">
              <input className="input" type="text" id="email" required="" />
              <label htmlFor="email">Username</label>
            </div>
            <div className="input-block">
              <input className="input" type="password" id="pass" required="" />
              <label htmlFor="pass">Password</label>
            </div>
            <div className="input-block">
              <span className="forgot">
                <a href="#">Forgot Password?</a>
              </span>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
