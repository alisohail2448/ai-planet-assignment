import { statisticsData } from "../constants/constants";
import hero from "../assets/hero.png";


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-title">
            <h3>Accelerate Innovation <br /> with Global AI Challenges</h3>
          </div>
          <p>
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </p>
          <div>
            <button className="hero-button">Create Challenge</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="hero" width={400} height={400} />
        </div>
      </div>
      <div className="statistics-section">
        <div className="statistics-content">
          {statisticsData.map((stat, index) => (
            <div key={index} className="statistic-item">
              <img src={stat.icon} width={70} height={70} alt={stat.label} />
              <div>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
