import { useNavigate } from "react-router-dom";
import {
  formatDateTime,
  getStatusColor,
  getStatusTextColor,
} from "../utils/helper";
import { TaskAltOutlined } from "@mui/icons-material";
import { CSSProperties } from "react";


const styles: { [key: string]: CSSProperties } = {
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "350px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "150px",
    overflow: "hidden",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  contentContainer: {
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column" as 'column',
    alignItems: "center",
  },
  statusLabel: {
    display: "inline-block",
    padding: "5px 10px",
    fontSize: "12px",
    borderRadius: "15px",
    marginBottom: "10px",
    fontWeight: "600",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333333",
    marginBottom: "20px",
  },
  statusMessageContainer: {
    marginBottom: "20px",
  },
  statusMessageText: {
    color: "#444444",
    fontSize: "14px",
    fontWeight: "500",
  },
  timeContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  timeSegment: {
    display: "flex",
    flexDirection: "column" as 'column',
  },
  timeValue: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#454545",
  },
  timeLabel: {
    color: "#4F4F4F",
    fontSize: "10px",
  },
  timeSeparator: {
    color: "#4F4F4F",
    fontSize: "16px",
  },
  eventStartingNow: {
    fontSize: "14px",
    color: "#666666",
    marginBottom: "20px",
  },
  eventEndingNow: {
    fontSize: "14px",
    color: "#666666",
    marginBottom: "20px",
  },
  endDate: {
    fontSize: "18px",
    color: "#454545",
    fontWeight: "600",
  },
  participateButton: {
    backgroundColor: "#44924C",
    padding: "10px 15px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  icon: {
    fontSize: "18px",
    color: "#fff",
  },
  buttonText: {
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
  },
};


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
        <div style={styles.statusMessageContainer}>
          <p style={styles.statusMessageText}>Starts in</p>
          <div style={styles.timeContainer}>
            <div style={styles.timeSegment}>
              <span style={styles.timeValue}>
                {String(timeRemaining.days).padStart(2, "0")}
              </span>
              <span style={styles.timeLabel}>Days</span>
            </div>

            <span style={styles.timeSeparator}>:</span>

            <div style={styles.timeSegment}>
              <span style={styles.timeValue}>
                {String(timeRemaining.hours).padStart(2, "0")}
              </span>
              <span style={styles.timeLabel}>Hours</span>
            </div>

            <span style={styles.timeSeparator}>:</span>

            <div style={styles.timeSegment}>
              <span style={styles.timeValue}>
                {String(timeRemaining.minutes).padStart(2, "0")}
              </span>
              <span style={styles.timeLabel}>Mins</span>
            </div>
          </div>
        </div>
      ) : (
        <div style={styles.eventStartingNow}>
          <p>Event is starting now!</p>
        </div>
      );
    } else if (status === "Active") {
      return timeElapsed ? (
        <div style={styles.statusMessageContainer}>
          <p style={styles.statusMessageText}>Ends in</p>
          <div style={styles.timeContainer}>
            <div style={styles.timeSegment}>
              <span style={styles.timeValue}>
                {String(timeElapsed.days).padStart(2, "0")}
              </span>
              <span style={styles.timeLabel}>Days</span>
            </div>
            <span style={styles.timeSeparator}>:</span>

            <div style={styles.timeSegment}>
              <span style={styles.timeValue}>
                {String(timeElapsed.hours).padStart(2, "0")}
              </span>
              <span style={styles.timeLabel}>Hours</span>
            </div>
            <span style={styles.timeSeparator}>:</span>

            <div style={styles.timeSegment}>
              <span style={styles.timeValue}>
                {String(timeElapsed.minutes).padStart(2, "0")}
              </span>
              <span style={styles.timeLabel}>Mins</span>
            </div>
          </div>
        </div>
      ) : (
        <div style={styles.eventEndingNow}>
          <p>Event has ended!</p>
        </div>
      );
    } else if (status === "Past") {
      return (
        <div style={styles.statusMessageContainer}>
          <p style={styles.statusMessageText}>Ended on</p>
          <p style={styles.endDate}>{formatDateTime(endDate)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={styles.cardContainer}>
      <div style={styles.imageContainer}>
        <img src={imageUrl} alt={title} style={styles.image} />
      </div>
      <div style={styles.contentContainer}>
        <div
          style={{
            ...styles.statusLabel,
            backgroundColor: getStatusColor(status),
            color: getStatusTextColor(status),
          }}
        >
          {status}
        </div>
        <h3 style={styles.title}>{title}</h3>
        {renderStatusMessage()}
        <button
          onClick={() => navigate(`/${id}`)}
          style={styles.participateButton}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#218838")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#44924C")
          }
        >
          <TaskAltOutlined style={styles.icon} />
          <p style={styles.buttonText}>Participate Now</p>
        </button>
      </div>
    </div>
  );
};



export default Card;
