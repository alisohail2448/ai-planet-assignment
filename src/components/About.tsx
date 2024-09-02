import { cardsData } from "../constants/constants";


const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <p className="about-title">
          Why Participate in <span className="highlight">AI Challenges?</span>
        </p>

        <div className="cards-grid">
          {cardsData.map((card, index) => (
            <div key={index} className="card-item">
              <img src={card.icon} alt={card.title} width={50} height={50} />
              <p className="card-title">{card.title}</p>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
