import { useNavigate } from "react-router-dom";
import {
  formatDateTime,
  getStatusColor,
  getStatusTextColor,
} from "../utils/helper";
import { TaskAltOutlined } from "@mui/icons-material";

const Card = ({
  id,
  status,
  title,
  startDate,
  endDate,
  buttonText,
  imageUrl,
}) => {
  const navigate = useNavigate();

  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  const calculateTimeRemaining = (targetDate) => {
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) return null;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const timeRemaining =
    status === "Upcoming" ? calculateTimeRemaining(start) : null;
  const timeElapsed = status === "Active" ? calculateTimeRemaining(end) : null;

  const renderStatusMessage = () => {
    if (status === "Upcoming") {
      return timeRemaining ? (
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <p style={{ color: "#444444", fontSize: "14px", fontWeight: "500" }}>
            Starts in
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#454545",
                }}
              >
                {String(timeRemaining.days).padStart(2, "0")}
              </span>
              <span style={{ color: "#4F4F4F", fontSize: "10px" }}>Days</span>
            </div>

            <span style={{ color: "#4F4F4F", fontSize: "16px" }}>:</span>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{ color: "#4F4F4F", fontSize: "10px" }}
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#454545",
                }}
              >
                {String(timeRemaining.hours).padStart(2, "0")}
              </span>
              <span style={{ color: "#4F4F4F", fontSize: "10px" }}>Hours</span>
            </div>

            <span style={{ color: "#4F4F4F", fontSize: "16px" }}>:</span>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{ color: "#4F4F4F", fontSize: "10px" }}
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#454545",
                }}
              >
                {String(timeRemaining.minutes).padStart(2, "0")}
              </span>
              <span style={{ color: "#4F4F4F", fontSize: "10px" }}>Mins</span>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            fontSize: "14px",
            color: "#666666",
            marginBottom: "20px",
          }}
        >
          <p>Event is starting now!</p>
        </div>
      );
    } else if (status === "Active") {
      return timeElapsed ? (
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <p style={{ color: "#444444", fontSize: "14px", fontWeight: "500" }}>
            Ends in
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#454545",
                }}
              >
                {String(timeElapsed.days).padStart(2, "0")}
              </span>
              <span style={{ color: "#4F4F4F", fontSize: "10px" }}>Days</span>
            </div>
            <span style={{ color: "#4F4F4F", fontSize: "16px" }}>:</span>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#454545",
                }}
              >
                {String(timeElapsed.hours).padStart(2, "0")}
              </span>
              <span style={{ color: "#4F4F4F", fontSize: "10px" }}>Hours</span>
            </div>
            <span style={{ color: "#4F4F4F", fontSize: "16px" }}>:</span>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#454545",
                }}
              >
                {String(timeElapsed.minutes).padStart(2, "0")}
              </span>
              <span style={{ color: "#4F4F4F", fontSize: "10px" }}>Mins</span>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            fontSize: "14px",
            color: "#666666",
            marginBottom: "20px",
          }}
        >
          <p>Event has ended!</p>
        </div>
      );
    } else if (status === "Past") {
      return (
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <p style={{ color: "#444444", fontSize: "14px", fontWeight: "500" }}>
            Ended on
          </p>
          <p style={{ fontSize: "18px", color: "#454545", fontWeight: "600" }}>
            {formatDateTime(endDate)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "350px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "150px",
          overflow: "hidden",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "5px 10px",
            fontSize: "12px",
            backgroundColor: getStatusColor(status),
            color: getStatusTextColor(status),
            borderRadius: "15px",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          {status}
        </div>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333333",
            marginBottom: "20px",
          }}
        >
          {title}
        </h3>
        {renderStatusMessage()}
        <button
          onClick={() => navigate(`/${id}`)}
          style={{
            backgroundColor: "#44924C",
            padding: "10px 15px",
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#218838")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#28a745")
          }
        >
          <TaskAltOutlined style={{ fontSize: 18, color: "#fff" }} />
          <p style={{ color: "white", fontSize: "14px", fontWeight: "600" }}>
            Participate Now
          </p>
        </button>
      </div>
    </div>
  );
};

export default Card;
