import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="card red">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card blue">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card green">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
      </div>
      <div className="cards">
        <div className="card red">
          <p className="tip">Hover Me</p>
          <p className="second-text">FOLLOW ME MY BROO</p>
        </div>
        <div className="card white">
          <p className="tip">Hover Me</p>
          <p className="second-text">FOLLOW ME MY BROO</p>
        </div>
        <div className="card blue">
          <p className="tip">Hover Me</p>
          <p className="second-text">FOLLOW ME MY BROO</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
