import FrontPage from "../frontpage/FrontPage";

const Home = () => {
  return (
    <div>
      <h1 className="header">Welcome to the Home page</h1>
      {/* Add appropriate content for the Home page */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
        }}
      >
        <FrontPage float="left" color="red" />
        <FrontPage float="right" color="white" />
        <FrontPage float="right" color="blue" />
        <FrontPage float="left" color="white" />
      </div>
      {/* <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1>
      <h1>Welcome to the Home page</h1> */}
    </div>
  );
};

export default Home;
