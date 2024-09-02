import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChallengeById, getStatusMessage } from "../utils/helper";
import { AccessTime } from "@mui/icons-material";
import level from "../assets/icons/level.svg";
import Description from "../components/Description";

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
     <div
      style={{
        background: "#003145",
        height: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            background: "#FFCE5C",
            padding: "6px 10px",
            borderRadius: 6,
          }}
        >
          <AccessTime color="#000" fontSize="16" />
          <p
            style={{
              fontSize: "14px",
              color: "#000",
              fontWeight: "500",
            }}
          >
            {getStatusMessage(
              challenge?.status,
              challenge?.startDate,
              challenge?.endDate
            )}
          </p>
        </div>
        <p
          style={{
            fontSize: "40px",
            color: "#fff",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          {challenge?.title}
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#F8F9FD",
            fontWeight: "500",
            marginBottom: 30,
          }}
        >
          {challenge?.subheading}
        </p>

        <div
          style={{
            background: "#fff",
            display: "inline-flex",
            gap: 10,
            alignItems: "center",
            padding: "8px 20px",
            borderRadius: 6,
          }}
        >
          <img src={level} alt="level" width={16} />
          <p
            style={{
              fontSize: "14px",
              color: "#003145",
              fontWeight: "500",
            }}
          >
            {challenge?.level}
          </p>
        </div>
      </div>
    </div>
    <Description challenge={challenge} />
   </div>
  );
};

export default Details;
