import { statisticsData } from "../constants/constants";
import hero from "../assets/hero.png";
import { useNavigate } from "react-router-dom";

const styles = {
  heroContainer: {
    background: "#003145",
    height: "100%",
  },
  heroContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "100px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  heroText: {
    width: "60%",
    display: "flex",
    gap: "50px",
    flexDirection: "column",
  },
  heroTitle: {
    borderLeft: "10px solid #ffce5c",
    paddingLeft: "40px",
  },
  heroTitleH3: {
    color: "#fff",
    fontSize: "50px",
  },
  heroTextP: {
    fontSize: "18px",
    color: "#ececec",
    width: "65%",
    paddingLeft: "40px",
  },
  heroButton: {
    color: "#003145",
    background: "#fff",
    border: "none",
    outline: "none",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "10px",
    fontSize: "18px",
    marginLeft: "40px",
  },
  heroImage: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
  },
  statisticsSection: {
    background: "#002a3b",
    padding: "50px 0px",
  },
  statisticsContent: {
    padding: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statisticItem: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  statValue: {
    fontSize: "28px",
    color: "#fff",
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: "16px",
    color: "#fff",
  },
};

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.heroContainer}>
      <div style={styles.heroContent}>
        <div style={styles.heroText}>
          <div style={styles.heroTitle}>
            <h3 style={styles.heroTitleH3}>
              Accelerate Innovation <br /> with Global AI Challenges
            </h3>
          </div>
          <p style={styles.heroTextP}>
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </p>
          <div>
            <button
              onClick={() => navigate("/create")}
              style={styles.heroButton}
            >
              Create Challenge
            </button>
          </div>
        </div>
        <div style={styles.heroImage}>
          <img src={hero} alt="hero" width={400} height={400} />
        </div>
      </div>
      <div style={styles.statisticsSection}>
        <div style={styles.statisticsContent}>
          {statisticsData.map((stat, index) => (
            <div key={index} style={styles.statisticItem}>
              <img src={stat.icon} width={70} height={70} alt={stat.label} />
              <div>
                <p style={styles.statValue}>{stat.value}</p>
                <p style={styles.statLabel}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
