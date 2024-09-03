import { CSSProperties } from "react";
import { cardsData } from "../constants/constants";

const styles: { [key: string]: CSSProperties } = {
  aboutContainer: {
    background: "#fff",
    height: "100%",
  },
  aboutContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "100px 0",
  },
  aboutTitle: {
    fontSize: "32px",
    color: "#000",
    fontWeight: 600,
    textAlign: "center",
    paddingBottom: "100px",
  },
  highlight: {
    color: "#44924c",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "40px",
  },
  cardItem: {
    background: "#f8f9fd",
    padding: "60px 30px",
    borderRadius: "10px",
    display: "flex",
    gap: "10px",
    flexDirection: "column" as 'column',
  },
  cardTitle: {
    fontSize: "24px",
    color: "#000",
    fontWeight: 600,
  },
  cardDescription: {
    fontSize: "16px",
    color: "#64607d",
  },
};

const About = () => {
  return (
    <div style={styles.aboutContainer}>
      <div style={styles.aboutContent}>
        <p style={styles.aboutTitle}>
          Why Participate in{" "}
          <span style={styles.highlight}>AI Challenges?</span>
        </p>

        <div style={styles.cardsGrid}>
          {cardsData.map((card, index) => (
            <div key={index} style={styles.cardItem}>
              <img src={card.icon} alt={card.title} width={50} height={50} />
              <p style={styles.cardTitle}>{card.title}</p>
              <p style={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
