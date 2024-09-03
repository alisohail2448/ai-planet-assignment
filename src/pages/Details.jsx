import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AccessTime } from "@mui/icons-material";
import level from "../assets/icons/level.svg";
import Description from "../components/Description";
import { getChallengeById, getStatusMessage } from "../utils/helpter";

const styles = {
  container: {
    background: "#003145",
    paddingBottom: 40,
  },
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 0",
  },
  statusContainer: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    background: "#FFCE5C",
    padding: "6px 10px",
    borderRadius: 6,
  },
  icon: {
    color: "#000",
    fontSize: 16,
  },
  statusText: {
    fontSize: "14px",
    color: "#000",
    fontWeight: "500",
  },
  title: {
    fontSize: "40px",
    color: "#fff",
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 20,
  },
  subheading: {
    fontSize: "18px",
    color: "#F8F9FD",
    fontWeight: "500",
    marginBottom: 30,
  },
  levelContainer: {
    background: "#fff",
    display: "inline-flex",
    gap: 10,
    alignItems: "center",
    padding: "8px 20px",
    borderRadius: 6,
  },
  levelText: {
    fontSize: "14px",
    color: "#003145",
    fontWeight: "500",
  },
};

const Details = () => {
  const [challenge, setChallenge] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const data = getChallengeById(Number(id));
      if (data) {
        setChallenge(data);
      }
    }
  }, [id]);

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <div style={styles.statusContainer}>
            <AccessTime style={styles.icon} />
            <p style={styles.statusText}>
              {getStatusMessage(
                challenge?.status,
                challenge?.startDate,
                challenge?.endDate
              )}
            </p>
          </div>
          <p style={styles.title}>{challenge?.title}</p>
          <p style={styles.subheading}>{challenge?.subheading}</p>
          <div style={styles.levelContainer}>
            <img src={level} alt="level" width={16} />
            <p style={styles.levelText}>{challenge?.level}</p>
          </div>
        </div>
      </div>
      <Description challenge={challenge} />
    </div>
  );
};

export default Details;
